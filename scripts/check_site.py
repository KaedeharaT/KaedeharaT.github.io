"""Validate the explicit public manifest, static paths, staged files and history."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import argparse,json,re,subprocess,sys
ROOT=Path(__file__).resolve().parents[1]
MANIFEST=json.loads((ROOT/'.publish-files.json').read_text(encoding='utf-8'))
PATTERNS={
 'GitHub credential':r'\b(?:gh[pousr]_[A-Za-z0-9_]{25,}|github_pat_[A-Za-z0-9_]{25,})\b',
 'Google API credential':r'\bAIza[A-Za-z0-9_-]{30,}\b',
 'AWS access key':r'\b(?:AKIA|ASIA)[A-Z0-9]{16}\b',
 'Private key':r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
 'Assigned secret':r'(?im)\b(?:api_key|access_token|password|client_secret)\s*[:=]\s*[\x22\x27][^\x22\x27\n]{8,}[\x22\x27]'
}
def fail(message):raise SystemExit('Public-file check failed: '+message)
def check_text(name,data):
 try:text=data.decode('utf-8-sig')
 except UnicodeDecodeError:return
 for label,pattern in PATTERNS.items():
  if re.search(pattern,text):fail(name+': possible '+label+' (value withheld)')
def git(*args):return subprocess.check_output(['git',*args],cwd=ROOT)
class Resources(HTMLParser):
 def __init__(self):super().__init__();self.refs=[];self.ids=set();self.anchors=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  for key in ['src','href']:
   if key in a:
    ref=a[key]
    if ref.startswith('#'):self.anchors.append(ref[1:])
    elif ref and not urlsplit(ref).scheme and not ref.startswith('//'):self.refs.append(unquote(urlsplit(ref).path))
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--tracked',action='store_true');parser.add_argument('--staged',action='store_true');parser.add_argument('--history',action='store_true');args=parser.parse_args()
 public=set(MANIFEST['repository_files']);site=set(MANIFEST['site_files'])
 if not site.issubset(public):fail('site manifest is not a subset of repository manifest')
 for name in public:
  path=ROOT/name
  if not path.is_file() or path.is_symlink() or not path.resolve().is_relative_to(ROOT):fail('missing/unsafe file '+name)
  if any(part in ['_private','.local','dist','node_modules','__pycache__'] for part in Path(name).parts) or path.suffix.lower() in ['.pdf','.db','.env','.key','.pem']:fail('forbidden path '+name)
  check_text(name,path.read_bytes())
 html=(ROOT/'index.html').read_text(encoding='utf-8-sig');resources=Resources();resources.feed(html)
 for ref in resources.refs:
  if ref not in site:fail('static resource outside site manifest: '+ref)
 for anchor in resources.anchors:
  if anchor and anchor not in resources.ids:fail('missing anchor '+anchor)
 script=(ROOT/'assets/js/content.js').read_text(encoding='utf-8-sig')
 config=json.loads(script.split('window.profileConfig = ',1)[1].split(';',1)[0]);content=json.loads(script.split('window.content = ',1)[1].strip().removesuffix(';'))
 if config.get('resume',{}).get('approved') or config.get('resume',{}).get('url'):fail('Resume is not approved for public release')
 if config.get('publications'):fail('Publications require verified bibliographic information before enabling')
 for lang in ['ja','en']:
  t=content[lang]
  if t['projects'][1]['images']:fail('HealthOps must remain text-only')
  if 'Engineering Tools' in json.dumps(t['skills']):fail('removed skill group restored')
  for project in t['projects']:
   for image in project['images']:
    if 'assets/img/'+image[0] not in site:fail('project image not allowlisted')
 for flag,command in [(args.tracked,['ls-files','-z']),(args.staged,['diff','--cached','--name-only','--diff-filter=ACMR','-z'])]:
  if flag:
   paths=git(*command).decode('utf-8').strip('\x00').split('\x00')
   for path in filter(None,paths):
    if path not in public:fail('Git tracks an unreviewed file: '+path)
    if args.staged:check_text('staged:'+path,git('show',':'+path))
 if args.history:
  commits=git('rev-list','--all').decode().splitlines()
  for commit in commits:
   entries=git('ls-tree','-r',commit).decode('utf-8').splitlines()
   for entry in entries:
    meta,name=entry.split('\t',1)
    if name not in public:fail('history contains an unreviewed file: '+name)
    mode,kind,sha=meta.split()
    if kind!='blob' or mode=='120000':fail('unsafe historical object: '+name)
    check_text('history:'+name,git('cat-file','blob',sha))
 print(f'PASS: {len(public)} reviewed repository files, {len(site)} static files; Resume disabled, Publications hidden.')
if __name__=='__main__':main()

"""Package only the approved runtime files; never copies private drafts."""
from pathlib import Path
import argparse,json,shutil,subprocess,sys
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--output',default='dist');args=parser.parse_args()
DEST=(ROOT/args.output).resolve()
if not DEST.is_relative_to(ROOT) or DEST==ROOT:raise SystemExit('Output must be a separate directory inside this workspace.')
if DEST.exists():raise SystemExit('Output exists. Choose a new --output directory; no existing files will be deleted.')
subprocess.run([sys.executable,str(ROOT/'scripts/check_site.py')],check=True)
manifest=json.loads((ROOT/'.publish-files.json').read_text(encoding='utf-8'))
DEST.mkdir(parents=True)
for name in manifest['site_files']:
 target=DEST/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ROOT/name,target)
print('Public-only runtime package: '+str(DEST))

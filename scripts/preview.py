"""Local-only, allowlisted preview. Never serves workspace/private files."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote
import argparse
ROOT = Path(__file__).resolve().parents[1]
PUBLIC_FILES = {'index.html', '.nojekyll'}
class Preview(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def do_GET(self):
        if self.allowed(): super().do_GET()
    def do_HEAD(self):
        if self.allowed(): super().do_HEAD()
    def allowed(self):
        path=unquote(urlsplit(self.path).path).lstrip('/') or 'index.html'
        target=(ROOT/path).resolve()
        allowed=(target == ROOT/'index.html' or (target.is_relative_to(ROOT/'assets') and target.is_file() and target.suffix.lower() in {'.css','.js','.jpg','.jpeg','.png','.webp','.svg'}))
        if not allowed: self.send_error(404); return False
        return True
    def end_headers(self):
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Cache-Control','no-store')
        super().end_headers()
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8080);args=parser.parse_args()
    print(f'Local preview: http://127.0.0.1:{args.port} (Ctrl+C to stop)',flush=True)
    ThreadingHTTPServer(('127.0.0.1',args.port),Preview).serve_forever()

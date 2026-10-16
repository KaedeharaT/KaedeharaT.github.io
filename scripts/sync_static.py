"""Refresh the default Japanese HTML from the same content used by the UI.
Development tool only; requires Playwright and Chromium, not needed for preview.
"""
from pathlib import Path
import argparse, re, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8087);args=parser.parse_args()
server=subprocess.Popen([sys.executable,str(ROOT/'scripts/preview.py'),'--port',str(args.port)],cwd=ROOT,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
    time.sleep(.7)
    with sync_playwright() as p:
        browser=p.chromium.launch()
        page=browser.new_page()
        page.goto(f'http://127.0.0.1:{args.port}')
        page.wait_for_function('document.querySelectorAll(".quick-links a").length===3')
        html=(ROOT/'index.html').read_text(encoding='utf-8-sig')
        for selector,pattern in [('main',r'<main id="main"[^>]*>.*?</main>'),('nav',r'<nav id="nav".*?</nav>'),('footer',r'<footer>.*?</footer>')]:
            rendered=page.locator(selector).evaluate('(e)=>e.outerHTML')
            html,count=re.subn(pattern,lambda m:rendered,html,count=1,flags=re.S)
            if count!=1:raise RuntimeError('Missing static container: '+selector)
        (ROOT/'index.html').write_text(html,encoding='utf-8')
        browser.close()
    print('Default Japanese HTML synchronized.')
finally:
    server.terminate();server.wait(timeout=10)

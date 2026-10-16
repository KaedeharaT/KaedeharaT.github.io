# Feng Yuanze — Personal Portfolio

Website: https://kaedeharat.github.io/  
Repository: https://github.com/KaedeharaT/KaedeharaT.github.io

A buildless HTML/CSS/JavaScript portfolio with Japanese as the default language, English switching, light/dark/system themes, responsive navigation, PhD research workflow, BuildingAI screenshots and a text-only Executive HealthOps case study. No backend, API credentials, tracking scripts or external fonts are needed.

## Local preview

```powershell
cd E:\YuanzeHomepage
python scripts/preview.py
```

Open http://127.0.0.1:8080 . Stop with Ctrl+C. For another port: `python scripts/preview.py --port 8081`.

Use this server rather than serving the whole workspace: it only exposes the homepage and static assets, and blocks private materials and review drafts.

## Deployment

GitHub Pages publishes **main / (root)** directly. `index.html` is at the repository root, `.nojekyll` disables Jekyll processing, and all runtime resource paths are relative. No build or `dist` directory is required for Pages. Every push to main automatically starts GitHub’s Pages build/deployment. A separate validation workflow checks the public file manifest and JavaScript syntax; it does not upload private files or require secrets.

Check the **Actions** tab for validation and the built-in **pages build and deployment** run. In Settings → Pages, the source must remain “Deploy from a branch”, branch **main**, folder **/(root)**. The source choice is documented by [GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Update the website

1. Edit both `ja` and `en` in `assets/js/content.js`. Layout and interactions are in `assets/css/style.css` and `assets/js/app.js`.
2. If content or rendering changes, synchronize the default Japanese HTML:

   ```powershell
   python scripts/sync_static.py
   ```

   This development command needs Playwright/Chromium. On the original workstation, the existing tool environment can be used with `_private/tools/Scripts/python scripts/sync_static.py`. On a fresh checkout, create a virtual environment under `.local/venv`, install Playwright there, and run `python -m playwright install chromium` using that interpreter. None of these dependencies is needed by the deployed site.
3. Run `python scripts/check_site.py`, preview the page, and check desktop/mobile, both languages and themes. When adding a new public asset, explicitly add it to `.publish-files.json` and the corresponding allowlist exception in `.gitignore`; all other files are ignored by default.
4. Review and commit only the public files. If Git/gh are not on PATH on the original workstation, first run `$env:Path = "$PWD\.local\tools\git\cmd;$PWD\.local\tools\gh\bin;$env:Path"` in this PowerShell session:

   ```powershell
   git add -- .gitignore .publish-files.json index.html assets scripts README.md THIRD_PARTY_NOTICES.md .nojekyll .github
   python scripts/check_site.py --tracked --staged --history
   git diff --cached --stat
   git commit -m "Update personal portfolio"
   git push origin main
   ```

5. Wait for the Pages deployment to complete, then verify https://kaedeharat.github.io/ . Check photo, PhD diagram, BuildingAI screenshots, language/theme switching and mobile navigation. A hard refresh may be needed for cached resources.

Git and GitHub CLI are required for repository maintenance. On the original workstation, portable official binaries are available under `.local/tools/git/cmd/git.exe` and `.local/tools/gh/bin/gh.exe`; these tools are not committed. Use `gh auth login --hostname github.com --git-protocol https --web` for browser login. Never paste passwords or tokens into source files or chat.

## Privacy and source control

`.publish-files.json` is the explicit publication manifest; `.gitignore` denies all other root files by default. The private source CVs, review-only Resume, internal audits, local tools/caches, environment files and generated outputs must never be committed. `scripts/check_site.py --tracked --staged --history` checks tracked/staged paths and reachable history against the manifest and scans common secret signatures without printing secret values. Review unusual changes manually as well.

The **Resume download remains disabled**: `profileConfig.resume.approved` is false and its URL is empty. No PDF is published. A separately approved final PDF, preview rules, validation and manifest must be reviewed together before enabling a download. Original CVs must never be used as downloadable files.

Publications remain hidden until complete, verified bibliographic information is supplied. Research numbers retain their internal evaluation scope; no automatic drawing-to-BEMS matching, clinical deployment or data-center operations experience is claimed. The Engineering Tools skill group remains removed. Project image attribution and licenses are in `THIRD_PARTY_NOTICES.md`.

## Optional runtime package

```powershell
python scripts/package_site.py --output .local/site-preview
```

This copies only approved runtime files into a new directory and refuses to overwrite an existing output. It is useful for inspecting artifacts; GitHub Pages does not need it.

# Portfolio — Nguyen Dinh Phuc

This repository contains a small static portfolio generated from `cv.txt` and ready for deployment to GitHub Pages.

How to preview locally

- Open `index.html` directly in your browser, or run a simple static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Replace photos

- Replace the files in `assets/images/` (photo1.svg .. photo4.svg) with your real images. You can use JPG/PNG; update the `src` paths in `index.html` if you rename them.

Deploy to GitHub Pages (automatic)

1. Create a GitHub repository and push this project to the `main` branch.
2. The workflow at `.github/workflows/deploy.yml` will run on pushes to `main` and deploy the repository root to GitHub Pages using the default branch/actions settings.
3. After the workflow completes, enable GitHub Pages in your repository settings if required, or check the action output for the published URL.

Notes

- The site is plain HTML/CSS/JS — no build step required. The Actions workflow uses the `peaceiris/actions-gh-pages` action to publish the repository root.
- If you prefer the `gh-pages` branch, uncomment/adjust the `publish_branch` in the workflow.

Contact

- Email: dinhphucaz52@gmail.com


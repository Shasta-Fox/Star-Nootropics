# Star Nootropics Research — GitHub export

This archive contains the source for published version 32 of:
https://starnootropics-research.shastafox.chatgpt.site/

Source commit: `e568f9aec3749779f59d429832539a76a484c744`
Export prepared: October 3, 2026 (America/Chicago).

The original project source is preserved. This file is the only addition. Later local edits are not included, so this export matches the published version rather than unfinished work.

## Put the project on GitHub

1. Extract the ZIP.
2. Create a GitHub repository.
3. Add the contents of the extracted `starnootropics-research` folder to the repository root. `package.json` should be at the root.
4. Include hidden project files such as `.gitignore`, `.npmrc`, and `.openai/hosting.json`.

Use GitHub Desktop or Git to add the entire folder if browser uploading omits hidden files. Upload the extracted files, not just the ZIP, to make the code browsable and editable on GitHub.

## Run locally

Install Node.js 24 or newer, open a terminal in the extracted project, then run:

```sh
npm run install:ci
npm run dev
```

Open the local address printed in the terminal. For a production build:

```sh
npm run build
```

See `README.md` and `INFRASTRUCTURE.md` for the original project notes.

## Hosting

Uploading source to GitHub does not publish a website. This project uses React/TypeScript with Vinext and Cloudflare-compatible server output. It is not a ready-to-deploy GitHub Pages static site; GitHub Pages requires a separate static-export conversion and validation.

The `.openai/hosting.json` file identifies the existing Sites project. It is not a credential. GitHub upload does not change the current hosted site.

## Export verification

The source commit was matched to successful Sites deployment version 32. ZIP contents were checked against the exported source and the archive was tested for corruption. Dependencies, Git history, local environment files, and runtime caches are not included. No fresh dependency installation or production build was performed for this source-only export.

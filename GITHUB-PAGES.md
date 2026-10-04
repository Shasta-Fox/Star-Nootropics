# GitHub Pages hosting

The GitHub Pages workflow publishes the original site's app, components, data,
styles, and public assets. It uses the existing dependency lockfile.

Run locally with Node.js 24:

```sh
npm ci
node build-github-pages.mjs
```

Static output is written to `.github-pages-build/out/`. The builder uses a
throwaway copy so the original Sites files and all code backups stay intact.
It configures Next.js static export and prefixes internal URLs with
`/Star-Nootropics` for this repository's GitHub Pages address. Search, filters,
and contact controls retain their client-side JavaScript.

Commits to `main` trigger `.github/workflows/github-pages.yml`. Only the
exported public website is uploaded to Pages; source archives and Git-history
backups are not part of the hosted website.

To change the website, edit the normal `app/`, `components/`, `data/`, or
`public/` files and commit to `main`. Do not edit generated output.

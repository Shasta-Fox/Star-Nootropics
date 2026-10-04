# starnootropics/research — Infrastructure

## Included

App Router React/TypeScript site, Vinext/Vite build, Cloudflare Workers-compatible server, public assets, dependency lockfile, and `.openai/hosting.json` identifying the OpenAI Sites project.

## Local setup

1. Install Node.js 24 or newer.
2. Open a terminal in `starnootropics/research`.
3. Run `npm run install:ci`.
4. Run `npm run dev` and use the local address printed in the terminal.
5. Run `npm run build` for production output in `dist/server` and `dist/client`.

## Hosted infrastructure

OpenAI Sites hosts the deployment and provides public website access. The configured project belongs to Shasta. Source code and a hosting project ID do not grant account access. Hosting credentials and signing secrets are deliberately excluded.

To update this deployment, use the Sites plugin from the authorized owner account, retain the project ID in `.openai/hosting.json`, push the source to the configured Sites repository, save a matching built version, and deploy publicly. Changes remain subject to Shasta’s approval.

For a separate deployment, create a separate hosting project using the target account; do not overwrite the existing project ID unless intentionally changing the deployment target. Cloudflare-compatible build output can be adapted to another host, with access configured to match the intended audience.

No database, payment service, API key, or durable storage is required. Google Fonts supplies Inter and Source Serif 4; system serif/sans fallbacks remain available. Recommended reading links point to third-party sites. Citations, legal status, and monograph evidence are pending review.

## Access and approvals

Audience: public, as requested by Shasta. No board member invitation flow or supplement store is active. The published site excludes the earlier internal governance and succession draft. Changes to the site remain subject to Shasta’s approval.

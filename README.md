# starnootropics/research

Public research and recommended-reading website for Star Nootropics. Shasta Fox is the founder and primary decision-maker. No board or supplement store currently operates through this site.

## Run locally

Use Node.js 24 or newer. In this folder, run `npm run install:ci`, then `npm run dev`. Open the local address printed in the terminal. Use `npm run build` for production output.

## Pages

- `/`: overview.
- `/research`: five research-only monograph scaffolds and evidence legend.
- `/research/piracetam`, `/research/noopept`, `/research/bromantane`, `/research/semax`, `/research/selank`: clearly unfinished research drafts; no dosing, checkout, sourcing, or verified efficacy claims.
- `/policy`: research and editorial policy, including research/commerce separation.
- `/monograph-template`: standard template and clearly labelled example evidence row.
- `/library`: 84 recommended-reading references with search and format filters. Citation and link verification remain pending.
- `/shop`: closed-store notice.
- `/archive`: empty archive notice.

Source types live in `data/types.ts`. Commercial relationship values are `research-only`, `sold-by-star`, and `affiliate-related`.

See `INFRASTRUCTURE.md` for hosting and configuration. This project is separate from Earth Star.

## September 28 research update

Three narrative monographs are available under /nootropics/racetams: piracetam, oxiracetam, and aniracetam. The /library page includes the new article records, and /oxiracetam-library provides a filtered specialist archive. Editable Astro source is in astro-source/. These authored reviews are not represented as independently peer-reviewed or systematic reviews.

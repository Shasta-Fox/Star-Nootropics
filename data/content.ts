export const evidenceLegend = {
  "H1": "Systematic review or meta-analysis of controlled human studies",
  "H2": "Randomized controlled human trial",
  "H3": "Controlled or nonrandomized human study",
  "H4": "Observational human evidence",
  "P1": "Animal / in-vivo evidence",
  "P2": "In-vitro / cellular evidence",
  "M": "Mechanistic or theoretical evidence",
  "A": "Anecdotal or historical report"
} as const;
export const evidenceExample = { area: "Cognition", evidenceClass: "H2", confidence: "Moderate", population: "Adults", finding: "Example finding — replace after evidence review", limitation: "Example: small sample size" } as const;

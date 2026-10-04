import type { CommercialRelationship } from "@/data/types";
export function ResearchBanner({relationship}:{relationship:CommercialRelationship}) {
 if(relationship === "research-only") return <aside className="researchBanner researchOnly"><strong>RESEARCH LIBRARY — NOT A STAR PRODUCT</strong><span>This article examines a scientific or historical subject. No purchase, checkout, retailer, or affiliate link is provided from this monograph.</span></aside>;
 if(relationship === "sold-by-star") return <aside className="researchBanner commercialDisclosure"><strong>RESEARCH + COMMERCIAL DISCLOSURE</strong><span>Star sells a product related to this topic. That financial relationship is disclosed and does not change the evidence standard used in this review.</span></aside>;
 return <aside className="researchBanner commercialDisclosure"><strong>RESEARCH + AFFILIATE DISCLOSURE</strong><span>Star may receive compensation from clearly identified commercial links related to this topic. Affiliate relationships do not determine research conclusions.</span></aside>;
}

export type EvidenceClass = "H1" | "H2" | "H3" | "H4" | "P1" | "P2" | "M" | "A";
export type Confidence = "High" | "Moderate" | "Low" | "Very Low" | "Not rated";
export type LegalStatusRow = { jurisdiction: string; authority: string; status: string; verified: string; sourceUrl?: string; };
export type EvidenceRow = { area: string; evidenceClass: EvidenceClass; confidence: Confidence; population: string; finding: string; limitation: string; };
export type Reference = { apa: string; url?: string; };
export type CommercialRelationship = "research-only" | "sold-by-star" | "affiliate-related";
export type Monograph = {
 slug: string; title: string; scientificName?: string; alternativeNames?: string[];
 category: string; version: string; lastEvidenceReview: string; author: string;
 commercialRelationship: CommercialRelationship;
 abstract: string; centralQuestion: string; background: string[];
 chemistry?: Array<{label: string; value: string}>;
 mechanisms: string[]; evidence: EvidenceRow[];
 humanResearch: string[]; preclinicalResearch: string[];
 pharmacokinetics: Array<{label: string; value: string}>;
 safety: string[]; highRiskPopulations: string[]; legalStatus: LegalStatusRow[];
 overallConfidence: Confidence; evidenceAssessment: string; onlineClaims: string[];
 researchGaps: string[]; interpretation: string[]; conclusion: string; references: Reference[];
};

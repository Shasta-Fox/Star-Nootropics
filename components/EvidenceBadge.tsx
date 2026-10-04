import type { Confidence, EvidenceClass } from "@/data/types";
import { evidenceLegend } from "@/data/content";
export function EvidenceBadge({evidenceClass,confidence}:{evidenceClass?:EvidenceClass;confidence:Confidence}){return <span className="badge" title={evidenceClass?evidenceLegend[evidenceClass]:"Evidence review has not been rated"}>{evidenceClass && <b>{evidenceClass}</b>}{confidence}{confidence!=="Not rated" && " confidence"}</span>}

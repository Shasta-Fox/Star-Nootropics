import { templateHtml } from "@/data/template";
import { evidenceExample } from "@/data/content";
import { EvidenceBadge } from "@/components/EvidenceBadge";
export const metadata={title:"Monograph Template"};
export default function Template(){return <><p><a href="/evidence-protocol">Evidence Protocol &amp; Review Methodology →</a></p><a className="back" href="/research">← Research library</a><article className="reading"><div dangerouslySetInnerHTML={{__html:templateHtml}}/><section><h2>Evidence Row — Format Example Only</h2><p className="note">The following illustrates the data format. It is not a finding about piracetam or any other compound.</p><EvidenceBadge evidenceClass={evidenceExample.evidenceClass} confidence={evidenceExample.confidence}/><dl className="metadata">{Object.entries(evidenceExample).filter(([key])=>!["confidence","evidenceClass"].includes(key)).map(([key,value])=><div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></section></article></>}

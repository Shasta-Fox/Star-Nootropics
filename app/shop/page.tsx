import { MerchLab } from "@/components/MerchLab";

export const metadata = { title: "Merchandise Lab" };
export default function Shop() {
  return <>
    <header className="intro"><span className="eyebrow">Star Shop / Research gear</span><h1>Merchandise Lab</h1><span className="pill">Preview · Not open for sales</span></header>
    <MerchLab />
    <p>No supplement store is currently operating. Research-only monographs remain separate from commerce.</p>
    <a href="/policy">Read the research and commerce policy →</a>
  </>;
}

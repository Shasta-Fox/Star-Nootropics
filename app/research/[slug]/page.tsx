import { notFound } from "next/navigation";
import { monographs, getMonograph } from "@/data/monographs";
import { MonographView } from "@/components/MonographView";
export function generateStaticParams(){return monographs.map(m=>({slug:m.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:monographs.find(m=>m.slug===slug)?.title||"Monograph not found"}}
export default async function MonographPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const m=getMonograph(slug);if(!m)notFound();return <MonographView monograph={m}/>}

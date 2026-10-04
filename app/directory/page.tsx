import "./directory.css";
import { references } from "@/data/references";
import { directoryTemplate } from "@/data/directoryTemplate";
import { categoryRules } from "@/data/directoryRules";
import { interdisciplinaryRules } from "@/data/interdisciplinaryRules";
function escape(value:string){return value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]!));}
export default function Directory(){
 const buckets = new Map<string, typeof references>();
 for(const item of references){const text=`${item.title} ${(item.subjects||[]).join(" ")} ${item.authorYear} ${item.citation}`.toLowerCase();const matches=Object.entries({...categoryRules,...interdisciplinaryRules}).filter(([,words])=>words.some(word=>text.includes(word))).map(([id])=>id);for(const id of matches.length?matches:["unclassified"]){buckets.set(id,[...(buckets.get(id)||[]),item]);}}

 const card=(item:typeof references[number])=>`<li class="dir-item"><div><a class="item-title" href="/library?q=${encodeURIComponent(item.title)}#reference-${encodeURIComponent(item.id)}">${escape(item.title)}</a><div class="item-meta">${escape(item.authorYear)}</div></div><span class="item-badge">${escape(item.type)}</span></li>`;
 const domains=[['addiction','Addiction & Substance Use'],['psychotherapy','Psychotherapy & Clinical Psychology'],['health-science','Health, Neurobiology & Nutrition'],['lifestyle-philosophy','Lifestyle & Personal Development'],['cooking-culinary','Cooking & Culinary Arts'],['politics-community','Politics, Social Justice & Community'],['cult-literature','Cult, Occult & Counterculture'],['classic-literature','Classic Literature & Fiction']];
 const extraNav=`<div class="domain-title">Domain IV: Interdisciplinary Archive</div><ul class="topic-pills">${domains.map(([id,title],i)=>`<li><a href="#${id}">${i+17}. ${escape(title)}</a></li>`).join("")}</ul>`;
 const extraSections=domains.map(([id,title],i)=>`<section class="dir-section" id="${id}" data-category="${id}"><div class="dir-header"><h2>${i+17}. ${escape(title)}</h2><a href="#main">↑ Top</a></div><p class="dir-scope">Related references from the shared library, matched by topic keywords.</p></section>`).join("");
 const template=directoryTemplate.replace('</nav>',extraNav+'</nav>')+extraSections;
 let html=template.replace(/<section class="dir-section" id="([^"]+)"[^>]*>[\s\S]*?<\/section>/g,(section,id:string)=>{
  const rows=buckets.get(id)||[];
  // Curated links remain distinct from automatically classified catalog references.
  return section.replace("</section>",`<details class="catalog-group"><summary>Library references (${rows.length})</summary><p>Suggested topic matches; classification is pending editorial review.</p><ul class="dir-list">${rows.map(card).join("")}</ul></details></section>`);
 });
 html=html.replace(/(<a href="#([^"]+)">)([^<]+)(<\/a>)/g,(all,start,id,label,end)=>buckets.has(id)?`${start}${label} <span class="pill-count">(${buckets.get(id)!.length} library)</span>${end}`:all);
 const pending=buckets.get("unclassified")||[];
 html=html.replace("</nav>",`<ul class="topic-pills"><li><a href="#unclassified" style="border-style:dashed">Needs Classification <span class="pill-count">(${pending.length} library)</span></a></li></ul></nav>`);
 html=html.replace('</header>',`<p>${references.length} catalog references indexed. References may appear in multiple topics. Topic counts cover library references; curated links are listed separately. <a href="#unclassified">Needs classification (${pending.length})</a>.</p></header>`);
 html+=`<section id="unclassified" data-category="unclassified" class="dir-section"><div class="dir-header"><h2>Needs Classification (${pending.length})</h2><a href="#main">↑ Back to Top</a></div><p>These references remain available while their subject categories are reviewed.</p><details><summary>Browse unclassified references</summary><ul class="dir-list" id="unclassified-list">${pending.map(card).join("")}</ul></details></section>`;
 return <div dangerouslySetInnerHTML={{__html:html}}/>;
}

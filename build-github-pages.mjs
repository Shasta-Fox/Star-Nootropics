import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

// Preserve original Sites source; adapt a temporary copy for GitHub Pages.
const root = path.dirname(fileURLToPath(import.meta.url));
const stage = path.join(root, '.github-pages-build');
const basePath = process.env.PAGES_BASE_PATH || '/Star-Nootropics';
if (!/^\/[A-Za-z0-9._-]+$/.test(basePath)) throw new Error('Invalid Pages base path');
fs.rmSync(stage, {recursive:true, force:true});
fs.mkdirSync(stage, {recursive:true});
for (const name of ['app','components','data','lib','hooks','public','vendor','db','build','drizzle','examples','package.json','package-lock.json','tsconfig.json','postcss.config.mjs','cloudflare-env.d.ts']) {
  if (fs.existsSync(path.join(root,name))) fs.cpSync(path.join(root,name),path.join(stage,name),{recursive:true});
}
fs.symlinkSync(path.join(root,'node_modules'),path.join(stage,'node_modules'),'dir');
// Native anchors and catalog URLs need the repository prefix in both the
// prerendered pages and hydrated client components. External URLs stay intact.
function adapt(dir) {
  for (const entry of fs.readdirSync(dir,{withFileTypes:true})) {
    const file=path.join(dir,entry.name);
    if (entry.isDirectory()) adapt(file);
    else if (/\.tsx?$/.test(entry.name) && entry.name !== 'chatgpt-auth.ts') {
      let text=fs.readFileSync(file,'utf8');
      const source=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true);
      const edits=[];
      function visit(node) {
        if (ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)||node.kind===ts.SyntaxKind.TemplateHead) {
          const start=node.getStart(source), end=node.getEnd();
          let raw=text.slice(start,end);
          if (node.text.startsWith('/')&&!node.text.startsWith('//')) raw=raw[0]+basePath+raw.slice(1);
          raw=raw.replace(/((?:href|src)=\\?["'])\/(?!\/)/g,`$1${basePath}/`);
          if (raw!==text.slice(start,end)) edits.push({start,end,raw});
        }
        ts.forEachChild(node,visit);
      }
      visit(source);
      for(const edit of edits.sort((a,b)=>b.start-a.start)) text=text.slice(0,edit.start)+edit.raw+text.slice(edit.end);
      fs.writeFileSync(file,text);
    }
  }
}
for (const dir of ['app','components','data']) adapt(path.join(stage,dir));
fs.writeFileSync(path.join(stage,'next.config.mjs'),`export default ${JSON.stringify({output:'export',basePath,trailingSlash:true,images:{unoptimized:true}})};\n`);
const result=spawnSync(process.execPath,[path.join(root,'node_modules/next/dist/bin/next'),'build',stage,'--webpack'],{cwd:stage,stdio:'inherit',env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'}});
if (result.status!==0) process.exit(result.status||1);
fs.writeFileSync(path.join(stage,'out','.nojekyll'),'');
console.log(`GitHub Pages output: ${path.join(stage,'out')}`);

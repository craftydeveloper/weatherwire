import { readFile } from 'node:fs/promises';
const html=(await readFile(new URL('../index.html',import.meta.url),'utf8')).toLowerCase();
const missing=[];if(!html.includes('<!doctype html'))missing.push('doctype');if(!html.includes('<html')||!html.includes('lang='))missing.push('language');if(!html.includes('<title'))missing.push('title');if(!html.includes('name="viewport"')&&!html.includes("name='viewport'"))missing.push('viewport');
if(missing.length){console.error('Missing page metadata: '+missing.join(', '));process.exitCode=1;}else console.log('Static page validation passed.');

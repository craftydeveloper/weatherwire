import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
const readme=await readFile(new URL('../README.md',import.meta.url),'utf8');
const fixture=JSON.parse(await readFile(new URL('../examples/sample-records.json',import.meta.url),'utf8'));
test('page has a responsive HTML shell',()=>{const lower=html.toLowerCase();assert.ok(lower.includes('<!doctype html'));assert.ok(lower.includes('<html'));assert.ok(lower.includes('lang='));assert.ok(lower.includes('<title'));assert.ok(lower.includes('name="viewport"')||lower.includes("name='viewport'"));});
test('readme describes the browser product',()=>{assert.ok(/browser|local|open-meteo/i.test(readme));});
test('synthetic records have unique non-empty identifiers and titles',()=>{assert.equal(fixture.schemaVersion,1);assert.ok(Array.isArray(fixture.records)&&fixture.records.length>=2);const ids=fixture.records.map(record=>record.id);assert.equal(new Set(ids).size,ids.length);for(const record of fixture.records){assert.equal(typeof record.id,'string');assert.ok(record.id.trim().length>0);assert.equal(typeof record.title,'string');assert.ok(record.title.trim().length>0);}});

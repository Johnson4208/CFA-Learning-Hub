const assert=require('node:assert/strict'), fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');const h=fs.readFileSync(path.join(root,'index.html'),'utf8');
function obj(start){const i=h.indexOf(start);return JSON.parse(h.slice(h.indexOf('{',i),h.indexOf('\n};',i)+2));}
const options=obj('const lessonOptions='),extensions=obj('const caseExtensions =');
const ctx={};vm.createContext(ctx);vm.runInContext(h.slice(h.indexOf('const curriculum ='),h.indexOf('let studyLevel',h.indexOf('const curriculum =')))+';globalThis.rows=curriculum;',ctx);
const other={};vm.createContext(other);vm.runInContext(fs.readFileSync(path.join(root,'academy-data.js'),'utf8')+';globalThis.rows=curriculum;',other);
assert.equal(JSON.stringify(ctx.rows),JSON.stringify(other.rows));assert.equal(ctx.rows.length,38);assert.equal(Object.keys(options).length,38);assert.equal(Object.keys(extensions).length,38);
for(const row of ctx.rows){const title=row[1].split('|')[1];assert.equal(options[title].length,3);assert.equal(new Set(options[title]).size,3);assert.ok(extensions[title]);for(const value of row.slice(1,5))assert.equal(value.split('|').length,2);}
const expected={
  "Time value of money": "100",
  "Returns and probability": "10%",
  "Economics and purchasing power": "2.86%",
  "Capital budgeting": "Mua, NPV = 10|Buy, NPV = 10",
  "Equities and indices": "4%",
  "Bonds and yields": "99.05",
  "Derivative contracts": "8",
  "Alternative assets": "6%",
  "Portfolio construction": "5.2%",
  "Currency parity": "1.2353",
  "Cost of capital": "7.6%",
  "Equity valuation": "50 → 42.86",
  "Term structure": "100.05",
  "Forward valuation": "+5.71",
  "Property valuation": "15 → 12.5",
  "Active management": "0.5",
  "Fair allocation": "300 / 200",
  "Private Markets pathway": "3 / 1.5×",
  "Forecasting free cash flow": "60",
  "Credit losses": "36,000",
  "Capstone · Build a first portfolio": "107.2 / 89.2",
  "Capstone · Value and challenge a business": "7.00 / 5.57"
};
for(const [key,value] of Object.entries(expected))assert.equal(options[key][0],value,key);
assert.equal((121/1.1**2).toFixed(0),options['Time value of money'][0]);assert.equal((5/1.04+105/1.05**2).toFixed(2),options['Term structure'][0]);assert.equal(Math.round(2e6*.03*.6).toLocaleString('en-US'),options['Credit losses'][0]);
const fc={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'formula-library-data.js'),'utf8'),fc);for(const row of fc.window.CFA_FORMULA_DATA.rows){assert.ok(row.eq);assert.equal(row.trap.split('|').length,2);assert.equal(row.vars.split('|').length,2);}
console.log('PASS: 38 quiz rows, 38 extensions, mirrored data, 22 answer regressions and bilingual formula metadata.');

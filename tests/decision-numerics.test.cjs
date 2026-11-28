const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../decision-lab-cases.js'),'utf8'),ctx);
const bank=ctx.window.CFA_DECISION_EXTRA;
const check=(c,u,expected)=>assert.equal(JSON.stringify(bank[c][u][0].decision.options.map(o=>o.delta)),JSON.stringify(expected),c+'/'+u);
check('quantitative','tvm',[0,Math.round(110000/1.08-100000),Math.round(119000/1.08**2-100000)]);
check('quantitative','probability',[60000*.6-30000*.4-20000,0,10000-20000]);
check('economics','supply-demand',[22*8000-200000,0,18*12000-200000]);
check('economics','fx',[0,Math.round(500000*(1.16-1.11)),Math.round(250000*(1.16-1.11))]);
check('corporate-finance','working-capital',[15*10000-10000,0,-15*10000]);
check('fixed-income','duration-convexity',[0,Math.round(2000000*(6-3)*.01),Math.round(2000000*(6-9)*.01)]);
check('derivatives','forwards-futures',[-10000*(58-50),0,10000*(58-50)]);
check('derivatives','options-greeks',[0,1000*(95-80-3),-1000*(95-80-3)]);
check('portfolio','rebalancing',[100000,-100000,0]);
check('asset-allocation','ldi',[Math.round(10000000*(2-4)*.005),Math.round(10000000*(10-4)*.005),0]);
assert.equal(bank.performance.attribution[0].decision.options[0].delta,Math.round(2000000*(.6-.5)*(.12-.08)));
assert.match(bank.performance.attribution[0].item.context,/Benchmark sector A return/);
for(const units of Object.values(bank))for(const cases of Object.values(units))for(const x of cases){assert.equal(x.decision.options.length,3);assert.ok(Number.isInteger(x.decision.correct)&&x.decision.correct>=0&&x.decision.correct<3);for(const o of x.decision.options){assert.ok(Number.isFinite(o.delta));for(const v of [o.title,o.reason,o.metric,o.assumption])assert.equal(v.split('|').length,2)}}
console.log('PASS: 11 decision-lab numerical regressions and bilingual option structure');

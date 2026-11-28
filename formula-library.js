(function(){
'use strict';
const T=s=>String(s??'').split('|')[state.lang==='en'?1:0]??String(s??'').split('|')[0];
const E=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
const L=s=>E(T(s)),norm=s=>String(s??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
const courses=()=>window.CFA_FORMULA_COURSES||[],data=window.CFA_FORMULA_DATA;
let cache=null,level='all',subject='all',query='',savedOnly=false,page=1,lastFocus=null;
const pageSize=24;
function buildIndex(cs,book,extra){
 const result=[];
 for(const c of cs)for(const u of c.units){
  const key=c.id+'/'+u.id,over=book?.formulas?.[key],eq=over?.[0]||u.formula;
  const base={course:c.id,courseTitle:c.title,levels:c.levels,unit:u.id,unitTitle:u.title,unitIndex:u.index,lead:u.lead,caseTitle:u.caseTitle,caseFacts:u.caseFacts,caseQuestion:u.caseQuestion,solution:u.solution};
  if(eq)result.push({...base,id:key,name:extra.meta[key]||u.title,eq,vars:over?.[1]||u.symbols||'',trap:u.examTrap||'',source:'course'});
  for(const f of extra.rows)if(f.c===c.id&&f.u===u.id)result.push({...base,...f,source:'supplement'});
 }
 return result;
}
const entries=()=>cache??=buildIndex(courses(),window.CFA_TEXTBOOK,data);
const saved=()=>Array.isArray(state.savedFormulas)?state.savedFormulas:[];
function toggleSave(id){
 const old=saved(),next=old.includes(id)?old.filter(x=>x!==id):[...old,id];
 state.savedFormulas=next;
 try{localStorage.setItem('cfanotes_clean_v1',JSON.stringify(state));return true}catch(e){state.savedFormulas=old;return false}
}
function filtered(){
 const terms=norm(query).trim().split(/\s+/).filter(Boolean);
 return entries().filter(f=>(level==='all'||f.levels.includes(level))&&(subject==='all'||f.course===subject)&&(!savedOnly||saved().includes(f.id))&&terms.every(w=>norm([f.name,f.eq,f.vars,f.courseTitle,f.unitTitle].join(' ')).includes(w))).sort((a,b)=>{
  const rank=f=>{let q=norm(query).trim(),n=norm(f.name);return q?(n.startsWith(q)?8:n.includes(q)?4:0):0};return rank(b)-rank(a)
 });
}
const icon=(path)=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+path+'</svg>';
const bookmark=on=>icon(on?'<path d="M6 3h12v18l-6-4-6 4z" fill="currentColor"/><path d="m9 10 2 2 4-4" stroke="white"/>':'<path d="M6 3h12v18l-6-4-6 4z"/>');
const eq=f=>window.CFA_TEXTBOOK?.formatEquation(f.eq)||'<span>'+E(f.eq)+'</span>';
const title=f=>T(f.name);
const fmt=(n,d=2)=>Number.isFinite(n)?new Intl.NumberFormat(state.lang==='en'?'en-US':'vi-VN',{maximumFractionDigits:d}).format(n):'—';
const percent=n=>fmt(n*100,3)+'%';
const field=(id,label,value,unit='',min=null,max=null,step='any')=>({id,label,value,unit,min,max,step});
const p=(id,label,v,min=null,max=null)=>field(id,label,v,'%',min,max);
const num=(id,label,v,min=null,max=null)=>field(id,label,v,'',min,max);
const money=(id,label,v,min=null)=>field(id,label,v,'USD',min);
const calculator=(fields,solve,description='')=>({fields,solve,description});
const calc={
 'corporate-finance/wacc':calculator([p('we','Tỷ trọng vốn chủ|Equity weight',60,0,100),p('re','Chi phí vốn chủ|Cost of equity',10),p('rd','Chi phí nợ|Cost of debt',5),p('t','Thuế suất|Tax rate',25,0,100)],v=>({value:percent(v.we/100*v.re/100+(1-v.we/100)*v.rd/100*(1-v.t/100)),steps:fmt(v.we)+'% × '+fmt(v.re)+'% + '+fmt(100-v.we)+'% × '+fmt(v.rd)+'% × (1 − '+fmt(v.t)+'%)',weights:[v.we,100-v.we]}),'Giả định chỉ có nợ và cổ phần thường; trọng số giá trị thị trường.|Assumes debt and common equity only; market-value weights.'),
 'equity/forecast-roic':calculator([money('n','NOPAT',150000),money('ic','Vốn đầu tư bình quân|Average invested capital',1000000,0.000001)],v=>({value:percent(v.n/v.ic),steps:fmt(v.n)+' / '+fmt(v.ic)})),
 'corporate-finance/npv':calculator([money('i','Vốn ban đầu|Initial investment',100000,0),money('a','Dòng tiền năm 1|Year 1 cash flow',60000),money('b','Dòng tiền năm 2|Year 2 cash flow',60000),p('r','Suất chiết khấu|Discount rate',10,-99.99)],v=>({value:'$'+fmt(-v.i+v.a/(1+v.r/100)+v.b/(1+v.r/100)**2),steps:'−'+fmt(v.i)+' + '+fmt(v.a)+'/(1+r) + '+fmt(v.b)+'/(1+r)²'}),'Ví dụ hai kỳ, không có dòng tiền khác.|Two-period illustration; no other cash flows.'),
 'equity/valuation':calculator([money('d','Cổ tức kỳ tới|Next dividend',3,0),p('r','Chi phí vốn chủ|Cost of equity',10),p('g','Tăng trưởng dài hạn|Growth',4)],v=>{if(v.r<=v.g)return {error:'Yêu cầu r > g.|Requires r > g.'};return{value:'$'+fmt(v.d/((v.r-v.g)/100)),steps:fmt(v.d)+' / ('+fmt(v.r)+'% − '+fmt(v.g)+'%)'}}),
 'fixed-income/duration-convexity':calculator([num('d','Modified duration',5),num('c','Convexity',30),p('y','Thay đổi yield (điểm %)|Yield change (percentage points)',1)],v=>({value:percent(-v.d*v.y/100+.5*v.c*(v.y/100)**2),steps:'−D × Δy + ½ × C × Δy²'})),
 'portfolio/capm':calculator([p('rf','Lãi suất phi rủi ro|Risk-free rate',3),num('beta','Beta',1.2),p('rm','Lợi suất thị trường|Market return',8)],v=>({value:percent((v.rf+v.beta*(v.rm-v.rf))/100),steps:fmt(v.rf)+'% + '+fmt(v.beta)+' × ('+fmt(v.rm)+'% − '+fmt(v.rf)+'%)'})),
 'asset-allocation/ldi':calculator([money('a','Tài sản|Assets',10000000,0),money('l','Nghĩa vụ|Liabilities',10000000,0),num('da','Duration tài sản|Asset duration',4),num('dl','Duration nghĩa vụ|Liability duration',10),p('y','Thay đổi yield (điểm %)|Yield change (percentage points)',-.5)],v=>({value:'$'+fmt((-v.da*v.a+v.dl*v.l)*v.y/100),steps:'(−DA × A + DL × L) × Δy'})),
 'performance/return-measures':calculator([p('a','Lợi suất kỳ 1|Period 1 return',10,-100),p('b','Lợi suất kỳ 2|Period 2 return',-5,-100)],v=>({value:percent((1+v.a/100)*(1+v.b/100)-1),steps:'(1 + r₁)(1 + r₂) − 1'})),
 'business-foundations/operating-leverage':calculator([money('f','Chi phí cố định|Fixed cost',10000,0),money('p','Giá đơn vị|Unit price',50,0),money('v','Biến phí đơn vị|Unit variable cost',30,0)],v=>v.p<=v.v?{error:'Giá phải lớn hơn biến phí đơn vị.|Price must exceed unit variable cost.'}:{value:fmt(v.f/(v.p-v.v))+' '+T('đơn vị|units'),steps:fmt(v.f)+' / ('+fmt(v.p)+' − '+fmt(v.v)+')'}),
 'accounting-foundations/cost-allocation':calculator([money('c','Nguyên giá|Cost',100000,0),money('s','Giá trị còn lại|Residual value',0,0),num('n','Tuổi thọ (năm)|Useful life (years)',5,.000001)],v=>v.s>v.c?{error:'Giá trị còn lại không vượt nguyên giá.|Residual cannot exceed cost.'}:{value:'$'+fmt((v.c-v.s)/v.n),steps:'(Cost − Residual) / Life'}),
 'fixed-income/credit':calculator([p('pd','Xác suất vỡ nợ|Default probability',4,0,100),p('lgd','LGD',60,0,100),money('ead','EAD',1000000,0)],v=>({value:'$'+fmt(v.pd/100*v.lgd/100*v.ead),steps:fmt(v.pd)+'% × '+fmt(v.lgd)+'% × '+fmt(v.ead)})),
 'alternatives/real-assets':calculator([money('noi','NOI',120000,0),p('cap','Cap rate',6,.000001)],v=>({value:'$'+fmt(v.noi/(v.cap/100)),steps:fmt(v.noi)+' / '+fmt(v.cap)+'%'})),
 'economics/policy':calculator([p('i','Lãi suất danh nghĩa|Nominal rate',8,-99.99),p('pi','Lạm phát|Inflation',3,-99.99)],v=>({value:percent((1+v.i/100)/(1+v.pi/100)-1),steps:'(1 + i)/(1 + π) − 1'})),
 'corporate-finance/working-capital':calculator([num('dio','DIO (days)',40,0),num('dso','DSO (days)',30,0),num('dpo','DPO (days)',25,0)],v=>({value:fmt(v.dio+v.dso-v.dpo)+' '+T('ngày|days'),steps:'DIO + DSO − DPO'})),
 'fv':calculator([money('pv','Hiện giá|Present value',100),p('r','Lãi mỗi kỳ|Periodic rate',10,-99.99),num('n','Số kỳ|Periods',2,0)],v=>({value:'$'+fmt(v.pv*(1+v.r/100)**v.n),steps:'PV × (1+r)^n'})),
 'pv':calculator([money('fv','Giá trị tương lai|Future value',121),p('r','Suất chiết khấu|Discount rate',10,-99.99),num('n','Số kỳ|Periods',2,0)],v=>({value:'$'+fmt(v.fv/(1+v.r/100)**v.n),steps:'FV / (1+r)^n'})),
 'ear':calculator([p('r','APR',12,-99.99),field('m','Kỳ ghép lãi mỗi năm|Compounds per year',12,'',1,365,1)],v=>({value:percent((1+v.r/100/v.m)**v.m-1),steps:'(1 + APR/m)^m − 1'})),
 'dv01':calculator([num('d','Modified duration',5,0),money('v','Giá trị vị thế|Position value',1000000,0)],v=>({value:'$'+fmt(v.d*v.v*.0001)+'/bp',steps:'D × V × 0.0001'})),
 'sharpe':calculator([p('r','Lợi suất|Return',10),p('rf','Phi rủi ro|Risk-free rate',2),p('s','Volatility',16,.000001)],v=>({value:fmt((v.r-v.rf)/v.s,4),steps:'(R − Rf) / σ'})),
 'var':calculator([money('v','Giá trị danh mục|Portfolio value',1000000,0),p('s','Volatility kỳ hạn|Horizon volatility',1,0),num('z','Normal quantile',1.645,0)],v=>({value:'$'+fmt(v.v*v.s/100*v.z),steps:'V × σ × z'})),
 'pe':calculator([money('p','Giá cổ phiếu|Share price',50,0),money('e','EPS',5,.000001)],v=>({value:fmt(v.p/v.e)+'×',steps:'Price / EPS'})),
 'fcff':calculator([money('e','EBIT',100),p('t','Tax rate',25,0,100),money('da','D&A',20,0),money('cap','CapEx',30,0),money('wc','ΔNWC',10)],v=>({value:'$'+fmt(v.e*(1-v.t/100)+v.da-v.cap-v.wc),steps:'EBIT(1−T) + DA − CapEx − ΔNWC'})),
 'fcfe':calculator([money('ni','Net income',60),money('da','D&A',20,0),money('cap','CapEx',30,0),money('wc','ΔNWC',10),money('nb','Net borrowing',5)],v=>({value:'$'+fmt(v.ni+v.da-v.cap-v.wc+v.nb),steps:'NI + DA − CapEx − ΔNWC + Net borrowing'})),
 'current-ratio':calculator([money('a','Current assets',150,0),money('l','Current liabilities',100,.000001)],v=>({value:fmt(v.a/v.l)+'×',steps:'Current assets / Current liabilities'}))
};
function calcMarkup(f){
 const c=calc[f.id];if(!c)return '';
 return '<section class="fl-calc"><div class="fl-section-head"><div><small>'+L('THỬ CÔNG THỨC|TRY THE FORMULA')+'</small><h3>'+L('Máy tính tương tác|Interactive calculator')+'</h3></div>'+icon('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/>')+'</div><div class="fl-fields">'+c.fields.map(x=>'<label><span>'+L(x.label)+'</span><div><input type="number" inputmode="decimal" data-calc="'+x.id+'" value="'+x.value+'" step="'+x.step+'" '+(x.min===null?'':'min="'+x.min+'"')+' '+(x.max===null?'':'max="'+x.max+'"')+'><small>'+E(x.unit)+'</small></div></label>').join('')+'</div>'+(f.id==='corporate-finance/wacc'?'<div class="fl-capital"><span id="fl-capital-equity"></span><span id="fl-capital-debt"></span></div><div class="fl-capital-label" id="fl-capital-label"></div>':'')+'<div class="fl-output" aria-live="polite"><small>'+L('KẾT QUẢ|CALCULATED RESULT')+'</small><strong id="fl-answer"></strong><span id="fl-steps"></span></div>'+(c.description?'<p class="fl-small">'+L(c.description)+'</p>':'')+'</section>';
}
function bindCalc(f,host){
 const c=calc[f.id];if(!c)return;
 const inputs=[...host.querySelectorAll('[data-calc]')],answer=host.querySelector('#fl-answer'),steps=host.querySelector('#fl-steps');
 const update=()=>{
  const v={};let bad=false;
  inputs.forEach(i=>{v[i.dataset.calc]=Number(i.value);if(i.value.trim()===''||!Number.isFinite(v[i.dataset.calc])||!i.validity.valid)bad=true});
  const out=bad?{error:'Nhập giá trị hợp lệ.|Enter valid values.'}:c.solve(v);
  answer.textContent=out.error?'—':out.value;steps.textContent=out.error?T(out.error):out.steps;
  if(out.weights){host.querySelector('#fl-capital-equity').style.width=out.weights[0]+'%';host.querySelector('#fl-capital-debt').style.width=out.weights[1]+'%';host.querySelector('#fl-capital-label').textContent='Equity '+fmt(out.weights[0])+'% · Debt '+fmt(out.weights[1])+'%'}
 };
 inputs.forEach(i=>i.oninput=update);update();
}
function applicationMarkup(f){
 const a=window.CFA_FORMULA_APPLICATIONS?.[f.id];if(!a)return '';
 return '<section class="fl-application"><div class="fl-app-head"><div><small>'+L('ỨNG DỤNG THỰC TẾ|PRACTICAL APPLICATION')+'</small><h3>'+L('Từ công thức đến quyết định|From formula to decision')+'</h3></div><span>'+L('Mô phỏng|Illustrative case')+'</span></div><div class="fl-app-step"><span class="fl-app-number">01</span><div><h4>'+L('Bối cảnh & dữ liệu|Business context & inputs')+'</h4><p>'+L(a.scenario)+'</p></div></div><div class="fl-app-step"><span class="fl-app-number">02</span><div><h4>'+L('Thay số & tính kết quả|Substitute & calculate')+'</h4><div class="fl-app-work">'+E(a.work)+'</div></div></div><div class="fl-app-step fl-app-decision"><span class="fl-app-number">03</span><div><h4>'+L('Diễn giải & hành động|Interpret & decide')+'</h4><p>'+L(a.decision)+'</p></div></div></section>';
}
function detail(id,trigger){
 const f=entries().find(e=>e.id===id),dialog=document.getElementById('fl-dialog');if(!f||!dialog)return;
 lastFocus=trigger;
 const isCourse=f.source==='course';
 dialog.innerHTML='<div class="fl-detail"><header><div><small>'+L(f.courseTitle)+' · LEVEL '+E(f.levels.join('/'))+'</small><h2 id="fl-detail-title">'+L(f.name)+'</h2></div><button type="button" class="fl-icon" id="fl-detail-save" aria-label="'+L('Lưu công thức|Save formula')+'" aria-pressed="'+saved().includes(id)+'">'+bookmark(saved().includes(id))+'</button><button type="button" class="fl-icon fl-close" aria-label="'+L('Đóng|Close')+'">×</button></header><div class="fl-detail-body"><div class="fl-equation fl-equation-large">'+eq(f)+'</div><section><h3>'+L('Thành phần và điều kiện|Components & assumptions')+'</h3><p>'+L(f.vars||f.lead)+'</p></section>'+applicationMarkup(f)+calcMarkup(f)+(f.trap?'<section><h3>'+L('Lưu ý & lỗi thường gặp|Cautions & common mistakes')+'</h3><p>'+L(f.trap)+'</p></section>':'')+'<section class="fl-source"><small>'+L(isCourse?'Công thức trong giáo trình|Curriculum formula':'Công thức bổ sung · ví dụ minh họa|Supplementary formula · illustrative example')+'</small><strong>'+L(f.unitTitle)+'</strong></section></div><footer><button type="button" id="fl-copy">'+L('Sao chép|Copy')+'</button><button type="button" id="fl-lesson">'+L('Mở bài học|Open lesson')+' →</button></footer></div>';
 dialog.querySelector('.fl-close').onclick=()=>dialog.close();
 dialog.onclick=e=>{if(e.target===dialog)dialog.close()};
 dialog.onclose=()=>{drawResults();document.querySelector('[data-open-formula="'+CSS.escape(id)+'"]')?.focus({preventScroll:true})};
 dialog.querySelector('#fl-detail-save').onclick=()=>{if(toggleSave(id)){const b=dialog.querySelector('#fl-detail-save');b.innerHTML=bookmark(saved().includes(id));b.setAttribute('aria-pressed',String(saved().includes(id)));updateCount()}};
 dialog.querySelector('#fl-copy').onclick=async()=>{const b=dialog.querySelector('#fl-copy');try{await navigator.clipboard.writeText(f.eq.replace(/frac\(([^;]+);([^()]+)\)/g,'($1)/($2)'));b.textContent=T('Đã sao chép|Copied')}catch(e){b.textContent=T('Không thể sao chép|Copy unavailable')}};
 dialog.querySelector('#fl-lesson').onclick=()=>{dialog.close();if(!f.levels.includes(studyLevel))setLevel('LVL '+(level!=='all'&&f.levels.includes(level)?level:f.levels[0]));switchTab('library');window.openDeepCourse(f.course,f.unitIndex)};
 bindCalc(f,dialog);
 if(!dialog.open)dialog.showModal();
}
function updateCount(){const n=document.getElementById('fl-saved-count');if(n)n.textContent=saved().filter(id=>entries().some(e=>e.id===id)).length}
function drawResults(){
 const root=document.getElementById('fl-results');if(!root)return;
 const list=filtered(),pages=Math.max(1,Math.ceil(list.length/pageSize));page=Math.max(1,Math.min(page,pages));
 document.getElementById('fl-result-count').textContent=list.length+' '+T('công thức|formulas');updateCount();
 root.innerHTML=list.length?'<div class="fl-grid">'+list.slice((page-1)*pageSize,page*pageSize).map(f=>'<article class="fl-card"><div class="fl-card-top"><span>'+L(f.courseTitle)+'</span><button type="button" class="fl-icon" data-save-formula="'+E(f.id)+'" aria-label="'+L('Lưu công thức|Save formula')+'" aria-pressed="'+saved().includes(f.id)+'">'+bookmark(saved().includes(f.id))+'</button></div><button type="button" class="fl-open" data-open-formula="'+E(f.id)+'"><strong>'+L(f.name)+'</strong><div class="fl-equation">'+eq(f)+'</div><p>'+L(f.vars||f.lead)+'</p><div class="fl-card-foot"><span>Level '+E(f.levels.join(' · '))+'</span><span>'+(calc[f.id]?L('Máy tính · |Calculator · '):'')+'↗</span></div></button></article>').join('')+'</div><div class="fl-pages"><button type="button" id="fl-prev" '+(page===1?'disabled':'')+'>← '+L('Trước|Previous')+'</button><span>'+page+' / '+pages+'</span><button type="button" id="fl-next" '+(page===pages?'disabled':'')+'>'+L('Sau|Next')+' →</button></div>':'<div class="fl-empty">'+L('Không tìm thấy công thức phù hợp.|No matching formulas.')+'</div>';
 root.querySelectorAll('[data-open-formula]').forEach(b=>b.onclick=()=>detail(b.dataset.openFormula,b));
 root.querySelectorAll('[data-save-formula]').forEach(b=>b.onclick=()=>{const id=b.dataset.saveFormula;if(!toggleSave(id)){b.title=T('Không thể lưu vào bộ nhớ trình duyệt|Browser storage unavailable');return}if(savedOnly)drawResults();else{b.innerHTML=bookmark(saved().includes(id));b.setAttribute('aria-pressed',String(saved().includes(id)));updateCount()}});
 for(const [id,d] of [['fl-prev',-1],['fl-next',1]]){const b=root.querySelector('#'+id);if(b)b.onclick=()=>{page+=d;drawResults();document.getElementById('fl-result-count').scrollIntoView({block:'start'})}}
}
function render(){
 const root=document.getElementById('view-formulas');if(!root)return;
 const list=courses().filter(c=>entries().some(e=>e.course===c.id&&(level==='all'||e.levels.includes(level))));
 if(subject!=='all'&&!list.some(c=>c.id===subject))subject='all';
 root.innerHTML='<div class="fl-library"><header class="fl-hero"><span class="fl-kicker">CFA / QUANTITATIVE REFERENCE</span><div class="fl-hero-title"><div><h2>'+L('Kho công thức|Formula Library')+'</h2><p>'+L('Hiểu. Tính toán. Áp dụng.|Understand. Calculate. Apply.')+'</p></div>'+icon('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/>')+'</div><div class="fl-stats"><div><strong>'+entries().length+'</strong><span>'+L('Mục công thức|Formula entries')+'</span></div><div><strong>I–III</strong><span>CFA Levels</span></div><div><strong id="fl-saved-count">0</strong><span>'+L('Đã lưu|Saved formulas')+'</span></div></div></header><div class="fl-controls"><div class="fl-search-row"><label class="fl-search">'+icon('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>')+'<input type="search" id="fl-search" aria-label="'+L('Tìm công thức|Search formulas')+'" placeholder="'+L('Tìm WACC, NPV, ROIC…|Search WACC, NPV, ROIC…')+'"></label><button type="button" id="fl-saved" aria-pressed="'+savedOnly+'">'+bookmark(savedOnly)+L('Đã lưu|Saved')+'</button></div><div class="fl-levels" role="group" aria-label="Level">'+['all','I','II','III'].map(v=>'<button type="button" data-fl-level="'+v+'" aria-pressed="'+(v===level)+'">'+(v==='all'?L('Tất cả Level|All levels'):'Level '+v)+'</button>').join('')+'</div><details class="fl-subject"><summary>'+L(subject==='all'?'Tất cả học phần|All subjects':list.find(c=>c.id===subject).title)+icon('<path d="m6 9 6 6 6-6"/>')+'</summary><div class="fl-subjects"><button type="button" data-fl-subject="all" aria-pressed="'+(subject==='all')+'">'+L('Tất cả học phần|All subjects')+'</button>'+list.map(c=>'<button type="button" data-fl-subject="'+E(c.id)+'" aria-pressed="'+(subject===c.id)+'">'+L(c.title)+'</button>').join('')+'</div></details></div><div class="fl-results-head"><strong id="fl-result-count" aria-live="polite"></strong><span>'+L('Chọn công thức để xem chi tiết|Select a formula to explore')+'</span></div><div id="fl-results"></div><p class="fl-disclaimer">'+L('Kho công thức liên kết với giáo trình hiện tại và có mục bổ sung. Đây không phải danh sách chính thức đầy đủ của CFA Institute. Ví dụ và máy tính dùng giả định đơn giản được ghi rõ.|Linked to the current curriculum with supplementary entries. Not an exhaustive official CFA Institute formula list. Examples and calculators use stated simplified assumptions.')+'</p><dialog id="fl-dialog" class="fl-dialog" aria-labelledby="fl-detail-title"></dialog></div>';
 const input=root.querySelector('#fl-search');input.value=query;input.oninput=()=>{query=input.value;page=1;drawResults()};
 root.querySelector('#fl-saved').onclick=()=>{savedOnly=!savedOnly;page=1;render()};
 root.querySelectorAll('[data-fl-level]').forEach(b=>b.onclick=()=>{level=b.dataset.flLevel;page=1;render()});
 root.querySelectorAll('[data-fl-subject]').forEach(b=>b.onclick=()=>{subject=b.dataset.flSubject;page=1;render();root.querySelector('.fl-subject summary')?.focus({preventScroll:true})});
 drawResults();
}
window.CFA_FORMULA_LIBRARY={render};
})();
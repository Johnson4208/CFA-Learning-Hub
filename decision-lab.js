(function(){
'use strict';
const T=s=>s.split('|')[state.lang==='en'?1:0]??s;
const E=s=>escapeText(String(s??''));
const H=s=>window.CFA_HIGHLIGHT?window.CFA_HIGHLIGHT(T(s)):E(T(s));
const L=s=>E(T(s));
const option=(title,reason,metric,delta,assumption)=>({title,reason,metric,delta,assumption});
const bank={
'business-model':[
 {correct:1,options:[
 option('Thuê bao cố định, không giới hạn|Unlimited fixed subscription','Khách dùng nhiều làm chi phí cloud tăng nhưng không tạo thêm phí.|Heavy users raise cloud cost without additional fees.','Đóng góp tháng|Monthly contribution',-8000,'Giả định 400 khách dùng nhiều phát sinh thêm 20 USD chi phí mỗi khách.|Assume 400 heavy users incur $20 extra cost each.'),
 option('Phí nền tảng + phí sử dụng vượt ngưỡng|Base fee + metered overage','Phí nền hỗ trợ dự báo; phí vượt ngưỡng bảo vệ biên của nhóm dùng nhiều.|A base fee supports forecasting; overage protects heavy-user margins.','Đóng góp tháng|Monthly contribution',12000,'Giả định 400 khách dùng nhiều tạo thêm 30 USD đóng góp ròng mỗi khách.|Assume 400 heavy users contribute $30 extra net each.'),
 option('Chỉ thu phí theo lượt dùng, không có mức tối thiểu|Pure usage pricing with no minimum','Không có doanh thu tối thiểu; biến động sử dụng có thể làm giảm dòng tiền.|No revenue floor; usage volatility may reduce cash inflow.','Doanh thu tháng|Monthly revenue',-6000,'Giả định nhóm dùng nhẹ giảm chi tiêu tổng cộng 6.000 USD.|Assume light users reduce total spending by $6,000.') ]},
 {correct:2,options:[
 option('Mua tồn kho cho toàn bộ danh mục|Own inventory across the catalog','Tồn kho không chọn lọc làm tăng markdown và nhu cầu vốn.|Indiscriminate inventory raises markdown and capital needs.','Vốn lưu động tăng thêm|Additional working capital',-30000,'Giả định cần thêm 30.000 USD vốn lưu động; dấu âm biểu thị tiền bị giam.|Assume $30,000 extra working capital; negative denotes cash tied up.'),
 option('Chỉ tăng take rate để bù chi phí giao hàng|Raise the take rate only','Tăng phí không trực tiếp giải quyết giao hàng thiếu ổn định.|Higher fees do not directly fix unreliable delivery.','Đóng góp tháng|Monthly contribution',-2400,'Giả định mất 200 đơn, đóng góp 12 USD/đơn.|Assume 200 lost orders at $12 contribution each.'),
 option('Thử nghiệm tồn kho ở SKU quay vòng nhanh, biên đủ cao|Pilot fast-turning, high-contribution SKUs','Chỉ mở rộng nếu lợi ích conversion và retention bù chi phí vốn, fulfillment và markdown.|Expand only if conversion and retention benefits cover capital, fulfillment and markdown.','Đóng góp tháng|Monthly contribution',4000,'Giả định 500 đơn tăng thêm, đóng góp ròng 8 USD/đơn trước chi phí vốn cố định.|Assume 500 incremental orders with $8 net contribution each, before fixed capital costs.') ]}
],
'unit-economics':[
 {correct:0,options:[
 option('Payback 14,9 tháng; kiểm tra cohort và runway trước khi mở rộng|14.9-month payback; test cohorts and runway before scaling','520 ÷ 35 = 14,86 tháng, chưa tính churn. Dừng mở rộng thiếu kiểm chứng để bảo vệ vốn.|520 ÷ 35 = 14.86 months before churn. Avoid unvalidated scaling to protect capital.','Chi phí CAC tránh được|CAC spending avoided',52000,'Giả định hoãn mua 100 khách qua kênh chưa chứng minh hiệu quả, 520 USD/khách.|Assume deferring 100 unvalidated acquisitions at $520 each.'),
 option('Payback 8,6 tháng; tăng ngân sách ngay|8.6-month payback; scale immediately','8,6 tháng là payback cũ (300 ÷ 35), không phản ánh CAC mới.|8.6 months is the old payback (300 ÷ 35), not current CAC.','Tiền chi CAC|CAC cash spent',-52000,'Giả định mua thêm 100 khách với CAC mới 520 USD.|Assume 100 additional acquisitions at the new $520 CAC.'),
 option('Dựa vào tăng trưởng signup 60% để quyết định|Decide solely from 60% signup growth','Signup không phản ánh gross profit, churn hoặc cash runway.|Signups do not reflect gross profit, churn or cash runway.','Tiền chi CAC|CAC cash spent',-26000,'Giả định chi cho 50 lượt thu hút mới, 520 USD/lượt, chưa kiểm chứng retention.|Assume 50 acquisitions at $520 each before validating retention.') ]},
 {correct:1,options:[
 option('Tăng giá toàn bộ vì ARR ban đầu tăng 15%|Raise all prices because initial ARR increases 15%','Bỏ qua churn, elasticity và chi phí thay thế khách.|Ignores churn, elasticity and replacement acquisition costs.','Chi phí thay thế khách|Replacement acquisition cost',-200000,'Giả định 4.000 khách rời thêm × 50 USD CAC thay thế.|Assume 4,000 additional losses × $50 replacement CAC.'),
 option('Thử nghiệm theo cohort, so present value và CAC thay thế|Test cohorts and compare present value and replacement CAC','So lợi nhuận vòng đời, độ co giãn và chi phí thay khách trước khi rollout.|Compare lifetime gross profit, elasticity and replacement costs before rollout.','Chi phí CAC tránh được|CAC spending avoided',100000,'Giả định thử nghiệm giúp tránh 2.000 lượt mất khách không cần thiết × 50 USD CAC.|Assume testing avoids 2,000 unnecessary customer losses × $50 CAC.'),
 option('Giảm giá 10% cho tất cả khách mà không kiểm tra retention|Cut price 10% for all without testing retention','Giảm giá đại trà làm mất doanh thu mà chưa chắc cải thiện retention.|A blanket discount sacrifices revenue without proven retention gains.','Doanh thu tháng|Monthly revenue',-100000,'Giả định 100.000 khách × 1 USD giảm giá, số khách không đổi.|Assume 100,000 users × $1 price reduction, unchanged volume.') ]}
],
'industry-moat':[
 {correct:2,options:[
 option('Retention 96% chứng minh có pricing power; tăng giá ngay|96% retention proves pricing power; raise prices now','Retention có thể do ma sát chuyển đổi hoặc giá rẻ; không đủ để chứng minh pricing power.|Retention can reflect switching friction or low prices; it does not establish pricing power.','Đóng góp năm|Annual contribution',-24000,'Giả định 40 khách mất thêm × 600 USD đóng góp năm.|Assume 40 extra lost customers × $600 annual contribution.'),
 option('Giảm giá tiếp để củng cố moat|Cut prices further to strengthen the moat','Giảm giá không kiểm chứng willingness to pay và có thể phá biên.|Further discounts do not establish willingness to pay and can erode margins.','Doanh thu năm|Annual revenue',-18000,'Giả định giảm 30 USD/năm cho 600 tài khoản.|Assume a $30 annual discount across 600 accounts.'),
 option('Kiểm tra switching cost và thử giá theo nhóm nhỏ|Test switching costs and price in small cohorts','Bằng chứng gợi ý switching friction; cần kiểm tra win/loss và churn sau tăng giá.|Evidence suggests switching friction; test win/loss and churn after pricing changes.','Đóng góp năm|Annual contribution',18000,'Giả định thử nghiệm xác định 30 tài khoản có thể giữ, mỗi tài khoản đóng góp 600 USD/năm.|Assume testing identifies 30 accounts that can be retained, at $600 annual contribution each.') ]},
 {correct:0,options:[
 option('Đo match rate, time-to-fill, multi-homing theo từng thị trường|Measure match rate, time-to-fill and multi-homing by market','User growth chưa chứng minh hiệu ứng mạng; cần đo chất lượng ghép nối theo mật độ.|User growth alone does not prove network effects; test matching quality by density.','Chi phí marketing tránh được|Marketing spend avoided',15000,'Giả định chuyển 15.000 USD ngân sách khỏi thị trường chưa chứng minh thanh khoản.|Assume $15,000 spend is withheld from markets without proven liquidity.'),
 option('Tăng trợ giá trên toàn bộ thị trường|Increase subsidies across all markets','Trợ giá có thể tăng user nhưng không cải thiện matching.|Subsidies may increase users without improving matching.','Chi phí trợ giá|Subsidy spending',-20000,'Giả định 4.000 lượt đăng ký được trợ giá 5 USD/lượt.|Assume 4,000 signups receive $5 each.'),
 option('Kết luận network effect mạnh chỉ vì người dùng tăng|Declare strong network effects based on user growth','Time-to-fill không cải thiện và multi-homing vẫn cao.|Time-to-fill is not improving and multi-homing remains high.','Chi phí mở rộng|Expansion spending',-10000,'Giả định mở rộng thử 10.000 USD khi chưa có bằng chứng matching.|Assume $10,000 expansion spending before matching is validated.') ]}
],
'operating-leverage':[
 {correct:1,options:[
 option('Từ chối vì giá 68 thấp hơn giá niêm yết 100|Reject because $68 is below the $100 list price','Giá niêm yết không phải chi phí cơ hội khi còn công suất nhàn rỗi.|List price is not opportunity cost when spare capacity exists.','Đóng góp bị bỏ lỡ|Foregone contribution',-72000,'8.000 × (68 − 55 − 4) = 72.000 USD đóng góp tiềm năng bị bỏ lỡ.|8,000 × ($68 − $55 − $4) = $72,000 potential contribution forgone.'),
 option('Nhận có điều kiện: kiểm tra tín dụng, công suất và cannibalization|Accept conditionally: check credit, capacity and cannibalization','Đóng góp tăng 9 USD/đơn vị trước chi phí cố định bổ sung; cần kiểm tra các rủi ro khác.|Contribution is $9/unit before extra fixed costs; test other risks.','Đóng góp đơn hàng|Order contribution',72000,'8.000 × (68 − 55 − 4) = 72.000 USD, giả định không có chi phí cố định tăng thêm.|8,000 × ($68 − $55 − $4) = $72,000, assuming no extra fixed costs.'),
 option('Nhận và giảm giá niêm yết toàn bộ xuống 68|Accept and cut the regular list price to $68','Đơn đặc biệt không chứng minh nên giảm giá cho mọi khách; rủi ro cannibalization.|A special order does not justify cutting every regular price; cannibalization risk.','Đóng góp bị mất|Lost contribution',-32000,'Giả định 1.000 đơn thường bị giảm 32 USD giá bán, số lượng không đổi.|Assume 1,000 regular units lose $32 each in price, unchanged volume.') ]},
 {correct:2,options:[
 option('Xây nhà máy ngay vì dự báo tăng trưởng 25%|Build now because forecast growth is 25%','Bỏ qua xác suất 40% nhu cầu không tăng như dự báo và giá trị chờ.|Ignores the 40% chance of demand falling short and the value of waiting.','Định phí cam kết|Committed fixed cost',-20000000,'Tình huống cho biết nhà máy làm tăng định phí 20 triệu USD; đây là cam kết chi phí, không phải lỗ chắc chắn.|The case states $20m added fixed cost; this is a cost commitment, not a guaranteed loss.'),
 option('Thuê ngoài vĩnh viễn vì tránh định phí|Outsource permanently to avoid fixed cost','Bỏ qua khả năng sở hữu hiệu quả hơn nếu nhu cầu đủ cao.|Ignores the possibility that ownership is more efficient at sufficient demand.','Biến phí tăng thêm|Extra variable cost',-1200000,'Giả định thuê ngoài 100.000 đơn vị × 12 USD/đơn vị.|Assume outsourcing 100,000 units × $12 extra per unit.'),
 option('Thuê ngoài theo giai đoạn, xây khi nhu cầu đạt ngưỡng|Stage outsourcing and build when demand crosses a threshold','Giữ quyền trì hoãn và so chi phí theo từng nhánh xác suất.|Preserve deferral option and compare costs under each probability branch.','Định phí chưa cam kết|Fixed cost deferred',20000000,'Trì hoãn cam kết 20 triệu USD định phí trong giai đoạn kiểm chứng; không phải lợi nhuận thực hiện.|Defer the $20m fixed-cost commitment during validation; not realized profit.') ]}
],
'business-memo':[
 {correct:0,options:[
 option('Watchlist; so kỳ vọng hàm ẩn với base case và margin of safety|Watchlist; compare implied expectations with base case and margin of safety','Doanh nghiệp tốt chưa chắc là khoản đầu tư tốt ở giá hiện tại.|A good business is not necessarily a good investment at the current price.','Vốn đầu tư giữ lại|Investment capital retained',100000,'Giả định hoãn phân bổ 100.000 USD cho tới khi giá/KPI tạo margin of safety; đây không phải lợi nhuận.|Assume deferring a $100,000 allocation until price/KPIs offer a margin of safety; not profit.'),
 option('Mua ngay vì ROIC 24%|Buy immediately because ROIC is 24%','ROIC cao không tự động tạo expected return cao nếu giá đã phản ánh chất lượng.|High ROIC does not guarantee high expected return when quality is priced in.','Mức giảm giá trị vị thế|Position value decline',-15000,'Giả định vị thế 100.000 USD giảm 15% khi kỳ vọng được điều chỉnh.|Assume a $100,000 position falls 15% when expectations reset.'),
 option('Định giá bằng tăng trưởng 15% như chắc chắn|Treat implied 15% growth as certain','Kỳ vọng hàm ẩn không phải dự báo chắc chắn; cần phân tích downside.|Implied expectations are not guaranteed; test downside.','Mức giảm giá trị vị thế|Position value decline',-10000,'Giả định vị thế 100.000 USD giảm 10% trong bear case.|Assume a $100,000 position falls 10% in a bear case.') ]},
 {correct:1,options:[
 option('Giữ nguyên vì quản lý nói vấn đề chỉ tạm thời|Hold unchanged because management says it is temporary','Lời trấn an không thay thế bằng chứng khi KPI thesis bị vi phạm.|Reassurance does not replace evidence when thesis KPIs are breached.','Mức giảm giá trị vị thế|Position value decline',-12000,'Giả định vị thế 80.000 USD giảm 15% nếu suy giảm mang tính cấu trúc.|Assume an $80,000 position declines 15% if deterioration is structural.'),
 option('Kiểm tra cohort, seasonality; giảm/thoát nếu driver cấu trúc suy yếu|Test cohorts and seasonality; reduce or exit if drivers structurally deteriorate','Đặt bằng chứng và thesis breaker lên trên lời giải thích chủ quan.|Prioritize evidence and thesis breakers over reassurance.','Mức lỗ giả định tránh được|Illustrative loss avoided',6000,'Giả định giảm một nửa vị thế 80.000 USD trước kịch bản giảm 15%; tránh 6.000 USD lỗ giả định.|Assume halving an $80,000 position before a 15% decline avoids $6,000 hypothetical loss.'),
 option('Tăng gấp đôi vị thế chỉ vì giá đã giảm|Double the position solely because price fell','Giá thấp hơn không cải thiện thesis nếu retention và CAC suy yếu.|A lower price does not repair the thesis if retention and CAC deteriorate.','Mức giảm giá trị phần mua thêm|Added position value decline',-12000,'Giả định mua thêm 80.000 USD trước khi giá giảm 15%.|Assume adding $80,000 before a 15% decline.') ]}
]
};
let selection=[],courseId='',currency='USD',game=null,root=null,localBackground='';
const extraBank=window.CFA_DECISION_EXTRA||{};
function roundsFor(c,u){
 const original=c.id==='business-foundations'&&bank[u.id]?.length===u.cases.length?u.cases.map((item,i)=>({item,decision:bank[u.id][i]})):[];
 return [...original,...(extraBank[c.id]?.[u.id]||[])];
}
const catalog=()=> (window.CFA_DECISION_LAB_CATALOG||[]).filter(c=>c.levels.includes(studyLevel)).map(c=>({...c,units:c.units.map(u=>({...u,rounds:roundsFor(c,u)})).filter(u=>u.rounds.length)})).filter(c=>c.units.length);
const selectedCourse=()=>catalog().find(c=>c.id===courseId);
const readyUnits=()=>selectedCourse()?.units||[];
const courseGroups=[
 ['FOUNDATION','Nền tảng|Foundations',c=>c.group==='foundation'],
 ['ANALYSIS','Phân tích cốt lõi|Core Analysis',c=>['ethics','quantitative','economics','fsa','corporate-finance'].includes(c.id)],
 ['INVESTMENTS','Đầu tư|Investments',c=>['equity','fixed-income','derivatives','alternatives','portfolio'].includes(c.id)],
 ['ADVANCED','Chuyên sâu III|Level III',c=>c.group==='advanced']
];
const courseCardMeta={
 'business-foundations':['Hiểu về doanh nghiệp|Understanding a Business','<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h1m6 0h1M8 11h1m6 0h1"/>'],
 'corporate-law':['Pháp lý doanh nghiệp|Corporate Law','<path d="M12 3v18M5 21h14M3 7h18M6 7l-4 8h8L6 7Zm12 0-4 8h8l-4-8Z"/>'],
 'accounting-foundations':['Nền tảng kế toán|Accounting Foundations','<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/>'],
 'ethics':['Đạo đức nghề nghiệp|Ethics','<path d="m12 22 6-4a7 7 0 0 0 3-6V5l-9-3-9 3v7a7 7 0 0 0 3 6zM8 12l3 3 5-6"/>'],
 'quantitative':['Phân tích định lượng|Quantitative Methods','<path d="M4 19V5m0 14h16M7 15l4-5 4 2 5-7"/><circle cx="11" cy="10" r="1"/><circle cx="15" cy="12" r="1"/>'],
 'economics':['Kinh tế học|Economics','<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18"/>'],
 'fsa':['Phân tích báo cáo tài chính|Financial Statement Analysis','<path d="M14 3H5v18h14V8l-5-5v5h5M8 17v-3m4 3v-5m4 5v-7"/>'],
 'corporate-finance':['Tài chính doanh nghiệp|Corporate Finance','<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v3h4v-3"/>'],
 'equity':['Đầu tư cổ phiếu|Equity Investments','<path d="M6 3v18M12 3v18M18 3v18"/><rect x="4" y="7" width="4" height="8" fill="currentColor" stroke="none"/><rect x="10" y="11" width="4" height="6" fill="currentColor" stroke="none"/><rect x="16" y="5" width="4" height="9" fill="currentColor" stroke="none"/>'],
 'fixed-income':['Đầu tư trái phiếu|Fixed Income','<path d="m3 9 9-6 9 6H3Zm2 3v6m5-6v6m4-6v6m5-6v6M3 21h18"/>'],
 'derivatives':['Công cụ phái sinh|Derivatives','<path d="M3 19h18M5 16l5-6 4 4 6-10m-5 0h5v5M5 5l5 5"/>'],
 'alternatives':['Đầu tư thay thế|Alternative Investments','<path d="M3 21V10l6-4v15m0 0V3h8v18m0 0v-9h4v9H3M12 7h2m-2 4h2m-2 4h2"/>'],
 'portfolio':['Quản lý danh mục|Portfolio Management','<path d="M10 3a9 9 0 1 0 11 11H10V3Z"/><path d="M14 3v7h7a7 7 0 0 0-7-7Z"/>'],
 'asset-allocation':['Phân bổ tài sản|Asset Allocation','<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'],
 'performance':['Đánh giá hiệu quả|Performance Measurement','<path d="M3 19h18M6 16v-4m6 4V8m6 8V4M3 8l4-4"/>'],
 'pathways':['Hướng chuyên sâu Level III|Level III Pathways','<path d="M12 21V9m0 0-6-6m6 6 6-6M3 3h3v3m12-3h3v3"/><circle cx="12" cy="21" r="1"/>']
};
const courseIcon=path=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+path+'</svg>';
function courseMenu(){
 const list=catalog(),selected=selectedCourse();
 const groups=courseGroups.map(([id,label,match])=>({id,label,items:list.filter(match)})).filter(g=>g.items.length);
 const active=groups.find(g=>g.items.some(c=>c.id===courseId))?.id||groups[0]?.id;
 return '<div class="dl-course-picker"><span class="dl-label">'+L('Khóa học|Course')+'</span><details id="dl-course"><summary class="dl-course-trigger"><span class="dl-course-trigger-icon" aria-hidden="true">▤</span><span>'+(selected?L(selected.title):L('Chọn khóa học|Choose a course'))+'</span><span class="dl-course-chevron" aria-hidden="true">⌄</span></summary><div class="dl-course-library"><div class="dl-library-header"><strong>'+L('Thư viện khóa học|Course library')+'</strong><span>'+list.length+' '+L('khóa|courses')+'</span></div><div class="dl-library-tabs" role="group" aria-label="'+L('Nhóm kiến thức|Course categories')+'">'+groups.map(g=>'<button type="button" data-course-group="'+g.id+'" aria-pressed="'+(g.id===active)+'">'+L(g.label)+'</button>').join('')+'</div>'+groups.map(g=>'<section class="dl-library-grid" data-course-panel="'+g.id+'" aria-label="'+L(g.label)+'" '+(g.id===active?'':'hidden')+'>'+g.items.map(c=>{
 const [title,icon]=courseCardMeta[c.id]||[c.title,'<path d="M4 4h16v16H4zM8 8h8M8 12h8"/>'];
 const n=c.units.reduce((sum,u)=>sum+u.rounds.length,0),chosen=c.id===courseId;
 return '<button type="button" class="dl-library-card" data-course="'+E(c.id)+'" aria-pressed="'+chosen+'" aria-label="'+L(c.title)+', '+n+' '+L('tình huống|scenarios')+'" title="'+L(c.title)+'"><span class="dl-library-card-top"><span class="dl-library-icon">'+courseIcon(icon)+'</span><span class="dl-library-mark">'+courseIcon(chosen?'<path d="m5 12 4 4L19 6"/>':'<path d="M7 17 17 7M7 7h10v10"/>')+'</span></span><span class="dl-library-card-copy"><strong>'+L(title)+'</strong><small>'+n+' '+L('tình huống|scenarios')+'</small></span></button>';
 }).join('')+'</section>').join('')+'</div></details></div>';
}
function bindCourseLibrary(host){
 const tabs=[...host.querySelectorAll('[data-course-group]')],panels=[...host.querySelectorAll('[data-course-panel]')];
 tabs.forEach(tab=>tab.onclick=()=>{
  const id=tab.dataset.courseGroup;
  tabs.forEach(t=>t.setAttribute('aria-pressed',String(t.dataset.courseGroup===id)));
  panels.forEach(p=>p.hidden=p.dataset.coursePanel!==id);
 });
}
const money=(v)=>new Intl.NumberFormat(state.lang==='en'?'en-US':'vi-VN',{style:'currency',currency,maximumFractionDigits:0}).format(Math.abs(v)*(currency==='VND'?25000:1));
const signed=v=>(v<0?'−':v>0?'+':'')+money(v);
const baseBg='assets/decision-office-hd.webp';
const reducedMotion=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)').matches===true;
function transitionTo(action,chosen){
 const panel=root?.querySelector('.dl-monitor'),session=game,host=root;
 if(!panel||reducedMotion()||!panel.animate){action();return}
 if(chosen){chosen.classList.add('dl-choice-picked');panel.querySelectorAll('[data-answer]').forEach(b=>b.disabled=true)}
 const animation=panel.animate([{opacity:1,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(-6px) scale(.985)'}],{duration:220,easing:'ease-in',fill:'forwards'});
 let settled=false;
 const finish=()=>{if(settled)return;settled=true;if(game===session&&root===host&&panel.isConnected)action()};
 animation.finished.then(finish,finish);
}
function animateImpact(value){
 const amount=root?.querySelector('.dl-impact-value');
 if(!amount||reducedMotion()||typeof window.requestAnimationFrame!=='function')return;
 const duration=1100;let start=null;
 amount.textContent=signed(0);
 const tick=now=>{
  if(!amount.isConnected)return;
  if(start===null)start=now;
  const p=Math.min(1,(now-start)/duration),eased=1-Math.pow(1-p,3);
  amount.textContent=signed(Math.round(value*eased));
  if(p<1)window.requestAnimationFrame(tick);
 };
 window.requestAnimationFrame(tick);
}
function setup(){
 if(!catalog().some(c=>c.id===courseId)){courseId=catalog()[0]?.id||'';selection=[]}
 const units=readyUnits();selection=selection.filter(id=>units.some(u=>u.id===id)).slice(0,3);
 const last=state.deepCourseLast;
 if(!selection.length&&last?.courseId===courseId&&units.some(u=>u.id===last.unitIndex)){} // selection remains explicit unless a lesson opens the lab
 const count=units.filter(u=>selection.includes(u.id)).reduce((sum,u)=>sum+u.rounds.length,0);
 root.innerHTML='<div class="dl-setup"><div class="dl-hero"><div><span class="dl-kicker">DECISION LAB / CFA SIMULATION</span><h2>'+L('Phòng điều hành tài chính|The decision room')+'</h2><p>'+L('Bạn là chuyên viên tư vấn tài chính. Nhận hồ sơ, chọn phương án và xem kết quả mô phỏng của từng doanh nghiệp.|You are a financial adviser. Review cases, choose actions and see simulated company outcomes.')+'</p></div><div class="dl-hero-tag">'+L('MÔ PHỎNG TÌNH HUỐNG|CASE SIMULATION')+'</div></div><div class="dl-setup-grid"><section class="dl-setup-panel"><span class="dl-kicker">01 / '+L('CHỌN NỘI DUNG|CHOOSE LESSONS')+'</span><h3>'+L('Chọn 1–3 bài cùng khóa|Choose 1–3 lessons in one course')+'</h3><p>'+L('Các tình huống giữ nguyên bối cảnh từng doanh nghiệp. Không trộn các khóa không liên quan.|Cases retain their individual company context. Unrelated courses are not mixed.')+'</p>'+courseMenu()+'<div class="dl-units">'+units.map((u,i)=>'<button type="button" data-unit="'+E(u.id)+'" aria-pressed="'+selection.includes(u.id)+'" '+(!selection.includes(u.id)&&selection.length>=3?'disabled':'')+'><span class="dl-unit-index">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+L(u.title)+'</strong><small>'+u.rounds.length+' '+L('tình huống|cases')+(state.deepCourseCompleted?.includes('deep|'+courseId+'|'+u.id)?' · '+L('Đã học|Completed'):'')+'</small></span><span class="dl-check">'+(selection.includes(u.id)?'✓':'+')+'</span></button>').join('')+'</div></section><aside class="dl-setup-panel dl-mission"><span class="dl-kicker">02 / '+L('THIẾT LẬP|MISSION SETUP')+'</span><h3>'+L('Phiên ra quyết định|Decision session')+'</h3><div class="dl-count">'+selection.length+' / 3 <small>'+L('bài đã chọn|lessons selected')+'</small></div><div class="dl-count">'+count+' <small>'+L('vòng quyết định|decision rounds')+'</small></div><label class="dl-label">'+L('Đơn vị hiển thị|Result currency')+'<select id="dl-currency"><option '+(currency==='USD'?'selected':'')+'>USD</option><option '+(currency==='VND'?'selected':'')+'>VND</option></select></label><label class="dl-label">'+L('Ảnh văn phòng tùy chỉnh (không bắt buộc)|Custom office photo (optional)')+'<input type="file" id="dl-image" accept="image/png,image/jpeg,image/webp"></label><small class="dl-muted">'+L('Ảnh chỉ dùng trên thiết bị trong phiên này. Số liệu kết quả là giả định; VND dùng tỷ giá minh họa 25.000 VND/USD.|Photo stays on this device for the session. Results are illustrative; VND uses a fixed example rate of VND 25,000/USD.')+'</small><button class="dl-primary" id="dl-start" '+(!count?'disabled':'')+'>'+L('Bắt đầu làm việc|Enter the office')+' →</button></aside></div></div>';
 root.querySelectorAll('[data-course]').forEach(b=>b.onclick=()=>{
  if(courseId!==b.dataset.course){courseId=b.dataset.course;selection=[]}
  setup();root.querySelector('#dl-course summary')?.focus({preventScroll:true});
 });
 const coursePicker=root.querySelector('#dl-course');
 bindCourseLibrary(coursePicker);
 coursePicker.addEventListener('keydown',e=>{if(e.key==='Escape'&&coursePicker.open){e.preventDefault();e.stopPropagation();coursePicker.open=false;coursePicker.querySelector('summary')?.focus({preventScroll:true})}});
 root.querySelector('#dl-currency').onchange=e=>{currency=e.target.value};
 root.querySelector('#dl-image').onchange=e=>{const file=e.target.files[0];if(!file||!['image/png','image/jpeg','image/webp'].includes(file.type))return;if(localBackground)URL.revokeObjectURL(localBackground);localBackground=URL.createObjectURL(file);};
 root.querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>{const id=b.dataset.unit;if(selection.includes(id))selection=selection.filter(x=>x!==id);else if(selection.length<3)selection.push(id);setup()});
 root.querySelector('#dl-start').onclick=()=>{if(!count)return;const rounds=units.filter(u=>selection.includes(u.id)).flatMap(u=>u.rounds.map(r=>({...r,unit:u.title})));game={rounds,index:0,answers:[],stage:'question'};play(false,true)};
}
function play(animateResult=false,animateEntry=false){
 const g=game;if(!g)return setup();
 if(g.stage==='complete')return complete();
 const r=g.rounds[g.index],d=r.decision,answer=g.answers[g.index],result=g.stage==='result';
 const right=result&&answer===d.correct, opt=result?d.options[answer]:null;
 const effect=result&&animateResult?(right?' dl-win':' dl-loss'):'';
 root.innerHTML='<div class="dl-office'+effect+'"><div class="dl-office-top"><div><span class="dl-kicker">CFA / DECISION LAB</span><strong>'+L('Phòng điều hành|Executive office')+'</strong></div><div class="dl-hud"><span>'+L('Vòng|Round')+' '+(g.index+1)+'/'+g.rounds.length+'</span><span>'+L('Quyết định tốt|Sound decisions')+' '+g.answers.filter((a,i)=>a===g.rounds[i].decision.correct).length+'</span><button id="dl-quit">'+L('Thoát|Exit')+'</button></div></div><div class="dl-office-progress"><i style="width:'+((g.index+(result?1:0))/g.rounds.length*100)+'%"></i></div><div class="dl-scene"><div class="dl-scene-note"><span class="dl-kicker">'+L('HỒ SƠ DOANH NGHIỆP|CLIENT FILE')+'</span><strong>'+L(r.unit)+'</strong><span>'+L('Số liệu tình huống tính theo USD. Kết quả mô phỏng, không phải dự báo thực tế.|Case figures use USD. Simulated outcomes are not real forecasts.')+'</span></div><article class="dl-monitor'+(animateResult||animateEntry?' dl-arrive':'')+'" tabindex="-1"><div class="dl-monitor-head"><span class="dl-kicker">'+(result?L('BÁO CÁO KẾT QUẢ|OUTCOME REPORT'):L('QUYẾT ĐỊNH QUẢN TRỊ|MANAGEMENT DECISION'))+'</span><span>0'+(g.index+1)+'</span></div><h2>'+L(r.item.title)+'</h2>'+(result?'<div class="dl-result '+(right?'good':'bad')+'"><span>'+L(right?'QUYẾT ĐỊNH HỢP LÝ|SOUND DECISION':'CẦN XEM XÉT LẠI|DECISION NEEDS REVIEW')+'</span><div class="dl-impact-line"><span class="dl-impact-arrow" aria-hidden="true">'+(opt.delta>=0?'↗':'↘')+'</span><strong class="dl-impact-value" aria-hidden="true">'+signed(opt.delta)+'</strong><span class="dl-sr-only" role="status">'+signed(opt.delta)+' '+L(opt.metric)+'</span></div><small>'+L(opt.metric)+'</small><div class="dl-impact-track" aria-hidden="true"><i></i></div></div><p class="dl-assumption">'+H(opt.assumption)+'</p><h3>'+L('Điều gì đã xảy ra?|What happened?')+'</h3><p>'+H(opt.reason)+'</p><div class="dl-guidance"><strong>'+L('Phân tích của chuyên gia|Analyst guidance')+'</strong><p>'+H(r.item.guidance)+'</p></div>'+(!right?'<p class="dl-best"><strong>'+L('Phương án tốt hơn: |Better decision: ')+'</strong>'+L(d.options[d.correct].title)+'</p>':'')+'<button class="dl-primary" id="dl-next">'+L(g.index+1===g.rounds.length?'Xem báo cáo cuối phiên|View session report':'Tình huống tiếp theo|Next decision')+' →</button>':'<div class="dl-context">'+H(r.item.context)+'</div><h3>'+H(r.item.task)+'</h3><div class="dl-options">'+d.options.map((o,i)=>'<button type="button" data-answer="'+i+'"><span>'+String.fromCharCode(65+i)+'</span><strong>'+L(o.title)+'</strong><span aria-hidden="true">›</span></button>').join('')+'</div>')+'</article></div></div>';
 const office=root.querySelector('.dl-office');office.style.backgroundImage='linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.20)),url("'+(localBackground||baseBg)+'")';
 root.querySelector('#dl-quit').onclick=()=>{if(window.confirm(T('Thoát phiên mô phỏng hiện tại?|Exit this simulation session?'))){game=null;setup()}};
 if(result){
  if(animateResult){animateImpact(opt.delta);root.querySelector('.dl-monitor')?.focus?.({preventScroll:true})}
  const next=root.querySelector('#dl-next');
  next.onclick=()=>{if(next.disabled)return;next.disabled=true;transitionTo(()=>{if(g.index+1===g.rounds.length)g.stage='complete';else{g.index++;g.stage='question'}play(false,true)})};
 }else root.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{
  if(g.stage!=='question')return;
  g.answers[g.index]=Number(b.dataset.answer);g.stage='result';
  transitionTo(()=>play(true),b);
 });
}
function complete(){
 const g=game;const score=g.answers.filter((a,i)=>a===g.rounds[i].decision.correct).length;
 root.innerHTML='<div class="dl-complete"><span class="dl-kicker">MISSION DEBRIEF</span><h2>'+L('Báo cáo cuối phiên|Session report')+'</h2><div class="dl-summary-score"><strong>'+score+' / '+g.rounds.length+'</strong><span>'+L('Quyết định hợp lý|Sound decisions')+'</span></div><p>'+L('Mỗi hồ sơ thuộc một doanh nghiệp hoặc vị thế riêng. Không cộng các chỉ số doanh thu, chi phí, vốn và lợi nhuận khác bản chất thành một tổng lợi nhuận.|Each file represents a separate business or position. Revenue, cost, capital and profit effects are not combined into one misleading profit total.')+'</p><div class="dl-results-list">'+g.rounds.map((r,i)=>{const correct=g.answers[i]===r.decision.correct,o=r.decision.options[g.answers[i]];return '<div><span class="'+(correct?'good':'bad')+'">'+(correct?'✓':'×')+'</span><div><strong>'+L(r.item.title)+'</strong><small>'+L(o.metric)+'</small></div><strong class="'+(o.delta>=0?'good':'bad')+'">'+signed(o.delta)+'</strong></div>'}).join('')+'</div><button id="dl-restart" class="dl-primary">'+L('Chọn nội dung và chơi lại|Choose lessons and play again')+' →</button></div>';
 root.querySelector('#dl-restart').onclick=()=>{game=null;setup()};
}
window.CFA_DECISION_LAB={render(el){root=el;if(game)play();else setup()},select(c,u){courseId=c;selection=[u];game=null}};
window.openDecisionLabFromLesson=(c,u)=>{window.CFA_DECISION_LAB.select(c,u);closeLosDrawer();setQuizMode('decision');switchTab('quiz')};
})();
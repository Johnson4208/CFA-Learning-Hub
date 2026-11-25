let studyLevel = 'I';
const translated = value => value.split('|')[appState.lang === 'en' ? 1 : 0];
function equation(source) {
  const token = value => '<mrow>' + (value.match(/[A-Za-zΑ-ω₀-₉ᵈᶠᴅᴇₚₜᵦₛ]+|[0-9]+|./gu) || []).map(s =>
    /^[0-9]+$/.test(s) ? '<mn>'+s+'</mn>' : /[=+−()]/.test(s) ? '<mo>'+s+'</mo>' : '<mi>'+s+'</mi>').join('') + '</mrow>';
  const fraction = source.match(/^(.*?)frac\((.+);(.+)\)(.*)$/);
  return '<math display="block">'+(fraction ? token(fraction[1])+'<mfrac>'+token(fraction[2])+token(fraction[3])+'</mfrac>'+token(fraction[4]) : token(source))+'</math>';
}
function lessonBody(row, formulasOnly) {
  const [,title,concept,question,answer,formula,symbols] = row;
  return '<details class="academy-unit"><summary>'+translated(title)+'</summary><p>'+translated(concept)+'</p>'+
    (formula ? '<div class="academy-equation">'+equation(formula)+'</div><p>'+translated(symbols)+'</p>' : '')+
    '<h4>'+translated('Tình huống ứng dụng|Application case')+'</h4><p>'+translated(question)+'</p><details class="academy-answer" '+(formulasOnly?'open':'')+'><summary>'+translated('Xem lời giải|Show worked solution')+'</summary><p>'+translated(answer)+'</p></details></details>';
}
const stages = {
 I:[
  ['Đọc số liệu và đánh giá bằng chứng|Read data and evaluate evidence','Tính hiện giá, lợi suất nhiều kỳ và diễn giải một kết quả kiểm định.|Calculate present value, compound returns and interpret a hypothesis test.',[1,2,11,12,3]],
  ['Đọc doanh nghiệp|Understand a business','Đối chiếu lợi nhuận với tiền mặt rồi quyết định có đầu tư thêm vốn hay không.|Reconcile profit to cash and decide whether a project earns its cost of capital.',[4,13,5]],
  ['Từ công cụ đến danh mục|From securities to a portfolio','So sánh nguồn lợi suất, rủi ro và thanh khoản trước khi phối hợp các tài sản. Kết thúc bằng một quyết định đạo đức.|Compare return drivers, risk and liquidity before combining assets. Finish with an ethical decision.',[6,7,8,9,10,0,14]]
 ],
 II:[
  ['Kiểm tra đầu vào|Validate inputs','Kiểm tra độ tin cậy của mô hình, tỷ giá và chất lượng lợi nhuận trước khi lập dự báo.|Check model reliability, currency assumptions and earnings quality before forecasting.',[1,2,3]],
  ['Định giá từ dòng tiền|Value cash flows','Chọn dòng tiền, ghép đúng suất chiết khấu và thử lại định giá khi giả định thay đổi.|Select cash flows, match discount rates and revalue under changed assumptions.',[10,4,5,6,11,7,8]],
  ['Viết kết luận phân tích|Defend an investment conclusion','So sánh kết quả với chỉ số chuẩn, ghi rõ giả định và xử lý xung đột lợi ích.|Benchmark results, state assumptions and address conflicts of interest.',[9,0,12]]
 ],
 III:[
  ['Xác định nhiệm vụ đầu tư|Define the mandate','Ghi rõ mục tiêu, lịch chi trả và dự phòng thanh khoản trước khi đặt tỷ trọng.|Document objectives, payment dates and liquidity reserves before setting weights.',[1,2,8]],
  ['Thực thi và đánh giá|Implement and evaluate','Tính quy mô phòng hộ, quy kết kết quả và bảo vệ quyết định phân bổ lệnh.|Size a hedge, attribute performance and defend a trade allocation.',[3,4,0]],
  ['So sánh ba hướng chuyên sâu|Explore the three pathways','Học tình huống của cả ba hướng để so sánh. Khi ôn thi, tập trung sâu vào hướng bạn đăng ký.|Study all three cases for comparison. For exam preparation, concentrate on your selected pathway.',[5,6,7,9]]
 ]
};
const lessonKey = row => row[0]+'|'+row[1].split('|')[1];
const completed = () => new Set(appState.completedLessons || []);
function renderAcademy(query='') {
  const box=document.getElementById('academy');
  const done=completed();
  const rows=curriculum.filter(row=>row[0]===studyLevel);
  const ordered=stages[studyLevel].flatMap(stage=>stage[2].map(i=>rows[i]));
  const next=ordered.find(row=>!done.has(lessonKey(row)));
  const lesson=(row)=>{
    const i=rows.indexOf(row);
    const button='<button type="button" data-complete="'+i+'">'+translated(done.has(lessonKey(row))?'✓ Đã học · Học lại|✓ Completed · Revisit':'Đánh dấu đã học|Mark complete')+'</button>';
    return lessonBody(row,false).replace('<details class="academy-unit">','<details class="academy-unit" id="course-unit-'+i+'">').replace(/<\/details>$/,button+'</details>');
  };
  box.innerHTML='<header class="academy-head"><small>CFA · LEVEL '+studyLevel+'</small><h2>'+translated('Lộ trình học|Learning roadmap')+'</h2><p>'+translated('Đọc bài, tự giải tình huống rồi đối chiếu lời giải. Đánh dấu đã học để lưu tiến độ.|Read the lesson, solve its case and check your reasoning. Mark it complete to save progress.')+'</p></header>'+
    stages[studyLevel].map(([name,goal,indices],s)=>{
      const matches=indices.map(i=>rows[i]).filter(row=>translated(row[1]).toLowerCase().includes(query.trim().toLowerCase()));
      return matches.length?'<section><header class="stage"><small>'+translated('Chặng|Stage')+' '+(s+1)+' · '+indices.filter(i=>done.has(lessonKey(rows[i]))).length+'/'+indices.length+'</small><h3>'+translated(name)+'</h3><p>'+translated(goal)+'</p></header>'+matches.map(lesson).join('')+'</section>':'';
    }).join('')+(!ordered.some(row=>translated(row[1]).toLowerCase().includes(query.trim().toLowerCase()))?'<p class="stage">'+translated('Không tìm thấy bài.|No matching lessons.')+'</p>':'');
  box.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>{
    const key=lessonKey(rows[Number(b.dataset.complete)]);
    done.has(key)?done.delete(key):done.add(key);
    appState.completedLessons=[...done];saveState();renderAcademy(query);
  });
  const count=rows.filter(r=>done.has(lessonKey(r))).length;
  const pct=Math.round(100*count/rows.length);
  document.getElementById('road-progress').innerHTML='<small>LEVEL '+studyLevel+'</small><h2>'+translated('Tiến độ học|Study progress')+'</h2><strong>'+count+' / '+rows.length+'</strong><progress max="100" value="'+pct+'"></progress><p>'+translated(next?'Bài tiếp theo|Next lesson':'Hoàn thành cấp độ|Level completed')+'</p><button id="continue-road">'+(next?translated(next[1]):translated('Ôn tập tình huống|Practice cases'))+' →</button><hr><h3>'+translated('Thứ tự toàn khóa|Course sequence')+'</h3>'+Object.keys(stages).map(level=>'<button onclick="setLevel(\'LEVEL '+level+'\')">Level '+level+' · '+translated({I:'Nền tảng|Foundations',II:'Phân tích|Analysis',III:'Ứng dụng|Application'}[level])+' →</button>').join('');
  document.getElementById('continue-road').onclick=()=>{
    if(!next){switchTab('quiz');return}
    switchTab('library');renderAcademy();const el=document.getElementById('course-unit-'+rows.indexOf(next));el.open=true;el.scrollIntoView({block:'start'});el.querySelector('summary').focus({preventScroll:true});
  };
  document.getElementById('sidebar-course').textContent='CFA · Level '+studyLevel;
  document.getElementById('sidebar-pct-text').textContent=pct+'%';
  document.getElementById('sidebar-progress-bar').style.width=pct+'%';
  document.getElementById('view-formulas').innerHTML='<div class="academy-head"><small>LEVEL '+studyLevel+'</small><h2>'+translated('Sổ công thức|Formula notebook')+'</h2></div>'+rows.filter(r=>r[5]).map(r=>lessonBody(r,true)).join('');
}
const practiceState = {};
function renderCasePractice(mode) {
  const cases=curriculum.filter(row=>row[0]===studyLevel);
  const key=studyLevel+mode;
  const session=practiceState[key] ??= {index:0,answers:[],revealed:false,marks:[]};
  const area=document.getElementById('view-'+mode);
  const quizMode=mode==='quiz';
  const label=quizMode?'Luyện tình huống|Case practice':'Thẻ ghi nhớ|Flashcards';
  const header='<div class="academy-head"><small>LEVEL '+studyLevel+'</small><h2>'+translated(label)+'</h2></div>';
  if(session.index===cases.length){
    const correct=session.marks.filter(Boolean).length;
    const pct=Math.round(correct/cases.length*100);
    const wrong=cases.filter((row,i)=>!session.marks[i]);
    area.innerHTML=header+'<div class="case-result"><div><h3>'+translated('Tự đánh giá|Self-assessment')+'</h3><strong>'+correct+' / '+cases.length+'</strong><br><button>'+translated('Làm lại|Restart')+'</button></div><div class="case-ring" style="--arc:'+pct+'%"><b>'+pct+'%</b></div></div>'+
      (wrong.length?'<section class="academy-unit"><h3>'+translated('Cần ôn lại|To review')+'</h3>'+wrong.map(r=>lessonBody(r,false)).join('')+'</section>':'');
    area.querySelector('button').onclick=()=>{delete practiceState[key];renderCasePractice(mode)};
    return;
  }
  const row=cases[session.index];
  area.innerHTML=header+'<article class="academy-unit"><small>'+ (session.index+1)+' / '+cases.length+'</small><h3>'+translated(row[1])+'</h3><p>'+translated(row[3])+'</p>'+
    (quizMode?'<textarea aria-label="'+translated('Câu trả lời|Your answer')+'" rows="3"></textarea>':'')+
    (session.revealed?'<p>'+translated(row[4])+'</p><button data-mark="0">'+translated('Cần ôn lại|Review again')+'</button><button data-mark="1">'+translated('Đã hiểu|Understood')+'</button>':'<button data-reveal>'+translated('Đối chiếu lời giải|Check solution')+'</button>')+'</article>';
  const field=area.querySelector('textarea');
  if(field){field.value=session.answers[session.index]||'';field.oninput=()=>session.answers[session.index]=field.value;}
  area.querySelector('[data-reveal]')?.addEventListener('click',()=>{session.revealed=true;renderCasePractice(mode)});
  area.querySelectorAll('[data-mark]').forEach(btn=>btn.onclick=()=>{session.marks.push(btn.dataset.mark==='1');session.index++;session.revealed=false;renderCasePractice(mode)});
}

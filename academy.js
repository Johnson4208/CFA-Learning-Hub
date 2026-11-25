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
function renderAcademy(query='') {
  const rows=curriculum.filter(row=>row[0]===studyLevel);
  const filtered=rows.filter(row=>translated(row[1]).toLowerCase().includes(query.toLowerCase()));
  document.getElementById('academy').innerHTML='<div class="academy-head"><small>CFA · LEVEL '+studyLevel+'</small><h2>'+translated('Giáo trình đầu tư|Investment curriculum')+'</h2><p>'+translated('Chọn bài để đọc, làm tình huống và đối chiếu lời giải.|Open a lesson, work through the case and check your reasoning.')+'</p></div>'+filtered.map(r=>lessonBody(r,false)).join('')+
    (!filtered.length?'<p>'+translated('Chưa có bài phù hợp.|No matching lessons.')+'</p>':'')+'<a class="archive" href="notebook.html">'+translated('Sổ tay LM01, quiz và ghi chú đã lưu →|LM01 notebook, quizzes and saved notes →')+'</a>';
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

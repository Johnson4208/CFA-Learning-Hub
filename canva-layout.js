const onCourse = Boolean(document.querySelector('#academy'));
const menu = document.querySelectorAll('.canvas-links a');
function refreshMenu() {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'vi';
  const route = location.hash.slice(1) || 'home';
  menu.forEach(link => {
    link.textContent = link.dataset[lang];
    link.classList.toggle('active', link.dataset.route === route);
  });
}
refreshMenu();
new MutationObserver(refreshMenu).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
window.addEventListener('hashchange',refreshMenu);
if (onCourse) {
  function openMenu(route) {
    switchTab(({home:'library',saved:'bookmarked'})[route] || route);
    if(route==='library') document.querySelector('#academy>section')?.scrollIntoView();
    else window.scrollTo(0,0);
  }
  menu.forEach(link=>link.onclick=event=>{
    event.preventDefault();
    history.pushState(null,'','#'+link.dataset.route);
    openMenu(link.dataset.route);
    refreshMenu();
  });
  const originalRender = renderAcademy;
  renderAcademy = function(query='') {
    document.querySelector('.lesson-spread')?.remove();
    document.querySelector('#academy').hidden=false;
    originalRender(query);
    if(query) return;
    const rows=curriculum.filter(row=>row[0]===studyLevel);
    const groups=stages[studyLevel];
    const done=completed();
    const count=rows.filter(r=>done.has(lessonKey(r))).length;
    const next=groups.flatMap(g=>g[2]).map(i=>rows[i]).find(r=>!done.has(lessonKey(r)));
    const pct=Math.round(count*100/rows.length);
    const levels=['I','II','III'].map(l=>'<button data-level="'+l+'" class="'+(l===studyLevel?'chosen':'')+'">Level '+l+'</button>').join('');
    const groupButtons=groups.map((g,i)=>'<button data-stage="'+i+'">'+translated(g[0])+'</button>').join('');
    const steps=groups.map((g,i)=>'<button data-stage="'+i+'" class="'+(g[2].every(j=>done.has(lessonKey(rows[j])))?'done':g[2].some(j=>rows[j]===next)?'current':'')+'">'+translated(g[0])+'</button>').join('');
    const box=document.querySelector('#academy');
    box.insertAdjacentHTML('afterbegin','<div class="canvas-dash"><div><div class="levels">'+levels+'</div><h2>'+translated('Tiếp tục học|Continue Learning')+'</h2><button class="resume-card"><span><small>LEVEL '+studyLevel+'</small><b>'+(next?translated(next[1]):translated('Ôn tập|Practice'))+'</b>→</span><i class="pen-photo"></i></button></div><div><div class="metrics"><div>'+translated('Tiến độ|Progress')+'<strong>'+pct+'%</strong></div><div>'+translated('Bài đã học|Lessons completed')+'<strong>'+count+'/'+rows.length+'</strong></div></div><h2>'+translated('Học phần|Modules')+'</h2><div class="modules">'+groupButtons+'</div></div></div><div class="canvas-road"><h2>'+translated('Lộ trình|Roadmap')+'</h2><div class="road-steps">'+steps+'</div></div>');
    box.querySelector('.resume-card').onclick=()=>document.querySelector('#continue-road').click();
    box.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>box.querySelectorAll(':scope > section')[Number(b.dataset.stage)].scrollIntoView());
    box.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>setLevel('LEVEL '+b.dataset.level));
  };
  window.addEventListener('popstate',()=>openMenu(location.hash.slice(1)||'home'));
}
if (onCourse) {
  const academy=document.querySelector('#academy');
  function closeReader(){
    document.querySelector('.lesson-spread')?.remove();
    academy.hidden=false;
  }
  function readUnit(unit){
    closeReader();
    const units=[...academy.querySelectorAll('details[id^="course-unit-"]')];
    const position=units.indexOf(unit);
    const reader=document.createElement('div');
    reader.className='lesson-spread';
    const article=document.createElement('article');
    const heading=document.createElement('h2');
    heading.textContent=unit.querySelector('summary').textContent;
    article.append(heading);
    [...unit.children].slice(1).forEach(child=>article.append(child.cloneNode(true)));
    const outline=document.createElement('aside');
    outline.innerHTML='<h3>'+translated('Mục lục|Lesson Outline')+'</h3>';
    for(const el of units){
      const button=document.createElement('button');
      button.textContent=el.querySelector('summary').textContent;
      button.classList.toggle('current',el===unit);
      button.onclick=()=>readUnit(el);
      outline.append(button);
    }
    const support=document.createElement('aside');
    support.innerHTML='<h3>'+translated('Hỗ trợ học tập|Study Support')+'</h3>';
    const formula=article.querySelector('.academy-equation');
    if(formula?.nextElementSibling) support.append(formula.nextElementSibling.cloneNode(true));
    const actions=document.createElement('footer');
    for(const [label,action] of [[translated('Lộ trình|Roadmap'),closeReader],[translated('Bài trước|Previous lesson'),position>0&&(()=>readUnit(units[position-1]))],[translated('Bài tiếp theo|Next lesson'),position+1<units.length&&(()=>readUnit(units[position+1]))]]){
      if(!action)continue;
      const b=document.createElement('button');b.textContent=label;b.onclick=action;actions.append(b);
    }
    article.append(actions);
    const complete=article.querySelector('[data-complete]');
    if(complete)complete.onclick=()=>{closeReader();unit.querySelector('[data-complete]').click()};
    reader.append(outline,article,support);
    academy.after(reader);academy.hidden=true;reader.scrollIntoView({block:'start'});
  }
  academy.addEventListener('click',event=>{
    const unit=event.target.closest('details[id^="course-unit-"]');
    if(unit && event.target.closest('summary')===unit.firstElementChild){event.preventDefault();readUnit(unit)}
    if(event.target.closest('.resume-card')){
      const open=academy.querySelector('details[id^="course-unit-"][open]');
      if(open) readUnit(open);
    }
  });
  
  menu.forEach(link=>link.addEventListener('click',closeReader));
}

const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const nodes=new Map();
const node=id=>{if(!nodes.has(id))nodes.set(id,{innerHTML:'',textContent:'',style:{},nextElementSibling:{},classList:{add(){},remove(){}},removeAttribute(){},scrollTo(){},getBoundingClientRect(){return {top:0}},scrollTop:0});return nodes.get(id)};
const ctx={console,state:{lang:'vi',level:'LVL I',bookmarkedModules:[],deepCourseCompleted:[]},studyLevel:'I',currentSearch:'',currentFilter:'all',byId:node,saveState(){},refreshWorkspace(){},closeLosDrawer(){},switchTab(){},showToast(){},document:{querySelector:()=>node('heading')}};
ctx.window=ctx;
ctx.escapeText=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
ctx.translated=value=>value.split('|')[ctx.state.lang==='en'?1:0];
vm.createContext(ctx);
vm.runInContext(read('course-textbook.js'),ctx);
vm.runInContext(read('core-depth.js'),ctx);
const html=read('index.html');
vm.runInContext(html.slice(html.indexOf('function equation(source)'),html.indexOf('const caseExtensions =')),ctx);
const src=read('deep-course.js');
vm.runInContext(src.slice(0,src.indexOf('  const foundationDepth='))+'globalThis.testCourses=courses;})();',ctx);
const courseList=ctx.testCourses;
vm.runInContext(src,ctx);
assert.equal(courseList.length,16);
assert.equal(Object.values(ctx.CFA_TEXTBOOK.chapters).reduce((n,v)=>n+Object.keys(v).length,0),80);
assert.equal(ctx.CFA_TEXTBOOK.chapters['business-foundations']['unit-economics'].models.length,12);
let renders=0,sections=0;
const bilingual=(text,where)=>{assert.equal(typeof text,'string',where);assert.equal(text.split('|').length,2,where);assert.ok(text.split('|').every(x=>x.trim()),where)};
for(const course of courseList){
  for(let i=0;i<course.units.length;i++){
    const unit=course.units[i],chapter=ctx.CFA_TEXTBOOK.chapters[course.id]?.[unit.id];
    assert.ok(chapter,course.id+'/'+unit.id);
    assert.ok(chapter.sections.length>=2);
    sections+=chapter.sections.length;
    for(const section of chapter.sections){bilingual(section.title,'section title');bilingual(section.text,'section text')}
    for(const text of [chapter.worked.facts,chapter.worked.answer,chapter.question,chapter.answer])bilingual(text,'worked/self-check');
    for(const lang of ['vi','en']){
      ctx.state.lang=lang;ctx.openDeepCourse(course.id,i);
      const rendered=node('drawer-los-list').innerHTML;
      assert.ok(rendered.includes('id="textbook-recall"'));
      assert.ok(rendered.includes('id="textbook-worked"'));
      assert.ok(rendered.includes(ctx.escapeText(ctx.translated(chapter.question))));
      assert.ok(rendered.includes(ctx.escapeText(ctx.translated(chapter.answer))));
      assert.ok(!rendered.includes('undefined'));
      assert.ok(!rendered.replace(/<math\b[\s\S]*?<\/math>/g,'').includes('|'),'untranslated separator outside mathematical conditions');
      const ids=[...rendered.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
      assert.equal(new Set(ids).size,ids.length,'duplicate IDs');
      if(unit.formula){assert.ok(rendered.includes('<math '));assert.ok(!rendered.includes('frac('))}
      if(course.group==='core'){
        assert.ok(chapter.seminar,'missing core seminar');
        assert.equal(chapter.seminar.sections.length,3);
        assert.equal(chapter.seminar.steps.length,3);
        assert.ok(rendered.includes('id="core-seminar"'));
        assert.ok(rendered.includes('id="core-case-answer"'));
        assert.ok(rendered.includes(ctx.escapeText(ctx.translated(chapter.seminar.decision))));
        for(const text of [chapter.seminar.title,chapter.seminar.facts,chapter.seminar.decision,...chapter.seminar.steps])bilingual(text,'core case');
        if(chapter.seminar.formula){
          const f=chapter.seminar.formula;
          for(const text of [f.symbols,f.use,f.limits])bilingual(text,'formula explanation');
          const markup=ctx.equation(f.code);
          assert.ok(!markup.includes('frac('));
          assert.ok(markup.startsWith('<math '));
        }
      }else assert.ok(!chapter.seminar,'core additions leaked to non-core lessons');
      renders++;
    }
  }
}
ctx.state.lang='vi';ctx.openDeepCourse('business-foundations',0);
ctx.saveDeepTextbookDraft('<script>alert(1)</script>');
ctx.selectDeepUnit(0);
assert.ok(node('drawer-los-list').innerHTML.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
ctx.state.lang='en';ctx.selectDeepUnit(0);
assert.ok(!node('drawer-los-list').innerHTML.includes('&lt;script&gt;'));
ctx.saveDeepTextbookDraft('My independent English answer');
ctx.selectDeepUnit(1);ctx.selectDeepUnit(0);
assert.ok(node('drawer-los-list').innerHTML.includes('My independent English answer'));
ctx.toggleDeepUnitComplete();
assert.ok(ctx.state.deepCourseCompleted.includes('deep|business-foundations|business-model'));
ctx.openQuickAccess();
assert.equal(ctx.state.deepCourseLast.courseId,'business-foundations');
assert.equal(ctx.state.deepCourseLast.unitIndex,0);
ctx.state.lang='vi';ctx.openDeepCourse('quantitative',1);
ctx.saveDeepCoreDraft('<img src=x onerror=alert(1)>');ctx.selectDeepUnit(1);
assert.ok(node('drawer-los-list').innerHTML.includes('&lt;img src=x onerror=alert(1)&gt;'));
ctx.selectDeepUnit(0);
assert.ok(!node('drawer-los-list').innerHTML.includes('&lt;img'));
ctx.selectDeepUnit(1);ctx.state.lang='en';ctx.selectDeepUnit(1);
assert.ok(!node('drawer-los-list').innerHTML.includes('&lt;img'));
ctx.saveDeepCoreDraft('My core explanation');ctx.selectDeepUnit(1);
assert.ok(node('drawer-los-list').innerHTML.includes('My core explanation'));
assert.ok(!ctx.state.deepTextbookDrafts['quantitative|probability|en']);
for(const formula of ['WACC=wₑrₑ+w_d r_d(1−T)','PV=frac(CF₁;1+r)+frac(CF₂;(1+r)²)','σₚ²=w₁²σ₁²+w₂²σ₂²','SE=frac(s;√n)']){
 const rendered=ctx.equation(formula);assert.ok(rendered.startsWith('<math '));assert.ok(!rendered.includes('<mi>_</mi>'));assert.ok(!rendered.includes('frac('));
}
assert.ok(ctx.equation('x²').includes('<msup>'));
assert.ok(ctx.equation('x₁').includes('<msub>'));
assert.ok(ctx.equation('frac(a;b)').includes('<mfrac>'));
assert.ok(ctx.equation('√n').includes('<msqrt>'));
assert.ok(html.indexOf('src="course-textbook.js')<html.indexOf('src="deep-course.js'));
assert.ok(html.indexOf('src="course-textbook.js')<html.indexOf('src="core-depth.js'));
assert.ok(html.indexOf('src="core-depth.js')<html.indexOf('src="deep-course.js'));
assert.equal(Object.keys(ctx.CFA_CORE_SEMINARS).length,10);
assert.equal(Object.values(ctx.CFA_CORE_SEMINARS).reduce((n,c)=>n+Object.keys(c).length,0),50);
const near=(actual,expected,tolerance=0.0001)=>assert.ok(Math.abs(actual-expected)<tolerance,`${actual} versus ${expected}`);
near(55/1.1+55/1.1**2,95.454545);
near(.8*.3/(.8*.3+.2*.7),.631578947);
near(.05/Math.sqrt(100),.005);
near(.8/.3,2.6666667);
near(14-6*.5-1,10);
near(110*920-100*1000,1200);
near((110-70)*920-(100-60)*1000,-3200);
near(25000*1.04/1.02,25490.196078);
near(98*.12*20/365,.64438356);
near(-120+70/1.1+90/1.1**2,18.016529);
near(.75*.12+.25*.06*.75,.10125);
near(10/1.09+218/1.09**2,192.660550);
near(Math.sqrt(105/95.2)-1,.050210063);
near(-5*.01+.5*40*.01**2,-.048);
near(10/1.05,9.5238095);
near(.09/1.87,.04812834);
near((120-2)-.2*(120-2-100),114.4);
near(Math.sqrt(.5**2*.2**2+.5**2*.2**2),.141421356);
near(Math.pow(2,.2)-1,.148698355);
near(((100*.8)-10)*1.25-10,77.5);
near(((100*1.25)-10)*.8-10,82);
console.log(JSON.stringify({courses:courseList.length,lessons:80,explanatorySections:sections,bilingualRenders:renders,coreCourses:10,coreDeepCases:50,newCoreSections:150,coreStepExplanations:150,independentNumericalChecks:21,businessModels:12,drafts:'foundation and core saved, isolated and escaped',progress:'preserved',math:'fractions, scripts, roots and conditional probability checked'}));

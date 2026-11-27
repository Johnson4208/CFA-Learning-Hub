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
      assert.ok(!rendered.includes('|'),'untranslated separator');
      const ids=[...rendered.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
      assert.equal(new Set(ids).size,ids.length,'duplicate IDs');
      if(unit.formula){assert.ok(rendered.includes('<math '));assert.ok(!rendered.includes('frac('))}
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
for(const formula of ['WACC=wₑrₑ+w_d r_d(1−T)','PV=frac(CF₁;1+r)+frac(CF₂;(1+r)²)','σₚ²=w₁²σ₁²+w₂²σ₂²','SE=frac(s;√n)']){
 const rendered=ctx.equation(formula);assert.ok(rendered.startsWith('<math '));assert.ok(!rendered.includes('<mi>_</mi>'));assert.ok(!rendered.includes('frac('));
}
assert.ok(ctx.equation('x²').includes('<msup>'));
assert.ok(ctx.equation('x₁').includes('<msub>'));
assert.ok(ctx.equation('frac(a;b)').includes('<mfrac>'));
assert.ok(ctx.equation('√n').includes('<msqrt>'));
assert.ok(html.indexOf('src="course-textbook.js')<html.indexOf('src="deep-course.js'));
console.log(JSON.stringify({courses:courseList.length,lessons:80,explanatorySections:sections,bilingualRenders:renders,workedExamples:80,explainedSelfChecks:80,businessModels:12,drafts:'saved, isolated and escaped',progress:'preserved',math:'fractions, scripts and roots checked'}));

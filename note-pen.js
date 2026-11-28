/* Personal text highlights: scoped, bilingual, local-only, independent of curriculum keyword marks. */
(function(){
'use strict';
const palette=[
 ['yellow','Vàng|Yellow','#f9df83'],
 ['burgundy','Burgundy|Burgundy','#582631'],
 ['teal','Teal|Teal','#006d70'],
 ['sage','Xanh lá trầm|Muted sage','#526e53']
];
const T=s=>s.split('|')[state.lang==='en'?1:0]??s;
const scopeSelector='[data-note-scope]';
const excluded='button,a,input,textarea,select,option,script,style,iframe,svg,[contenteditable="true"],.lesson-actions,.decision-lab-link';
let active=false,holding=null,held=false,color='yellow',drafts=[],toolbar=null,menu=null,menuId=null;
const storageKey='cfanotes_clean_v1';
const HOLD_MS=2000;
let fab=null,fabFrame=null,holdStart=null;
function visibleLibrary(){
 const library=document.getElementById('view-library'),drawer=document.getElementById('los-drawer');
 return library&&!library.classList.contains('hidden')&&(!drawer||drawer.classList.contains('hidden'))?library:null;
}
function canUsePen(){return !!(activeScope()||visibleLibrary())}
function positionFab(){
 if(!fab)return;
 const root=activeScope(),dialog=root?.closest('dialog[open]');
 if(dialog)return;
 const content=root?document.querySelector('#los-drawer .module-modal-card'):visibleLibrary();
 if(!content)return;
 const rect=content.getBoundingClientRect(),space=window.innerWidth-rect.right;
 const rail=space>=64;
 fab.classList.toggle('is-bottom',!rail);
 fab.style.left=rail?(rect.right+(space-44)/2)+'px':'auto';
 fab.style.right=rail?'auto':'12px';
}
function updateFab(progress=0){
 if(!fab)return;
 const p=Math.max(0,Math.min(1,progress));
 fab.style.setProperty('--fab-progress',String(p));
 fab.classList.toggle('is-holding',holding!==null);
 fab.setAttribute('aria-pressed',String(active));
 fab.querySelector('.cfa-note-fab-status').textContent=holding!==null?T('Đang giữ H…|Holding H…'):active?(activeScope()?T('Đang tô note|Note pen on'):T('Mở bài để tô|Open a lesson')):T('Giữ H 2 giây|Hold H for 2s');
 fab.querySelector('.cfa-note-fab-key').textContent=active&&holding===null?'✓':'H';
 fab.title=holding!==null?T('Đang giữ H…|Holding H…'):active?T('Bấm để tắt bút note|Click to turn off note pen'):T('Giữ H 2 giây hoặc bấm để bật|Hold H for 2s or click to enable');
}
function animateHold(now){
 fabFrame=null;
 if(holding===null||holdStart===null)return;
 updateFab((now-holdStart)/HOLD_MS);
 if(now-holdStart<HOLD_MS)fabFrame=requestAnimationFrame(animateHold);
}
function togglePen(){
 if(!canUsePen())return;
 clearHold();active=!active;closeMenu();drawToolbar();
 if(activeScope())notify(active?'Bút note đã bật. Kéo chọn chữ để tô.|Note pen on. Drag to highlight text.':'Bút note đã tắt.|Note pen off.');
}
function drawFab(){
 fab?.remove();fab=null;
 if(!canUsePen())return;
 const root=activeScope(),dialog=root?.closest('dialog[open]');
 const el=document.createElement('button');el.type='button';el.className='cfa-note-fab';
 el.setAttribute('aria-label',T('Take note · Giữ H 2 giây hoặc bấm để bật/tắt|Take note · Hold H for 2s or click to toggle'));
 el.innerHTML='<span class="cfa-note-fab-ring" aria-hidden="true"><svg viewBox="0 0 44 44"><circle class="cfa-note-fab-track" cx="22" cy="22" r="19"/><circle class="cfa-note-fab-fill" cx="22" cy="22" r="19" pathLength="100"/></svg><span class="cfa-note-fab-key">H</span></span><span class="cfa-note-fab-copy"><strong>Take note</strong><span class="cfa-note-fab-status"></span></span>';
 el.onclick=togglePen;fab=el;
 const header=dialog?.querySelector('.business-model-header-top');
 if(header){el.classList.add('is-inline','is-compact');header.insertBefore(el,header.querySelector('.business-model-close'))}
 else (root?hostFor(root):document.body).append(el);
 positionFab();updateFab(holdStart===null?0:(performance.now()-holdStart)/HOLD_MS);
}
function activeScope(){
 const drawer=document.getElementById('los-drawer');
 if(!drawer||drawer.classList.contains('hidden'))return null;
 const dialog=drawer.querySelector('#business-model-dialog[open]');
 return dialog?dialog.querySelector(scopeSelector):drawer.querySelector('#course-unit-detail[data-note-scope]');
}
function hostFor(root){return root?.closest('dialog[open]')||document.getElementById('los-drawer')||document.body}
function notes(){return Array.isArray(state.notes)?state.notes:[]}
function saved(){return notes().filter(n=>n?.highlight?.key).map(n=>({...n.highlight,id:String(n.id),saved:true}))}
function all(){return [...saved(),...drafts]}
function persist(next){
 const old=state.notes;state.notes=next;
 try{localStorage.setItem(storageKey,JSON.stringify(state));return true}
 catch(e){state.notes=old;return false}
}
function validColor(c){return palette.some(p=>p[0]===c)}
function textNodes(root){
 const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const list=[];let node,offset=0;
 while((node=walk.nextNode())){
  const p=node.parentElement;
  if(!p||p.closest(scopeSelector)!==root||p.closest(excluded)||p.closest('dialog')!==root.closest('dialog'))continue;
  const length=node.data.length;if(!length)continue;
  list.push({node,start:offset,end:offset+length});offset+=length;
 }
 return list;
}
const textOf=list=>list.map(x=>x.node.data).join('');
function locate(note,text){
 const q=note.quote;
 if(typeof q!=='string'||!q.length)return null;
 if(Number.isInteger(note.start)&&note.start>=0&&text.slice(note.start,note.start+q.length)===q){
  const before=text.slice(Math.max(0,note.start-(note.prefix||'').length),note.start);
  const after=text.slice(note.start+q.length,note.start+q.length+(note.suffix||'').length);
  if(before===(note.prefix||'')&&after===(note.suffix||''))return {start:note.start,end:note.start+q.length};
 }
 const hits=[];let pos=text.indexOf(q);
 while(pos!==-1){hits.push(pos);pos=text.indexOf(q,pos+1);if(hits.length>500)return null}
 if(hits.length===1)return {start:hits[0],end:hits[0]+q.length};
 const exact=hits.filter(p=>text.slice(Math.max(0,p-(note.prefix||'').length),p)===(note.prefix||'')&&text.slice(p+q.length,p+q.length+(note.suffix||'').length)===(note.suffix||''));
 return exact.length===1?{start:exact[0],end:exact[0]+q.length}:null;
}
function clearMarks(root){
 root.querySelectorAll('span.cfa-personal-mark').forEach(el=>{
  if(el.closest(scopeSelector)!==root)return;
  const p=el.parentNode;el.replaceWith(...el.childNodes);p.normalize();
 });
}
function redraw(root){
 if(!root)return;
 clearMarks(root);
 const entries=textNodes(root),text=textOf(entries);
 const spans=[];
 for(const n of all().filter(n=>n.key===root.dataset.noteScope)){
  const r=locate(n,text);
  if(!r||spans.some(x=>x.start<r.end&&r.start<x.end))continue;
  spans.push({...r,n});
 }
 for(const entry of entries){
  const parts=spans.filter(r=>r.start<entry.end&&entry.start<r.end).sort((a,b)=>b.start-a.start);
  for(const r of parts){
   const start=Math.max(0,r.start-entry.start),end=Math.min(entry.end,r.end)-entry.start;
   let node=entry.node;
   if(end<node.length)node.splitText(end);
   if(start>0)node=node.splitText(start);
   const mark=document.createElement('span');
   mark.className='cfa-personal-mark';
   mark.dataset.noteId=r.n.id;
   mark.dataset.color=validColor(r.n.color)?r.n.color:'yellow';
   mark.dataset.saved=String(r.n.saved);
   mark.title=T(r.n.saved?'Ghi chú đã lưu · Chuột phải để sửa|Saved note · Right-click to edit':'Ghi chú nháp · Chuột phải để lưu|Draft note · Right-click to save');
   node.replaceWith(mark);mark.append(node);
  }
 }
}
function rangeOffsets(range,root){
 const list=textNodes(root);
 let start=null,end=null;
 for(const {node,start:base,end:limit} of list){
  if(!range.intersectsNode(node))continue;
  if(range.comparePoint(node,0)>0||range.comparePoint(node,node.length)<0)continue;
  const left=range.startContainer===node?range.startOffset:0;
  const right=range.endContainer===node?range.endOffset:node.length;
  if(right<=left)continue;
  if(start===null)start=base+left;
  end=Math.min(limit,base+right);
 }
 if(start===null||end===null||end<=start)return null;
 const text=textOf(list);
 // Reject ranges that cross excluded controls or nested content rather than silently skipping it.
 if(range.toString()!==text.slice(start,end))return null;
 while(start<end&&/\s/.test(text[start]))start++;
 while(end>start&&/\s/.test(text[end-1]))end--;
 return end>start?{start,end,text}:null;
}
function notify(message){
 const host=hostFor(activeScope());
 const el=document.createElement('div');el.className='cfa-pen-toast';el.setAttribute('role','status');el.textContent=T(message);host.append(el);setTimeout(()=>el.remove(),2400);
}
function button(label,handler,cls){
 const b=document.createElement('button');b.type='button';b.className=cls||'';b.textContent=label;b.onclick=handler;return b;
}
function colors(container,current,change){
 for(const [id,label,hex] of palette){
  const b=button('',()=>change(id),'cfa-pen-color');
  b.style.setProperty('--pen-swatch',hex);b.title=T(label);b.setAttribute('aria-label',T(label));b.setAttribute('aria-pressed',String(current===id));
  if(current===id)b.textContent='✓';container.append(b);
 }
}
function closeMenu(){menu?.remove();menu=null;menuId=null}
function drawToolbar(){
 toolbar?.remove();toolbar=null;
 const root=activeScope();
 document.body.classList.toggle('cfa-pen-active',!!(active&&root));
 drawFab();
 if(!active||!root)return;
 toolbar=document.createElement('div');toolbar.className='cfa-pen-toolbar';toolbar.setAttribute('role','group');toolbar.setAttribute('aria-label',T('Bút ghi chú|Note pen'));
 const title=document.createElement('span');title.className='cfa-pen-label';title.textContent=T('Bút note|Note pen');toolbar.append(title);
 const swatches=document.createElement('div');swatches.className='cfa-pen-colors';
 colors(swatches,color,id=>{color=id;drawToolbar()});toolbar.append(swatches);
 const close=button('×',()=>stop(),'cfa-pen-close');close.setAttribute('aria-label',T('Tắt bút note|Turn off note pen'));close.title=T('Tắt bút note (Esc)|Turn off note pen (Esc)');toolbar.append(close);
 hostFor(root).append(toolbar);
}
function sync(){
 closeMenu();
 const root=activeScope();
 if(root)redraw(root);
 drawToolbar();
}
function stop(){active=false;clearHold();closeMenu();drawToolbar()}
function clearHold(){
 if(holding!==null){clearTimeout(holding);holding=null}
 if(fabFrame!==null){cancelAnimationFrame(fabFrame);fabFrame=null}
 holdStart=null;updateFab(0);
}
function newDraft(){
 if(!active)return;
 const root=activeScope(),sel=window.getSelection();
 if(!root||!sel||sel.isCollapsed||sel.rangeCount!==1)return;
 const range=sel.getRangeAt(0);
 if(!root.contains(range.startContainer)||!root.contains(range.endContainer))return;
 if(range.startContainer.parentElement?.closest(scopeSelector)!==root&&range.startContainer!==root||range.endContainer.parentElement?.closest(scopeSelector)!==root&&range.endContainer!==root)return;
 const bounds=rangeOffsets(range,root);if(!bounds)return;
 const {start,end,text}=bounds;
 if(end-start>5000){notify('Chỉ tô tối đa 5.000 ký tự mỗi note.|Highlight at most 5,000 characters per note.');return}
 const same=all().filter(n=>n.key===root.dataset.noteScope);
 if(same.some(n=>{const r=locate(n,text);return r&&r.start<end&&start<r.end})){notify('Đoạn này đã có note. Chuột phải để đổi màu hoặc xóa.|This overlaps a note. Right-click to recolor or remove it.');return}
 const ids=new Set([...notes().map(n=>String(n.id)),...drafts.map(n=>n.id)]);
 let id=Date.now();while(ids.has(String(id)))id++;
 drafts.push({id:String(id),key:root.dataset.noteScope,title:root.dataset.noteTitle||'CFA',start,end,quote:text.slice(start,end),prefix:text.slice(Math.max(0,start-40),start),suffix:text.slice(end,end+40),color,saved:false});
 sel.removeAllRanges();closeMenu();redraw(root);
}
function changeColor(id,next){
 if(!validColor(next))return false;
 const draft=drafts.find(n=>n.id===id);
 if(draft){draft.color=next;return true}
 const nextNotes=notes().map(n=>String(n.id)===id&&n.highlight?{...n,highlight:{...n.highlight,color:next}}:n);
 if(!persist(nextNotes)){notify('Không thể lưu màu. Bộ nhớ trình duyệt có thể đã đầy.|Could not save color. Browser storage may be full.');return false}
 return true;
}
function saveNote(id){
 const draft=drafts.find(n=>n.id===id);if(!draft)return true;
 const {saved:_,id:__,title,...highlight}=draft;
 const entry={id:Number(id),category:title,date:new Date().toLocaleDateString(state.lang==='en'?'en-GB':'vi-VN'),text:draft.quote,highlight};
 if(!persist([entry,...notes()])){notify('Không thể lưu note. Bộ nhớ trình duyệt có thể đã đầy.|Could not save note. Browser storage may be full.');return false}
 drafts=drafts.filter(n=>n.id!==id);
 notify('Đã lưu vào Notes.|Saved to Notes.');return true;
}
function removeNote(id){
 if(drafts.some(n=>n.id===id)){drafts=drafts.filter(n=>n.id!==id);return true}
 if(!persist(notes().filter(n=>String(n.id)!==id||!n.highlight))){notify('Không thể xóa note đã lưu.|Could not remove saved note.');return false}
 notify('Đã xóa note.|Note removed.');return true;
}
function showMenu(id,x,y){
 const n=all().find(n=>n.id===id),root=activeScope();if(!n||!root||n.key!==root.dataset.noteScope)return;
 closeMenu();menuId=id;
 menu=document.createElement('div');menu.className='cfa-pen-menu';menu.setAttribute('role','group');menu.setAttribute('aria-label',T('Tùy chọn note|Note options'));
 const header=document.createElement('div');header.className='cfa-pen-menu-head';
 const label=document.createElement('strong');label.textContent=T(n.saved?'Note đã lưu|Saved note':'Note nháp|Draft note');header.append(label);
 const cancel=button('×',()=>{if(removeNote(id)){closeMenu();redraw(root)}},'cfa-pen-remove');cancel.title=T(n.saved?'Xóa note đã lưu|Delete saved note':'Hủy note|Discard note');cancel.setAttribute('aria-label',cancel.title);header.append(cancel);menu.append(header);
 const swatches=document.createElement('div');swatches.className='cfa-pen-colors';
 colors(swatches,n.color,next=>{if(changeColor(id,next)){redraw(root);showMenu(id,x,y)}});menu.append(swatches);
 const save=button(T(n.saved?'Đã lưu ✓|Saved ✓':'Lưu note|Save note'),()=>{if(saveNote(id)){closeMenu();redraw(root)}},'cfa-pen-save');if(n.saved)save.disabled=true;menu.append(save);
 const host=hostFor(root);host.append(menu);
 const box=host.matches('dialog')?host.getBoundingClientRect():{left:0,top:0,right:innerWidth,bottom:innerHeight};
 const rect=menu.getBoundingClientRect();
 menu.style.left=Math.max(box.left+8,Math.min(x,box.right-rect.width-8))+'px';
 menu.style.top=Math.max(box.top+8,Math.min(y,box.bottom-rect.height-8))+'px';
}
function editable(el){return !!el?.closest?.('input,textarea,select,[contenteditable=""],[contenteditable="true"],[role="textbox"]')||el?.isContentEditable}
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&(menu||active||holding!==null)){
  e.preventDefault();e.stopImmediatePropagation();
  if(menu)closeMenu();else stop();return;
 }
 if(e.key.toLowerCase()!=='h'||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||editable(e.target)||!canUsePen())return;
 e.preventDefault();
 if(e.repeat||held)return;
 held=true;
 holdStart=performance.now();
 holding=setTimeout(()=>{if(canUsePen())togglePen();else clearHold()},HOLD_MS);
 updateFab(0);
 fabFrame=requestAnimationFrame(animateHold);
},true);
document.addEventListener('keyup',e=>{if(e.key.toLowerCase()==='h'){held=false;clearHold()}},true);
window.addEventListener('blur',()=>{held=false;clearHold()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){held=false;clearHold()}});
document.addEventListener('mouseup',e=>{if(e.button===0&&active&&!e.target.closest?.('.cfa-pen-toolbar,.cfa-pen-menu,.cfa-note-fab'))newDraft()});
document.addEventListener('contextmenu',e=>{
 const mark=e.target.closest?.('.cfa-personal-mark');
 if(!mark||mark.closest(scopeSelector)!==activeScope())return;
 e.preventDefault();e.stopPropagation();showMenu(mark.dataset.noteId,e.clientX,e.clientY);
});
document.addEventListener('pointerdown',e=>{if(menu&&!menu.contains(e.target))closeMenu()});
document.addEventListener('scroll',()=>{if(menu)closeMenu()},true);
window.addEventListener('resize',()=>{closeMenu();positionFab()});
function syncAvailability(){
 if(!canUsePen()){stop();return}
 drawToolbar();
}
document.addEventListener('DOMContentLoaded',()=>{
 const library=document.getElementById('view-library'),drawer=document.getElementById('los-drawer');
 const observer=new MutationObserver(syncAvailability);
 for(const el of [library,drawer,document.documentElement])if(el)observer.observe(el,{attributes:true,attributeFilter:el===document.documentElement?['lang']:['class']});
 syncAvailability();
});
window.CFA_NOTE_PEN={sync,stop};
})();
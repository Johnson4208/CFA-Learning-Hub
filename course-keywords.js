(function(){
  'use strict';
  const book=window.CFA_TEXTBOOK;
  const opening=text=>{
    const match=text.match(/^.*?[.!?](?:\s|$)/);
    return (match?match[0]:text).trim();
  };
  const bilingual=value=>{const parts=value.split('|');return parts.length===2?parts:[value,value]};
  const entries=[];
  for(const [course,units] of Object.entries(book.chapters)){
    for(const [unit,chapter] of Object.entries(units)){
      chapter.keywords=chapter.sections.map((section,index)=>({
        id:course+'/'+unit+'/section-'+index,course,unit,
        term:section.title,
        definition:bilingual(section.text).map(opening).join('|')
      }));
      for(const [index,model] of (chapter.models||[]).entries())chapter.keywords.push({
        id:course+'/'+unit+'/model-'+index,course,unit,term:model.name,
        definition:bilingual(model.how).map(opening).join('|')
      });
      entries.push(...chapter.keywords);
    }
  }
  window.CFA_KEYWORDS=entries;
})();

function solution(N) {
  let children = N.children()
  let count=[0,0,0]
   children.each((i,a) => {
    let achild = $(a).children();
    while(achild.length) {
       achild.each((idx,b) => {
         let bool = ['ul','ol'].indexOf(b.localName) !== -1;
         if (bool) count[i]++;
       });
   
       achild = achild.children();
    }
  });
  
  return count.reduce((a,b) => a > b ? a : b, 0)
}

solution($('body > ul,ol'))

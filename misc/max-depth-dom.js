function solution(N) {
  let children = N.children()
  let len = children.length;
  
  // construct counter
  let count = new Array(len)
  for(let i=0;i<len;i++) count[i] = 1
  
  // traverse children and count deep
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
  
  // find the max deep
  return count.reduce((a,b) => a > b ? a : b, 0)
}

solution($('body > ul,ol'))

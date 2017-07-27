function power(x,y){
  if(y===0){return 1}
  let newY = parseInt(y/2);
  return (y % 2 === 0 ? 1 : x) * power(x, newY) * power(x, newY);
}

'use strict';

function compute_median(collection) {
  //在这里写入代码
  let r=[];
  collection.map(cartItem=>{
    r.push(parseInt(cartItem))
  });
  let s=r.sort(sortNumber);
  if(s.length%2==0){
    return (s[s.length/2]+s[s.length/2-1])/2;
  }
  else {
    return s[parseInt(s.length/2)];
  }
}
function sortNumber(a,b) {
  return a-b;
}

module.exports = compute_median;



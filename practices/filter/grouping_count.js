'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let result=[];
  let count=0;
  let object={};
  collection.filter(cartItem=>{
    if(result.indexOf(cartItem)==-1){
      result.push(cartItem);
      for(let i of collection){
        if(i==cartItem){
          count++;
        }
      }
      object[cartItem]=count;
      count=0;
    }
  });
  return object;
}

module.exports = grouping_count;

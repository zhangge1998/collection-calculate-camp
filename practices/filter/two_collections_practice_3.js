'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result=[];
  collection_a.filter(a=>{
    collection_b.filter(b=>{
      if(a%b==0){
        result.push(a);
      }
    })
  });
  return result;
}

module.exports = choose_divisible_integer;

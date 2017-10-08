'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result=[];
  collection_a.filter(b=>{
    collection_b.filter(a=>{
      if(a==b){
        result.push(b);
      }
    })
  });
  return result;
  //在这里写入代码
}

module.exports = choose_common_elements;

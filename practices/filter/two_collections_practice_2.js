'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let result=[];
  collection_a.filter(a=>{
  if(collection_b.indexOf(a)==-1){
    result.push(a);
  }
  })
  return result;
}

module.exports = choose_no_common_elements;

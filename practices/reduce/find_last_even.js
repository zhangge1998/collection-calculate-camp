'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let result=collection.filter(a=>{
    if(a%2==0){
      return a;
    }
  });
  return result[result.length-1];
}

module.exports = find_last_even;

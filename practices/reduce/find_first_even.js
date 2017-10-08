'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let result=collection.filter(a=>{
    if(a%2==0){
      return a;
    }
  });
  return result[0];
}

module.exports = find_first_even;


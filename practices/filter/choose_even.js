'use strict';

function choose_even(collection) {
  let result=[];
  collection.filter(cartItem=>{
    if(cartItem%2==0){
      result.push(cartItem);
    }
  });
  return result;
  //在这里写入代码
}

module.exports = choose_even;

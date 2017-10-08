'use strict';

function choose_multiples_of_three(collection) {
  let result=[];
  collection.filter(cartItem=>{
    if(cartItem%3==0){
      result.push(cartItem);
    }
  });
  return result;
  //在这里写入代码
}

module.exports = choose_multiples_of_three;

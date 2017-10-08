'use strict';
var number_map_to_word_over_26 = function(collection){
  let result=[];
  collection.map(cartItem=>{
    let a=parseInt(cartItem/26);
    let b=cartItem%26;
    if(a!=0) {
      result.push(String.fromCharCode(a + 96, b + 96));
    }
    else{
      result.push(String.fromCharCode(b + 96));
    }
  });
  return result;
};

module.exports = number_map_to_word_over_26;

'use strict';
var number_map_to_word = function(collection){
  let result=[];
  collection.map(cartItem=>{
    result.push(String.fromCharCode(cartItem+96));
  });
  return result;
};

module.exports = number_map_to_word;

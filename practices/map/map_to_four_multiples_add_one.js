'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result=[];
  collection.map(cartItem=>{
    result.push(cartItem*4+1);
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;

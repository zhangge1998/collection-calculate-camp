'use strict';
function map_to_even(collection){
  let result=[];
  collection.map(cartItem=>{
    result.push(cartItem*2);
  }
  );
  return result;
}
module.exports = map_to_even;

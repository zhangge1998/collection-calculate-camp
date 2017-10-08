'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result=[];
  collection_b.filter(cartItemB=>{
    collection_a.filter(cartItemA=>{
      if(cartItemB==cartItemA)
        result.push(cartItemB);
    })
  });
  return result;
}

module.exports = get_intersection;

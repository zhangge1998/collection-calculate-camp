'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  collection_b.filter(cartItemB=>{
    let flag=0;
    collection_a.filter(cartItemA=>{
      if(cartItemB==cartItemA){
        flag=1;
      }
    });
    if(flag==0){
      collection_a.push(cartItemB);
    }
  });
  return collection_a;
}

module.exports = get_union;


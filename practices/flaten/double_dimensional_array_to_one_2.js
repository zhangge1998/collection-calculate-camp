'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let result=[];
  let array=collection.reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  array.filter(a=>{
    if(result.indexOf(a)==-1){
      result.push(a);
    }
  });
  return result;
}

module.exports = double_to_one;

'use strict';

function double_to_one(collection) {
  //在这里写入代码
 return collection.reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
}


module.exports = double_to_one;

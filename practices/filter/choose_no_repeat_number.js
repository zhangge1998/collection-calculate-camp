'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  collection.filter((n)=> {
    if (result.indexOf(n) == -1) {
      result.push(n);
    }
  });
  return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;

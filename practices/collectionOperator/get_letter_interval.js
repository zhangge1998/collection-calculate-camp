'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      result.push(String.fromCharCode(i+96));
    }
  }
  else if(number_a>number_b){
    for(let j=number_a;j>=number_b;j--){
      result.push(String.fromCharCode(j+96));
    }
  }
  else{
    result.push(String.fromCharCode(number_a+96));
  }
  return result;
}

module.exports = get_letter_interval;

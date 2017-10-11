function count_same_elements(collection) {
  //在这里写入代码
  let result=[];
  let r=[];
  let count=0;
  collection.filter(cartItem=>{
    if(r.indexOf(cartItem)==-1){
      r.push(cartItem);
      for(let i of collection){
        if(i==cartItem){
          count++;
        }
      }
      result.push({key:cartItem,count:count});
      count=0;
    }
  });
  return result;
}

module.exports = count_same_elements;

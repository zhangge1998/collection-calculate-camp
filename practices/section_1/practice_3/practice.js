function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result=[];
  for(let i of collection_a) {
    if (object_b.value.indexOf(i) != -1) {
      result.push(i);
    }
  }
  return result;
}

module.exports = collect_same_elements;

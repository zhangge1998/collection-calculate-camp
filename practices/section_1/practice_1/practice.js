function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result=[];
    for(let i of collection_a) {
      if (collection_b.indexOf(i) != -1) {
        result.push(i);
      }
    }
    return result;
}

module.exports = collect_same_elements;

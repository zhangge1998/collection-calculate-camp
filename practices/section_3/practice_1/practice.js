function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.map(a=> {
    if (isExit(a, object_b.value))
      a.count -= 1;
  });
  return collection_a;
}
function isExit(element, objectB) {
  for (let i of objectB) {
    if (element.key === i)
      return 1;
  }
}

module.exports = create_updated_collection;

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.map(a=> {
    isExit(a, object_b.value);
  });
  return collection_a;
}

function isExit(element, objectB) {
  for (let i of objectB) {
    if (element.key === i)
      element.count -= parseInt(element.count / 3);
  }
}

module.exports = create_updated_collection;

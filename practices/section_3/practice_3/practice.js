function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = getCountSameElements(collection_a);
  for (let  i of result) {
    isExit(i, object_b);
  }
  return result;
}

function getCountSameElements(collectionA) {
  let result = [];
  for (let i of collectionA) {
    finditemStatus(i, result);
  }
  return result;
}

function finditemStatus(item, result) {
  for (let j of result) {
    if (item.charAt(0) === j.key) {
      j.count += 1;
      return;
    }
  }
  result.push({key: item.charAt(0), count: 1});
}

function isExit(element, objectB) {
  for (let j of objectB.value)
    if (element.key === j)
      element.count -= parseInt(element.count / 3);
}

module.exports = create_updated_collection;

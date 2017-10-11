function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arrayResult = countSameElements(collection_a);
  for (let i of arrayResult) {
    isExit(i, object_b);
  }
  return arrayResult;
}

function countSameElements(collection_a) {
  var result = [];
  for (let i of collection_a) {
    findItemStatus(i, result);
  }
  return result;
}

function findItemStatus(item, result) {
  for (let j of result) {
    if (item.charAt(0) === j.key) {
      j.count += elementCount(item);
      return;
    }
  }
  result.push({key: item.charAt(0), count: elementCount(item)});
}

function elementCount(item) {
  if (item.length === 1)
    return 1;
  else
    return parseInt(item.charAt(2));
}

function isExit(element, object_b) {
  for (let j of object_b.value)
    if (element.key === j)
      element.count -= parseInt(element.count / 3);
}

module.exports = create_updated_collection;

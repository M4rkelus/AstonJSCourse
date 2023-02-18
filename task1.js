const deepCopyObject = (obj) => {
  let newObj = {};
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      newObj[i] = deepCopyObject(obj[i]);
      continue;
    }
    newObj[i] = obj[i];
  }
  return newObj;
};

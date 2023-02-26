const deepCopyObject = (obj) => {
  if (Array.isArray(obj)) {
    const copy = [];
    for (let [index, value] of obj.entries()) {
      copy[index] = deepCopyObject(value);
    }
    return copy;
  }

  if (typeof obj === 'object' && obj !== null) {
    const copy = {};
    for (let [key, value] of Object.entries(obj)) {
      copy[key] = deepCopyObject(value);
    }
    return copy;
  }

  return obj;
};

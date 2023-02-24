Array.prototype.filterArray = function (callback, thisArg) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const ERROR_MESSAGE = `
  В функцию deleteElementFromArray был передан невалидный параметр. 
  Аргумент arr должен быть массивом.
`;

const deleteElementFromArray = (arr, elem) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error(ERROR_MESSAGE);
    }
    if (arr.includes(elem)) {
      return arr.filter((value) => value !== elem);
    }

    return arr;
  } catch (error) {
    return error.message;
  }
};

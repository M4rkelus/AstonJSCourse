const ERROR_MESSAGE = `
  В getUniqArray был передан невалидный параметр. 
  Аргумент arr должен быть массивом чисел.
`;

const getUniqArray = (arr) => {
  try {
    if (arr.some((num) => !Number.isFinite(num))) {
      throw new Error(ERROR_MESSAGE);
    }

    return Array.from(new Set(arr));
  } catch (error) {
    return error.message;
  }
};

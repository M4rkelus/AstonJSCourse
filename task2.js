const ERROR_MESSAGES = {
  ARRAY: `Аргумент arr должен быть массивом.`,
  INDEX: `Индекс не может быть отрицательным числом или дробным числом.`,
};

const addElementsToArray =
  (arr, index) =>
  (elem1, elem2, ...elemN) => {
    try {
      if (!Array.isArray(arr)) {
        throw new Error(ERROR_MESSAGES.ARRAY);
      }
      if (index) {
        if (index < 0 || index % 1 !== 0) {
          throw new Error(ERROR_MESSAGES.INDEX);
        }
        return [
          ...arr.slice(0, index),
          elem1,
          elem2,
          ...elemN,
          ...arr.slice(index),
        ];
      }

      return [...arr, elem1, elem2, ...elemN];
    } catch (error) {
      return error.message;
    }
  };

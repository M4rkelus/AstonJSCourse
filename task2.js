const ERROR_MESSAGE = {
  ARRAY: `
    В функцию getInterval были переданы невалидные параметры. 
    Параметр arr должен содержать только числовые значения.
  `,
  FROM: `
    В функцию getInterval были переданы невалидные параметры. 
    Параметр from должен быть числом.
  `,
  TO: `
    В функцию getInterval были переданы невалидные параметры. 
    Параметр to должен быть числом.
  `,
};

const getInterval = (arr, from, to) => {
  try {
    if (arr.some((num) => !Number.isFinite(num))) {
      throw new Error(ERROR_MESSAGE.ARRAY);
    }
    if (!Number.isFinite(from)) {
      throw new Error(ERROR_MESSAGE.FROM);
    }
    if (!Number.isFinite(to)) {
      throw new Error(ERROR_MESSAGE.TO);
    }

    return arr.filter((number) =>
      from <= to
        ? number >= from && number <= to
        : number <= from && number >= to
    );
  } catch (error) {
    return error.message;
  }
};

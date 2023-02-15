export const getNumberRadix = (number, radix) => {
  try {
    if (isNaN(number) || number < 0 || isNaN(radix) || radix < 2 || radix > 16) {
      throw new Error('Функция getNumberRadix была вызвана c некорректными параметрами.');
    }
    if (typeof number === 'string') {
      number = parseInt(number, 10);
    }

    return number.toString(radix);
  } catch (error) {
    return error.message;
  }
}

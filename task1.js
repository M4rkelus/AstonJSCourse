// Задача 1
const sum = (a, b) => {
  let result = +a + +b;
  return Number(result.toFixed(3));
}

// Примеры
console.log(sum(1, 2)); // 3
console.log(sum(0.6, 0.7)); // 1.3
console.log(sum(0.1, 0.2)); // 0.3
console.log(sum('2', 5)); // 7
console.log(sum(2, '5.6')); // 7.6

// Задача 2
const getNumberRadix = (number, radix) => {
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

// Примеры
console.log(getNumberRadix(4, 2)); // "100"
console.log(getNumberRadix("16", 8)); // "20"
console.log(getNumberRadix("Hello", 4)); // ошибка
console.log(getNumberRadix(10, 32)); // ошибка
console.log(getNumberRadix(10, "JS")); // ошибка

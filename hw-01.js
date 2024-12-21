// ЗАДАНИЕ №1
// Объявляем переменную
const input = prompt("Введите значение");

let number = +input;
// Проверяем на чет нечет и NaN
if (typeof number === "number" && !Number.isNaN(number)) {
  if (number % 2 === 0) {
    // Деление на 2 при остатке 0 четное
    console.log(number + " - чётное число");
  } else {
    // Деление на 2 при остатке 1 нечетное
    console.log(number + " - нечётное число");
  }
} else {
  console.log("Вы ошиблись");
}

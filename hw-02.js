// ЗАДАНИЕ №2
// Объявляем переменную Х
let x;
//  Определяем тип данных
switch (typeof x) {
  case "number":
    console.log("x — число"); // если тип данных число
    break;
  case "string":
    console.log("x — строка"); // если тип данных строка
    break;
  case "boolean":
    console.log("x — логическое значение"); // если тип данных логическое значение
    break;
  // Если Х не определен
  default:
    console.log("Тип x не определён"); // если тип данных не определен
    break;
}

// ЗАДАНИЕ №8
// Создание новой Map
let myMap = new Map();
// Добавяем в мап пару ключ-значение
myMap.set("Яблоко", "Зеленое");
myMap.set("Мандарин", "Оранжевый");
myMap.set("Вишня", "Красная");
// делаем цикл по ключам
for (let x of myMap.keys()) {
  console.log("Х: " + x); // Вывод ключей
}
// делаем цикл по значениям
for (let y of myMap.values()) {
  console.log("Y: " + y); // Вывод значений
}

// let mapKeys = Array.from(myMap.keys());
// let mapValues = Array.from(myMap.values());

// for (let i = 0; i < mapKeys.length; i++) {
//   console.log(`X — ${mapKeys[i]}, Y — ${mapValues[i]}`);
// }

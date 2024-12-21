// ЗАДАНИЕ №5
// Объявлен массив
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// foreach*
// arr.forEach((element) => {
//   console.log(element);
// });

// for*
// Производим перебор массива и выводим его в консоль
for (let i = 0; i < arr.length; i++) {
  // создаем конст которая принимает в себя массив каждого индекса
  const element = arr[i];
  //   выводим результат в консоль
  console.log(element);
}

//Задание 8
let myMap = new Map();
myMap.set(`Значение 1`, `Строка А`);
myMap.set(`Значение 2`, `Строка Б`);
myMap.set(`Значение 3`, `Строка В`);
for (let mean of myMap.keys()) {
  console.log(mean + ' в ' + myMap.get(mean));
}
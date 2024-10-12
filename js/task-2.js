// todo 
// У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
}
 let sum = 0;
//  const values = Object.values(salaries);
// for (const value of values) {
//     sum += value;
// }


for (const key in salaries){
  sum += salaries[key];
}





console.log(sum)












// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//         const values = [];
 
//     for (const product of products) {
//       if (product[propName]){
//         values.push(product[propName]);
//       }
//     }
// return values;
// }


// console.log(getAllPropValues("name")) // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")) //[4, 3, 7, 9]
// console.log(getAllPropValues("price")) // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")) //[]
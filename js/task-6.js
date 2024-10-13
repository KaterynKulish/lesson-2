// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]

function foo(arr) {          
    const str = arr.join("");//переводимо в рядок
    const a = str[0];//перший символ для видалення
    const b = str[1];//другий символ для видалення
    let res = str.replaceAll(a, "");//видалення першого символа    
    res = res.replaceAll(b, "");//видалення другого символа     
    const resArr = res.split("");//переодимо в масив
    for (let i = 0; i < resArr.length; i++) {
        resArr[i] = +(resArr[i]);//переводимо всі елементи масиву в Number
    }
    return resArr;    
}
console.log(foo([1, 2, 3, 1, 2])); 
console.log(foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 5, 6, 8, 4, 3, 2, 5, 6, 4, 8, 9, 7, 5])); 

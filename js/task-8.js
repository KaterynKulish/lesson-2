// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [ 11, 9, 2, 1 ]

function newReverse(arg) {
    const arr = [...arg]; 
    const res = [];
    for (let i = arr.length-1; i >=0; i--){
        res.push(arr[i]);
    }    
    return res;
}

console.log(newReverse([11, 9, 2, 1]));
// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false

function compareArray(a, b) {
    const arr1 = [...a];
    const arr2 = [...b];    
    if (arr1.length!==arr2.length) return false
    for (let i = 0; i < arr1.length; i++){
        if (!(arr1[i] === arr2[i])) {
            return false;
        }     
    }
    return true;
}

console.log(compareArray([1, 2, 3], [1, 2, 3]));
console.log(compareArray([4, 5, 5], [1, 2, 3]));
console.log(compareArray([4, 5, 5, 6, 7], [1, 2, 3]));

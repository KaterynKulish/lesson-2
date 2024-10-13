// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

function foo(arg) {
    const arr = [...arg];
    const res = [];  
    
    for (const item1 of arr) {        
        if (!item1.length) { res.push(item1) };     
        if (item1.length >= 1) {
            for (const item2 of item1) {                
                if (!item2.length) { res.push(item2) };
                if (item2.length >= 1) {
                    res.push(...item2);
                }
            }
        }        
    }
    return res;    
}

console.log(foo([1, 2, [3, 4, [5]]]));
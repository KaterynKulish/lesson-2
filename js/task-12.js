// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]

function foo(arg) {
    const arr = [...arg];    
    const res = [];
    for (const item of arr) {
        if (!res.includes(item)) {
            res.push(item);
        }    
    }    
    return res
}

console.log(foo(["a",1, 2, "b",3, 1, 2,"a"]));

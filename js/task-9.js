// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function clear(arg) {
    const arr = [...arg];
    const res = [];    
    for (const item of arr) {    
        if (typeof item === "number"&&item) {
            res.push(item);
        }
    }
    return res
}

console.log(clear([0, 1, false, 2, undefined, '', 3, null]));

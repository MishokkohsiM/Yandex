
function mult(a, b) {
    return a * b;
}

function overloadedFunc(a = [1, 2, 3], b = 2, c = mult) {
    if (Array.isArray(a)) {
        return a.map(el => {
            //console.log(c(el, b)) // Всё работает
            return c(el, b) // Почему?? Я не могу понять, почему NAN или undefined ?
        })
    }

    return c(a, b);
}

console.log(overloadedFunc(5))

console.log(mult([111,11], 2))

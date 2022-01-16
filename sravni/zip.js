/*
    Реализовать функцию rle-сжатия строк. Лимит времени – 10 минут.
 */
function compressString(str) {
    if (!str.length) {
        return '';
    }

    let result = str[0];
    let current = str[0];
    let count = 0;

    [...str].forEach(value => {
        if ( value === current) {
            count += 1;
        } else {
            result += count + value;
            current = value;
            count = 1;
        }
    })

    return (count > 1 ? result + count : result )
}

// console.log(compressString('aaabbccdeeefaa')); // 'a3b2c2de3fa2'
// console.log(compressString('aaabbccdeeef')); // 'a3b2c2de3f'
// console.log(compressString('aaaaa')); // 'a5'
// console.log(compressString('b')); // 'b'
// console.log(compressString('')); // ''

console.log(1)
setTimeout(() => console.log(2), 0)
console.log(3)
setTimeout(() => console.log(4), 1000)
Promise.resolve(5).then(console.log.bind(console))
console.log(6)
setImmediate(() => console.log(7))

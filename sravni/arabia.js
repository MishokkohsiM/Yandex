/*
    Реализуйте и экспортируйте функцию, которая переводит число в
    римской записи в число, записанное арабскими цифрами. Если
    переданное римское число не корректно, то функция должна
    вернуть значение false.
 */

/*
I - 1
V - 5
X - 10
L - 50
C - 100
D - 500
M - 1000
*/

const Arabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function toArabic(arabic) {
    let ans = 0, cur = 0, prev = 0, j = arabic.length - 1;

    [...arabic].reverse().forEach(value => {
        cur = Arabic[value]
        cur < prev ? ans -= cur : ans += cur
        prev = cur
    });

    return ans;
}


console.log(toArabic('I')); // 1
console.log(toArabic('LIX')); // 59
console.log(toArabic('MMM')); // 3000
console.log(toArabic('IIII')); // false
console.log(toArabic('VX')); // false

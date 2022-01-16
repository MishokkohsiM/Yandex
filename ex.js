const A = {name: 'Ivan'}
const B = {name: 'Ivan'};

const C = A;
C.secondName = 'Petrov';

console.log( '01' == 1 )
console.log(A == B)
console.log(A === B)
console.log(A === C)
console.log(A.secondName)


let i;
for (i = 0; i < 3; i++) {
    const log = (x) => {
        console.log(x);
    }
    setTimeout(log,100, i);
}


const getNumbers = (array) => {
    return array.join(' ');
};

const input = [1, 2, '11a', [12, null, '33', []], 0, '0'];

console.log(getNumbers(input));

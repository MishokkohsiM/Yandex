// 2)Нужно написать функцию, которая определяет, является ли переданная строка палиндромом.
//     Казак
// А роза упала на лапу Азора
// Do geese see God?
// Madam, I’m Adam


const str = 'Do geese see God';


const func = (str) => {
  if (!str.length || str.length === 1) {
    return true;
  }
  const newStr = str.split(' ').join('').toLowerCase();
  console.log(newStr);
  const left = newStr.slice(0, newStr.length / 2 );
  const right = newStr.slice(newStr.length/2 + newStr.length % 2, newStr.length).split('').reverse().join('');
  return left === right;
};

console.log(func(str));

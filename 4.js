// [ aaa b aa]

const arr = 'aaa';

const func = (arr) => {
  if (!arr.length) {
    return '';
  }
  let result = '';
  let counter = 1;
  let currentSymbol = arr[0];
  arr.slice(1).split('').forEach(symbol => {
    if (currentSymbol === symbol) {
      counter++
    } else {
      if (counter === 1) {
        result += `${currentSymbol}`;
      } else {
        result += `${counter}${currentSymbol}`
      }
      counter = 1;
      currentSymbol = symbol;
    }
  });
  if (counter === 1) {
    result += `${currentSymbol}`;
  } else {
    result += `${counter}${currentSymbol}`
  }
  return result;
};

console.log(func(arr));

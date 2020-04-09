const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 4, 5, 6, 7, 8];

const func = (arr, arr2) => {
  const array = {};
  const array2 = {};
  arr.forEach(value => {
    array[value] = true;
  });
  let result = [];
  arr2.forEach(value => {
    if (!array[value]) {
      result.push(value)
    }
    array2[value] = true;
  });
  arr.forEach(value => {
    if(!array2[value]){
      result.push(value);
    }
  });
  return result;
};

console.log(func(arr, arr2));

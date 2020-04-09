// 1) [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
//     [1,4,3,2] => "1-4"
//     [1,4] => "1,4"


const arr = [1,4];

const func = (arr) => {
  if (!arr.length) {
    return '';
  }
  arr.sort(function (a,b) {
     return a > b;
  });
  console.log(arr);

  let result = [];
  let start = arr[0];
  let end = arr[0];
  arr.slice(1).forEach(value => {
    if(end + 1 === value){
      end = value;
    } else {
      if (start === end) {
        result.push(`${start}`)
      } else {
        result.push(`${start}-${end}`)
      }
      start = value;
      end = value;
    }
  });
  if (start === end) {
    result.push(`${start}`)
  } else {
    result.push(`${start}-${end}`)
  }
  return result;
};

console.log(func(arr));

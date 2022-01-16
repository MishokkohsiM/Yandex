// Дан массив точек с целочисленными координатами (x, y).
// Определить, существует ли вертикальная прямая, делящая
// точки на 2 симметричных относительно этой прямой множества.


const arr = [[1, 1], [1, -1], [-1, -1], [-1, 1]];

const f = (arr) => {
  let min = arr[0][0];
  let max = min;
  const obj = {};
  arr.forEach(value => {
    if (obj[value[1]]) {
      obj[value[1]].push([value[0]]);
    } else {
      obj[value[1]] = [value[0]];
    }
    if (min > value[0]) {
      min = value[0];
    }
    if (max < value[0]) {
      max = value[0];
    }
  });
  const half = (max + min) / 2;
  let flag = true;
  console.log(half);
  Object.values(obj).forEach(y => {
    let sum = 0;
    y.forEach(x => {
      if (x > half) {
        sum -= x - half;
      } else {
        sum += half - x;
      }
    });
    if (sum !== 0) {
      flag = false;
    }
  });
  return flag;
};


console.log(f(arr));

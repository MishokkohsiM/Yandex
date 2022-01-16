/*
[1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
[1,4,3,2] => "1-4"
[1,4] => "1,4"
*/


// [1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }];

const a = [1, [2, 3, [4], ['a'], 7], 5, 6];

const f = (array) => {
  if (!array.length) {
    return array;
  }
  const result = [];
  array.forEach(value => {
    if (Array.isArray(value)) {
      result.push(...f(value));
    } else {
      result.push(value);
    }
  });
  return result;
};

const f2 = (array) => {
  if (!array.length) {
    return array;
  }
  const result = [];
  let i = 0;
  let points = [];
  let current = array;
  while (current[i] || points.length !== 0) {
    if (!current[i]) {
      const point = points.pop();
      current = point.current;
      i = point.i;
      continue;
    }
    if (Array.isArray(current[i])) {
      points.push({
        current: current,
        i: i + 1,
      });
      current = current[i];
      i = 0;
    } else {
      result.push(current[i]);
      i++;
    }
  }
  return result;
};

console.log(f2(a));


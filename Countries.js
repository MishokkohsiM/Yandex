//
//


const arr = [{from: 'Moscow', to: 'Tbilisi'}, {from: 'NY', to: 'Moscow'}, {from: 'Tbilisi', to: 'Paris'}, {
  from: 'Kiev',
  to: "NY"
}];


const f = (arr) => {
  const counties = {};
  const fromTO = {};
  arr.forEach(value => {
    counties[value.to] = true;
    fromTO[value.from] = value.to;
  });
  let start;
  arr.forEach(value => {
    if (!counties[value.from]) {
      start = value.from;
    }
  });
  const result = [start];
  while (fromTO[start]) {
    result.push(fromTO[start]);
    start = fromTO[start];
  }
  return result;
};

console.log(f(arr));

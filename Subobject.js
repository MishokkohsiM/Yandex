const obj = {
  a : {
    b : {
      c : 'example',
    },
  },
};

const way = 'a.d.c';

const func = (obj, way) => {
  const newWay = way.split('.');
  let i = 0;
  let currentObjWay = obj;
  while (newWay[i]){
    if(currentObjWay[newWay[i]]){
      currentObjWay = currentObjWay[newWay[i]];
    } else {
      return undefined;
    }
    i++;
  }
  return currentObjWay
};


console.log(func(obj, way));

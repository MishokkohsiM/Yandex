const obj = {
  Opera: {
    a: 1,
    b: 2
  },
  ES11: {
    a: 123,
    b: 2131,
  },
  chrome: {
    a: 0,
    b: 123,
  }
};


const f = (br) => {
  let result = [];
  Object.keys(br).reduce(browser => {
    if (br[browser].a > 0) {
      return browser
    }
  });
  return result;
};

console.log(f(obj));

Array.prototype.reduce = function (handler, start) {
  console.log('ee');
  if (!this.length) {
    return undefined
  }
  let result = start;
  if (typeof start === 'undefined') {
    result = this[0];
    this.slice(1).forEach(value => {
      result = handler(value, result);
    });
  } else {
    this.forEach(value => {
      result = handler(value, result);
    });
  }
  return result;
};

const  arr = [1,2,3];

console.log(arr.reduce((a,b)=>{
  return a + b;
},4));

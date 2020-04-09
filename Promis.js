// const a = 2;
//
// const promise = new Promise((resolve, reject) => {
//   if (a === 0) {
//     reject('error');
//   }
//   resolve(a);
// });
//
// promise
//     .then(result => {
//       console.log(result);
//       return result;
//     })
//     .catch(result => {
//       throw 'err';
//     })
//     .catch(result => {
//       console.log(result);
//     });

const lol = (context) => {
  console.log(context);
};
const fetch  = require('node-fetch');

const func = (url, limit, f) => {
  let counter = 0;
  const handler = () => {
    counter++;
    if (counter >= limit) {
      f('error');
      return;
    }
    fetch(url)
        .then((result) => {
          if (result.status === 429) {
            f(result);
            return result;
          } else {
            throw 'err';
          }
        })
        .catch((result) => {
          if (result === 'err'){
            counter = limit + 1;
          } else {
            handler();
          }
        });
  };
  handler();
};


func('https://google.com', 10, lol);

// const bbb = 1;
//
// function f2(d) {
//
// }
//
// function makeBuf() {
// // Замыкание
//   let buf = '';
//   return function (b) {
//     buf += b;
//     console.log(buf);
//   }
// }
//
// // const a = makeBuf();
// // a('lol');
// // a('kek');
//
// function counter() {
//   let buf = 0;
//   return function (value = 1) {
//     buf += value;
//     return buf;
//   }
// }
//
// // const b = counter();
// // b();
// // b(2);
// // console.log(b());
//
// const obj = {
//   name: "Mishok",
//   getName: function () {
//     console.log(this.name)
//   }
// };
//
//
// obj.getName();
// const a = obj.getName.bind({
//   name: 'CEC',
// });
//
// a();


user = {
  name: 'Mishok',
  age: '231',
};
//
// function logName() {
//   console.log([].join.call(arguments,':'));
// }
//
// logName(1,2,3,4);
//
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });
//
// promise.then(result => {
//   console.log(result);
// }).catch(result => {
//   console.log(result);
// });
//
// console.log('0');
// const promise = new Promise((resolve, reject) => {
//   if(user.age > 20) {
//     resolve('ok');
//   } else {
//     reject('No');
//   }
// });
// promise
//     .then(result =>{
//       console.log(result)
//     })
//     .catch(result => setTimeout(()=> {console.log(result)},0));
// setTimeout( () => {
//   console.log('1')
// },0);
// console.log(2);


const array = [1, 20, 10, 9];

array.sort((a, b) => a - b);
console.log(array);

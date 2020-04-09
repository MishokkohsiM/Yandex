function f(name, value) {
  // arguments - объект
  console.log(arguments);
  console.log(arguments.length)
}


const a = 'AAAA';
function f1() {
  var b = 2;
  return function () {
    b += 1;
  }
}
const s = f1();


const obj = {
  name: "Mishok",
  age : 23
};

const obj2 = obj;

obj2.name = 'CEC';

console.log(obj)

const myBind = (func, context) => {
  // context.func =  func;
  // context.func();
  const obj = {
    ...context,
    func : func,
  };
  obj.func()
};

function f2() {
  console.log(this.name)
}

myBind(f2,{name:'Lol'});
const v = f2.bind({name: 'l'});
v()

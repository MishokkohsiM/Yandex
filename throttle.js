/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

var f = function (a) {
  console.log(a)
};

// когда пройдёт 1000 мс...
// выведет 3 call, промежуточное значение 2 call игнорируется


function throttle(fn, delay) {

  let lastTime, id;
  return function (...params) {
    const now = Date.now();
    if (!lastTime || now - lastTime >= delay) {
      lastTime = now;
      fn(...params);
    } else {
      // clearTimeout(id);
      id = setTimeout(() => {
        lastTime = Date.now();
        fn(...params);
      }, delay - (now - lastTime))
    }
  }

}
// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
var f2000 = throttle(f, 2000);
f2000(1);

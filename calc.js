/*Написать калькулятор выражений в обратной польской нотации.
    Польская нотация
Выражение состоит из операндов: чисел и знаков операций + - * /
Выражение читается слева направо
Операнды в выражении разделяются пробелами
Когда в выражении встречается знак операции, выполняется соответствующая операция над двумя последними встретившимися перед ним операндами в порядке их записи
Результатом вычисления выражения становится результат последней вычисленной операции
Примеры:
    calc('7 2 * 3 +')        => 7 * 2 + 3 = 17
calc('7 2 3 * -')        => 7 - (2 * 3) = 1
calc('7 2 3 1 + * -')        => 7 - 2 * (3 + 1) = -1

calc('11 -12 -')        => ?
    calc('7 2 3 1 * - - 3 5 + -')    => ?

    calc('1 1 + +')            => Error in Syntax
calc('1 2 2 *')            => Error in Syntax
calc('1 b + c -')        => Error in Operands*/

const arr = ('1 1 + +');

const calc = (arr) => {
  const newArr = arr.split(' ');
  // console.log(newArr);
  const result = [];
  let i = 0;
  while (newArr[i]) {
    switch (newArr[i]) {
      case '+' : {
        if(result.length < 2){
          return 'Error in Syntax'
        }
        let x = result.pop();
        let y = result.pop();
        const r = +x + +y;
        result.push(r);
        break;
      }
      case '-' : {
        if(result.length < 2){
          return 'Error in Syntax'
        }
        let x = result.pop();
        let y = result.pop();
        const r = +y - +x;
        result.push(r);
        break;
      }
      case  '*': {
        if(result.length < 2){
          return 'Error in Syntax'
        }
        let x = result.pop();
        let y = result.pop();
        const r = x * y;
        result.push(r);
        break;
      }
      default : {
        if(isNaN(+newArr[i])){
          return 'Error in Operands'
        }
        result.push(newArr[i]);
      }
    }
    i++;
  }
  if(result.length !==  1){
    return 'Error in Syntax';
  }
  return result.pop();
};

console.log(calc(arr));

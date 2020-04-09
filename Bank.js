/*
Требуется выдать запрошенную сумму купюрами в рублях начиная от более крупных к более мелким.
Купюры существуют 50 руб, 100 руб, 500 руб, 1000 руб, 5000 руб.
При этом число купюр ограничено, на вход даётся объект с количеством купюр.
Этот объект нужно менять, чтобы количество купюр всегда было в актуальном состоянии.
Если выдать заданную сумму нельзя — вывести сообщение об ошибке.
*/

const Bank = {
  '5000': 1,
  '1000': 1,
  '500': 1,
  '100': 0,
  '50': 0,
};

const giveMoney = (money) => {
  const banknote = [5000, 1000, 500, 100, 50];
  let remnant = money;
  let i = 0;
  const result = {};
  while (remnant !== 0) {
    if (!banknote[i]) {
      return false;
    }
    if (Bank[banknote[i]] !== 0) {
      remnant -= banknote[i];
      if (remnant < 0) {
        remnant += banknote[[i]];
        i++;
      } else {
        if (result[banknote[i]]) {
          result[banknote[i]]++;
        } else {
          result[banknote[i]] = 1;
        }
        Bank[banknote[i]]--;
      }
    } else {
      i++;
    }
  }
  return result;
};

console.log(giveMoney(600));
// console.log(giveMoney(10750));

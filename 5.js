// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...
const allSentences = (arrays) => {
  const lengthArrays = arrays.length;
  const index = arrays.map(() => 0);
  let flag = false;
  return function func() {
    if(flag) {
      return undefined
    }
    let result = '';
    arrays.forEach((value, i) => {
      result += `${value[index[i]]} `
    });
    let done = false;
    let current = arrays.length - 1;
    while (!done && current > -1) {
      if (index[current] !== arrays[current].length - 1) {
        index[current]++;
        done = true;
      } else {
        index[current] = 0;
        current--;
      }
    }
    if (current === -1) {
      flag = true;
    }
    return result;
  }
};

const nextSentence = allSentences([
  ['внучка', 'внучок'],
  ['маша', 'махать', 'машу'],
  // ['Lol', 'kek', 'asdas']
  // ... тут могут быть другие слова с любым количеством своих форм
]);

console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка махать'
// ... и т. д. все комбинации
nextSentence(); // undefined
/*
Дан список слов. Каждое слово представлено массивом возможных вариантов нормализации.
Написать функцию, которая принимает список слов и возвращает функцию, которая при каждом вызове возвращает
строку - одно из возможных сочетаний вариантов слова в предложении. Пока не вернёт все возможные варианты.
Нужна реализация без итераторов.
*/



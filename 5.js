// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...
const allSentences = (arrays) => {
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
  ['1', '2']
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

const array = {
  A: ['рубли', 'доллары'],
  V: ['100', '200', '300'],
  C: ['1', '2'],
}

const makeArray = (data) => {
  const initial = [data]

  let i = 0
  const len = Object.keys(data).reduce((acc, key) => {
    if (Array.isArray(data[key])) {
      acc *= data[key].length
    }

    return acc
  }, 1)

  while (i < len) {
    const currentObject = initial[0]

    const keys = Object.keys(currentObject)
    for (let j = 0; j < keys.length; j++) {
      if (Array.isArray(currentObject[keys[j]])) {
        initial.shift()
        initial.push(...currentObject[keys[j]].map(value => ({ ...currentObject, [keys[j]]: value })))
        break
      }
    }

    i++
  }

  return initial
}

console.log(makeArray(array))

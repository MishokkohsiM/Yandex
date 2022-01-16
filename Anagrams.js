// Дан массив строк, нужно сгруппировать в нем анаграммы. Важно, что это нужно сделать максимально эффективно по памяти и времени.
// Слово X является анаграммой слова Y, если одно может быть получено из другого перестановкой букв.

//split - разбивает строку по символу.
//join

const arr = [
  'АААВВ',
  'ААВВВ',
  'ААААА',
  'ААААА',
  'БОДРЯЧОК',
  'ДОБРЯЧОК',
  'КАНИСТРА',
  'СТАРИКАН',
  'СТАРИНКА',
  'ВСЕПРОЩЕНИЕ',
  'ПРОСВЕЩЕНИЕ',
  'javascript',
  'java'
];


const anagram = (array) => {
  if (!array.length) {
    return [];
  }
  let result = {};
  array.forEach(value => {
    const key = value.toLowerCase().split('').sort().join('');
    if (!result[key]) {
      result[key] = [value];
    } else {
      result[key].push(value);
    }
  });
  return Object.values(result);
};

console.log(anagram(arr));

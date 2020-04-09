// Дан массив строк, нужно сгруппировать в нем анаграммы. Важно, что это нужно сделать максимально эффективно по памяти и времени.
// Слово X является анаграммой слова Y, если одно может быть получено из другого перестановкой букв.

//split - разбивает строку по символу.
//join

const arr = ['кот', 'ток', 'aaaassq', 'asaaasq', 'mme', 'emm'];


const anagram = (arr) => {
  if (!arr.length) {
    return {};
  }
  let result = {};
  arr.forEach(value => {
    const key = value.toLowerCase().split('').sort();
    if (!result[key]) {
      result[key] = [value];
    } else {
      result[key].push(value);
    }
  });
  return result;
};

console.log(anagram(arr));

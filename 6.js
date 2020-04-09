const arr = [1, 2, 10, 2, 4, 2, 4];


function QuickSort(A) {
  if (A.length == 0) return [];
  var a = [], b = [], p = A[0];
  for (var i = 1; i < A.length; i++) {
    if (A[i] < p) a[a.length] = A[i];
    else b[b.length] = A[i];
  }
  return QuickSort(a).concat(p, QuickSort(b));
}


console.log(QuickSort(arr));

// setInterval(() => {
//   console.log(1);
// }, 1000);


const obj = {
  a: {

  },
  b: 2,
  c: 3,
};

// передаю объект получаю
Object.values(obj).forEach(value => {
  console.log(value);
});

// join - из массива строку. передаешь разделитель
// split - из строки в массив . Передаем разделитель.
// concat - метод массива. объединяет массивы a.concat(b)
// shift - удаляет 1 элемент. и возвращает
// unshift - добавляет на первую позицию
// ... - подсталяет все элементы из массива или объекты (все поля со значенияи)

const f = (...params) =>{
  console.log(...params);
};

f('asd', 'asda');


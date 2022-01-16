/*
Флаги и дескрипторы свойств

Флаги свойств
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
 */
/*
Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
 */

const obj = {
    user: 'Misha',
    age: 24,
}

const Descriptor = Object.getOwnPropertyDescriptor(obj, 'user')
console.log(Descriptor)

/*
Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
 */

Object.defineProperty(obj, 'user', {...Descriptor, writable: false})


/*
Метод Object.defineProperties
Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
 */

const user = {}

Object.defineProperties(user, {
    name: { value: "John", writable: false, enumerable: true },
    surname: { value: "Smith", writable: false },
});

console.log(user)

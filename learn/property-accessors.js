/*
Первый тип это свойства-данные (data properties). Мы уже знаем, как работать с ними.
Все свойства, которые мы использовали до текущего момента, были свойствами-данными.

Второй тип свойств мы ещё не рассматривали. Это свойства-аксессоры (accessor properties).
По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

Геттеры и сеттеры
Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи.
При литеральном объявлении объекта они обозначаются get и set:
 */


let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.fullName)
// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

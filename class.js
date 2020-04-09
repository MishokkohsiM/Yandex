class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Admin {
  constructor(name,age, rang ){
    this.rang = rang;
    this.name = name;
    this.age = age;
  }

  getRang () {
    return this.rang;
  }
}

const user = new User('Cec','10');

const admin = new Admin('Mishok', '10', '10');
admin.__proto__ = user;
console.log( admin instanceof User);

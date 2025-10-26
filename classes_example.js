// Step 1: What Is a Class?
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const user = new Person("Amin", 25);
user.greet();


// Step 2: Inheritance (Extending a Class)

class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  code() {
    console.log(`${this.name} codes in ${this.language}.`);
  }
}

const dev = new Developer("Amin", 25, "TypeScript");
dev.greet();
dev.code();


// Step 3: Getters & Setters

class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return `$${this._balance}`;
  }

  set balance(value) {
    if (value < 0) throw new Error("Invalid balance");
    this._balance = value;
  }
}

const acc = new Account(100);
console.log(acc.balance);
acc.balance = 200;
console.log(acc.balance)

// Step 4: Static Methods
// Used without creating an object.

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10));

// Step 5: Modules (import/export)

export class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

import { Person } from './person.js';
const p = new Person("Amin");
p.greet();

// Step 6: Why Important in Angular

export class UserService {
  getUser() {
    return { name: 'Amin' };
  }
}

import { UserService } from './user.service';
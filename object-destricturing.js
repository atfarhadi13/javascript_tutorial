// const user = { name: "Amin", age: 25, city: "Toronto" };

// old way
// const name = user.name;
// const age = user.age;

// new way
// const { name, age } = user;
// console.log(name, age); // Amin 25

// const { name: fullName, city } = user;
// console.log(fullName, city);

// const colors = ["red", "green", "blue"];
// const [first, second] = colors;
// console.log(first, second);

// const [, , third] = colors;
// console.log(third);


// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// const user = { name: "Amin", age: 25 };
// const extra = { city: "Toronto" };
// const fullUser = { ...user, ...extra };
// console.log(fullUser); 


// const [first, ...rest] = [10, 20, 30, 40];
// console.log(first); // 10
// console.log(rest);

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4));

this.user = { ...this.user, updatedAt: new Date() };

const { data, status } = await this.http.get('/users');

function logAll(...args) {
  console.log(args);
}
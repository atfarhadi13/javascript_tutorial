// const doubled = [];
// for (let i = 0; i < nums.length; i++) {
//   doubled.push(nums[i] * 2);
// }

// const nums = [1, 2, 3, 4, 5];

// const doubled = nums.map(n => n * 2)

// console.log(doubled)

// const prices = [10, 20, 30]

// const withTax = prices.map(p => p * 1.2)

// console.log(withTax)

// const scores = [90, 45, 80, 30];
// const passed = scores.filter(s => s >= 50);
// console.log(passed);

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// const users = [
//   { name: "Amin", age: 24 },
//   { name: "Sara", age: 30 },
// ];
// const user = users.find(u => u.name === "Amin");
// console.log(user);

// const fruits = ["apple", "banana", "mango"];
// fruits.forEach(f => console.log(f.toUpperCase()));

const products = [
  { name: "TV", price: 500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
];

const expensiveNames = products
  .filter(p => p.price > 400)
  .map(p => p.name);

console.log(expensiveNames); 
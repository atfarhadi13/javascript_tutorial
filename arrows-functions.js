// const add = (a, b) => a + b;


// result = add(4,6)

// console.log(result)


// result = (x) => x * 2

// console.log(result(4))

// result = (x, y) => x + y

// console.log(result(3,5))


// result = (x, y) => {return x * y; }

// console.log(result(10, 20))

// result = () => console.log('Hi!')

// result()


// Arrow functions do not have their own this
// const user = {
//   name: "Amin",
//   greet: function() {
//     setTimeout(() => {
//       console.log(`Hello, ${this.name}`);
//     }, 1000);
//   }
// };
// user.greet();


// Inside RxJS Observables
//this.http.get(url).subscribe(data => console.log(data));

// Inside Array methods:
//this.users.map(user => user.name);


// In callbacks for events or async tasks:
// button.addEventListener('click', () => this.onClick());

// Convert
function square(x) {
    return x * x
}

// Make
const greet = name => console.log(`Hello ${name}`)

greet("Amin")

const nums = [1, 2, 3, 4, 5]
const doubled = nums.map(n => n * 2)
console.log(doubled)
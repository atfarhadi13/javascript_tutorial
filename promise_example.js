// A Promise represents a value that will be available later (success or failure).

// const fetchData = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("✅ Data received!");
//   } else {
//     reject("❌ Error fetching data");
//   }
// });

// fetchData
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log("Error:", err));


// Instead of chaining .then(), we can write async code like it’s synchronous.

// async function getUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();


async function loadAll() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
  ]);

  console.log("Users:", users.length);
  console.log("Posts:", posts.length);
}
loadAll();
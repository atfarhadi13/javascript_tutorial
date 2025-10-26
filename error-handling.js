// Step 1: try / catch / finally
// Used to handle runtime errors safely — without crashing your program.


try {
  const result = 10 / 0;
  console.log(result);
  throw new Error("Manual error!");
} catch (error) {
  console.log("❌ Something went wrong:", error.message);
} finally {
  console.log("✅ Always runs at the end");
}

// Step 2: Async Error Handling
// When using async/await, wrap code in a try/catch block.

async function fetchData() {
  try {
    const res = await fetch("https://invalid-url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Network error:", err.message);
  }
}
fetchData();


// Step 3: Throwing Custom Errors
// You can raise errors intentionally.

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.error(e.message);
}

// Step 4: The Event Loop — How JS Runs Code
// JavaScript is single-threaded → it handles one thing at a time using an event loop.

console.log("1");

setTimeout(() => console.log("2 (timeout)"), 0);

Promise.resolve().then(() => console.log("3 (promise)"));

console.log("4");
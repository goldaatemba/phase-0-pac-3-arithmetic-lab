function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Testing functions with console.log
  console.log("add(5, 3):", add(5, 3)); // Expected output: 8
  console.log("subtract(10, 4):", subtract(10, 4)); // Expected output: 6
  console.log("multiply(2, 3):", multiply(2, 3)); // Expected output: 6
  console.log("divide(10, 2):", divide(10, 2)); // Expected output: 5
  console.log("increment(7):", increment(7)); // Expected output: 8
  console.log("decrement(9):", decrement(9)); // Expected output: 8
  console.log("makeInt('42'):", makeInt("42")); // Expected output: 42
  console.log("makeInt('3.14'):", makeInt("3.14")); // Expected output: 3
  console.log("preserveDecimal('3.14'):", preserveDecimal("3.14")); // Expected output: 3.14
  console.log("preserveDecimal('abc'):", preserveDecimal("abc")); // Expected output: NaN
  
  // Export functions for testing
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
  };
  
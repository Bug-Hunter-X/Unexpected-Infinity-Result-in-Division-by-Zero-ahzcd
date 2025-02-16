function foo(a, b) {
  if (b === 0) {
    return NaN; // Or throw an error: throw new Error('Division by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(foo(10, 0)); // Returns NaN
console.log(foo(0, 10)); // Returns 0
console.log(foo(0, 0)); // Returns NaN
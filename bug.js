function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; 
  }
  return a / b; 
}

console.log(foo(10, 0)); //This will return Infinity, not an error
console.log(foo(0, 10)); //This will return 0
console.log(foo(0,0)); //This will return 0
let count = 0;
function Fibonacci(position, cache = []) {
  if (cache[position]) {
    return cache[position];
  } else {
    count++;
    if (position == 0) {
      cache[position] = 0;
    } else if (position == 1) {
      cache[position] = 1;
    } else {
      cache[position] =
        Fibonacci(position - 1, cache) + Fibonacci(position - 2, cache);
    }
    return cache[position];
  }
}

console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));

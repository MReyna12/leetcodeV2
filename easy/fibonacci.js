function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

fibonacci(10);

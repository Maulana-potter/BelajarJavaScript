function fibonacciRekursif(n) {
    if (n <= 1) return n;
    
    return fibonacciRekursif(n - 1) + fibonacciRekursif(n - 2);

  }
  alert(fibonacciRekursif(9))
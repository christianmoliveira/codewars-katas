// Função soma número antecessor resursivamente
function summation (n) {
  return n == 0 ? n : n + summation(n - 1);
}

console.log(summation(8));

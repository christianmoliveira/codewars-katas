// Verifica se array possui a qtd de índices dado
// 'pega' o valor do índice e é feito uma operação de
// potenciação, no caso, array[n]^n
function index (array, n) {
  return array.length > n ? Math.pow(array[n], n) : -1;
}

console.log(index([1, 2], 3));

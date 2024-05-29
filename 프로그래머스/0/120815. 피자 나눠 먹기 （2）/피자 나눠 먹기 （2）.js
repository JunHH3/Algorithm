function solution(n) {
  const piecesPerPizza = 6;
  let pizzas = 1;

  while ((piecesPerPizza * pizzas) % n !== 0) {
    pizzas++;
  }

  return pizzas;
}

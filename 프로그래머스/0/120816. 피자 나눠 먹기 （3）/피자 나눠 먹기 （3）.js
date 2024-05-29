function solution(slice, n) {
  let pizzas = 1;

  // 총 피자 조각 수가 사람 수 n 이상이 될 때까지 반복합니다.
  while ((slice * pizzas) < n) {
    pizzas++;
  }

  return pizzas;
}
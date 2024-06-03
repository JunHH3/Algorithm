function solution(money) {
    // 아이스 아메리카노 한 잔 가격
    const price = 5500;
    
    // 최대로 마실 수 있는 잔 수
    const maxCups = Math.floor(money / price);
    
    // 남는 돈
    const remainingMoney = money % price;
    
    // 결과 배열
    return [maxCups, remainingMoney];
}

// 예시 호출
console.log(solution(11000)); // [2, 0]
console.log(solution(15000)); // [2, 4000]

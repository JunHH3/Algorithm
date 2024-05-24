function gcd (a,b) {
    return b ? gcd (b, a%b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
    const dnum = denom1 * denom2
    
    const num = numer1 * denom2 + numer2 * denom1
    
    const g = gcd(num, dnum)
    
    return [num/g, dnum/g]
    
}


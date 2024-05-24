function gcd (a,b) {
    return b ? gcd (b, a%b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
    const an4 = denom1 * denom2
    
    const an1 = numer1 * denom2
    const an2 = numer2 * denom1
    
    const an3 = an1 + an2
    
    const g = gcd(an3, an4)
    
    const an6 = an3 / g
    const an7 = an4 / g
    
    return [an6, an7]
    
}


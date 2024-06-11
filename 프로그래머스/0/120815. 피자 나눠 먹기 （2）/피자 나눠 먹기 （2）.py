import math

def solution(n):
    pizza = 6
    eat = (n * pizza) // math.gcd(n, pizza)
    return eat // pizza
def solution(array):
    arr = sorted(array)
    length = len(arr)
    
    Mlen = length // 2
    return arr[Mlen]
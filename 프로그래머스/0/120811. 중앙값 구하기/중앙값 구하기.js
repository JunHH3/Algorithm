function solution(array) {
    var answer = 
        array.sort((a,b)=>a-b);
    const length = array.length;
    const X = Math.floor(length/2);
    return array[X];
}
function solution(array) {
   
    const counting = new Map();
    
   
    array.forEach(num => {
        if (counting.has(num)) {
            counting.set(num, counting.get(num) + 1);
        } else {
            counting.set(num, 1);
        }
    });
    
    
    const max = Math.max(...counting.values());
    
    
    let count = 0;
    let result = 0;
    
   
    for (const [key, value] of counting) {
        if (max === value) {
            count++;
            result = key;
        }
    }
    
    
    if (count > 1) {
        return -1;
    } else {
        return result;
    }
}

function getNext(n){
    let total = 0;
    let digitsArray = Array.from(String(n), Number)

    for (let digit of digitsArray){
        total += digit **2
    }
    return total
}

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
    let seen = new Set()
    while( n !== 1){
        if(seen.has(n)){
        return false
    } 
     seen.add(n)
     n = getNext(n)
    }
    return true 
}
}
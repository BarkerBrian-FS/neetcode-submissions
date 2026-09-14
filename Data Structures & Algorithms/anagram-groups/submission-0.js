class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        for(let word of strs){
        const key = word.split("").sort().join("")

        if(groups.has(key)){
        groups.get(key).push(word)
        } else {
            groups.set(key, [word])
        }

       
    }

     return Array.from(groups.values())
}
    
}
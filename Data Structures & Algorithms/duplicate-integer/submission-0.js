class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums)

        for(num of nums){
            if(seen.has(num)){
                return true
            }
        }
        return false
    }
}

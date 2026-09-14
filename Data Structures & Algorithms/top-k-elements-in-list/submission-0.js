class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()
        for(let num of nums){
            frequency.set(num, (frequency.get(num)||0)+1)
        }

        const bucket = Array.from({length: nums.length + 1}, () => [])

        for(let [num, count] of frequency){
            bucket[count].push(num)

        }
        const result = []
        for(let i = bucket.length -1; i >= 0; i--){
        for(let num of bucket[i]){
                result.push(num)

                if(result.length === k){
                    return result
                }
            }
        }
    }

    
}

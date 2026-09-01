class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let minProf = Infinity

        for(let price of prices){
            minProf= Math.min(minProf, price)

            const profit = price - minProf

            maxProf = Math.max(maxProf, profit)
        }
        return maxProf
    }
   
}

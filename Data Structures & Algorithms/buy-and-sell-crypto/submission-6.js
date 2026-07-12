class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r++) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            if (prices[l] > prices[r]) {// why move l to r when prices[l]>=prices[r]? because whatever values are coming after current r
            //it 
                l = r;
            }
        }
        return maxProfit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r++) {
            if (prices[l] < prices[r]) {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            }
            else {// why move l to r when prices[l]>prices[r]? because whatever values are coming after current r
            //it will certainly be more than if we're evaluating l
                l = r;
            }
        }
        return maxProfit;
    }
}

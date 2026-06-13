class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leastPrice = prices[0];
        let maxProfit = 0;

        for (let price of prices) {
            leastPrice = Math.min(leastPrice, price)
            maxProfit = Math.max(maxProfit, price - leastPrice)
        }

        return maxProfit;
    }
}

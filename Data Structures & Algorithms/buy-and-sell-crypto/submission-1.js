class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let j = 0;
        let k = 1;
        let maxProfit = 0;

        while (j < prices.length && k < prices.length) {
            if (prices[k] - prices[j] >= 0) {
                if (prices[k] - prices[j] > maxProfit) {
                    maxProfit = prices[k] - prices[j];
                }
                k++;
            } else if (prices[k] - prices[j] < 0) {
                j++;
            }
        }

        // let min = 0;
        // let minIdx = 0;

        // prices.forEach((price, idx) => {
        //     if (price < min) {
        //         min = price;
        //         minIdx = idx;
        //     }
        // })

        // let maxProfit = 0;
        // for (let i = minIdx+1; i < prices.length; i++) {
        //     if (!prices[i]) {
        //         break;
        //     }

        //     if ((prices[i] - min) > maxProfit) {
        //         maxProfit = prices[i] - min;
        //     }
        // }

        return maxProfit;
    }
}

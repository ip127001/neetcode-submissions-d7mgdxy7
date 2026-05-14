class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // const dp = [[]];

        // for (let i = 1; i <= target; i++) {
        //     dp[i] = [];
        // }
        // dp[0].push([]);

        // for (let i = 1; i <= target; i++) {
        //     for (let j = 0; j < nums.length; j++) {
        //         if (nums[j] <= i) {
        //             for (let prev of dp[i - nums[j]]) {
        //                 const temp = prev.concat(nums[j]);

        //                 temp.sort((a,b) => a - b);

        //                 if (!dp[i].some(comb => comb.join('') === temp.join(''))) {
        //                     dp[i].push(temp);
        //                 }
        //             }
        //         }
        //     }
        // }

        // return dp[target];

        const result = [];

        function backtrack(i, current, sum) {
            if (sum === target) {
                result.push([...current]);
                return;
            }

            if (sum > target) return;

            for (let j = i; j < nums.length; j++) {
                current.push(nums[j]);
                backtrack(j, current, sum+nums[j]);
                current.pop();
            }
        }

        backtrack(0, [], 0);

        return result;
    }
}

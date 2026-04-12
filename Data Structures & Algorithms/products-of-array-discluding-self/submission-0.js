class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixArr = [];
        let prefixMul = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixArr[0] = 1;
                continue;
            }
            prefixMul = prefixMul * nums[i-1];
            prefixArr[i] = prefixMul;
        }

        const postfixArr = [];
        let postfixMul = 1;
        for (let i = nums.length-1; i >= 0; i--) {
            if (i === nums.length-1) {
                postfixArr[nums.length-1] = 1;
                continue;
            }
            postfixMul = postfixMul * nums[i+1];
            postfixArr[i] = postfixMul;
        }

        const output = [];
        for (let i = 0; i < nums.length; i++) {
            output[i] = prefixArr[i] * postfixArr[i]
        }

        return output;
    }
}

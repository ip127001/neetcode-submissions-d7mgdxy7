class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];
        
        let leftTotal = 1;
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = leftTotal;

            leftTotal = leftTotal * nums[i];
        }
        leftTotal = 1;

        let rightTotal = 1;
        for (let i = nums.length-1; i >= 0; i--) {
            suffix[i] = rightTotal;

            rightTotal = rightTotal * nums[i];
        }
        rightTotal = 1;

        console.log(prefix, suffix)
        return prefix.map((val, idx) => val * suffix[idx])
    }
}

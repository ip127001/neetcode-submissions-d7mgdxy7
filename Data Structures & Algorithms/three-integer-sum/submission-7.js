class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) =>a-b);

        let result = [];
        let left = 0;
        let right = nums.length-1;

        for (let i = 0; i < nums.length-2; i++) {
            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }

            left = i+1;
            right = nums.length-1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Skip duplicate left values
                    while (left < right && nums[left] === nums[left-1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right && nums[right] === nums[right+1]) {
                        right--;
                    }
                } 
                else if (sum > 0) {
                    right--;
                } 
                else {
                    left++
                }
            }
        }

        return result;
    }
}

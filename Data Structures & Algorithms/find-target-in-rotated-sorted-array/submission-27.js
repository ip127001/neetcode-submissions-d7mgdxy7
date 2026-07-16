class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length-1;
        let result = -1;

        while(left <= right) {
            const mid = Math.floor((left + right)/2);

            if (nums[mid] === target) {
                return mid;
            }
            
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;    
                }
            } else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } 
        }

        // if (result === -1 && left === right && target === nums[left]) {
        //     result = left;
        // }

        return result
    }
}

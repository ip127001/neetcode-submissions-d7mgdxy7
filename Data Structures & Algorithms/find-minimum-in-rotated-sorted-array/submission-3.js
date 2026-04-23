class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMinimum(nums, start, end, min) {
        if (start === end) {
            return min;
        }

        const first = nums[start];
        const last = nums[end];

        if (min === undefined && first < last) {
            min = first;
        } else if (min === undefined && last < first) {
            min = last;
        } else if (min !== undefined && first < last && first < min) {
            min = first;
        } else if (min !== undefined && last < first && last < min) {
            min = last;
        }

        let mid = Math.floor((end + start)/2);

        if (nums[mid] < min) {
            min = nums[mid];
        }

        if (nums[mid] < first) {
            min = this.findMinimum(nums, start, mid, min);
        } else {
            min = this.findMinimum(nums, mid+1, end, min);
        }

        return min;
    }

    findMin(nums) {
        const n = nums.length;
        const first = nums[0];
        const last = nums[n-1];
        let min;

        if (last > first && (last - first + 1) === n) {
            return first;
        }

        if (n === 1) {
            return nums[0];
        }

        min = this.findMinimum(nums, 0, n-1, min);
        return min;
    }
}

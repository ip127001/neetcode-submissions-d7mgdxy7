class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
     findMinimum(nums, start, end, target, output) {
        if (start === end) {
            return output;
        }

        const first = nums[start];
        const last = nums[end];

        if (first === target) {
            return start;
        } else if (last === target) {
            return end;
        }

        let mid = Math.floor((end + start)/2);

        if (nums[mid] === target) {
            return mid;
        }

        const rightSorted = (last - nums[mid]) === (end - mid) ? true : false;
        const leftSorted = (nums[mid] - first) === (mid - start) ? true : false;

        if (rightSorted && target <= last && target > nums[mid]) {
            output = this.findMinimum(nums, mid+1, end, target, output);
        } else {
            output = this.findMinimum(nums, start, mid, target, output);
        }

        if (leftSorted && target > first && target <= nums[mid]) {
            output = this.findMinimum(nums, start, mid, target, output);
        } else {
            output = this.findMinimum(nums, mid+1, end, target, output);
        }

        return output;
    }

    search(nums, target) {
        const n = nums.length;
        let output = -1;

        if (n === 1 && target === nums[0]) {
            return 0;
        }

        output = this.findMinimum(nums, 0, n-1, target, output);
        return output;
    }
}

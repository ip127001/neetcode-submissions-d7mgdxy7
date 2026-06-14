class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxOutput = 0;

        while (left <= right) {
            const width = right - left;
            const output = width * Math.min(heights[left], heights[right]);

            maxOutput = Math.max(maxOutput, output);

            if (heights[left] <= heights[right]) {
                left++
            } else {
                right--;
            }
        }

        console.log({maxOutput})

        // if (left === right) {

        // }
        return maxOutput;
    }
}

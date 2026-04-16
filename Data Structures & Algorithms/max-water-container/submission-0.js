class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let j = 0;
        let k = heights.length-1;
        let largest = 0;

        while (j < k) {
            let containers = k - j;
            let lowerHeight = heights[j] < heights[k] ? heights[j] : heights[k];

            let output = containers * lowerHeight;

            if (output > largest) {
                largest = output;
            }

            if (heights[j] <= heights[k]) {
                j++;
            } else {
                k--;
            }
        }

        return largest;
    }
}

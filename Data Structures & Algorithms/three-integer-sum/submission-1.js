class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const sortedArr = nums.sort((a,b) => a-b);
        let j = 0, k = 0;
        const n = sortedArr.length;
        const result = [];
        const obj = {};

        for (let i = 0; i <= n-3; i++) {
            j = i+1;
            k = n-1;

            while (j < k) {
                const target = -sortedArr[i];
                
                if (sortedArr[j] + sortedArr[k] === target) {
                    const key = `${sortedArr[i]}${sortedArr[j]}${sortedArr[k]}`
                    if (!obj[key]) {
                        result.push([sortedArr[i], sortedArr[j], sortedArr[k]]);
                        obj[key] = 1;
                    }
                    j++;
                    k--;
                } else if (sortedArr[j] + sortedArr[k] < target) {
                    j++;
                } else if (sortedArr[j] + sortedArr[k] > target) {
                    k--;
                }
            }
        }

        return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const obj = {};
        const out = {};
        let i = 0;

        nums.forEach((num, idx) => {
            if (!obj[num]) {
                obj[num] = 1;
            }
        })

        nums.forEach((num, idx) => {
            if (!obj[num-1]) {
                let j = num+1;
                let start = num;
                out[start] = [];

                while (obj[j]) {
                    out[start].push(j);
                    j = j+1;
                }
            }
        })

        let largestKey;
        let largest = 0;
        for (let [key, value] of Object.entries(out)) {
            if (value.length > largest) {
                largestKey = key;
                largest = value.length;
            }
        }

        let output = 0;

        if (largestKey === undefined) {
            largestKey = Object.keys(out)[0];
        }

        if (largestKey !== undefined) {
            output = out[largestKey].push(largestKey);
        }

        return output;

    }
}

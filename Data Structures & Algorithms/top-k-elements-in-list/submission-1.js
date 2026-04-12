class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        let n = 1;

        nums.forEach((num) => {
            if (obj[num]) {
                obj[num] += 1;
            } else {
                obj[num] = 1;
            }
        });

        Object.values(obj).forEach((val) => {
            if (val > n) {
                n = val;
            }
        })

        const bucket = new Array(n);
        for (let i = 0; i < bucket.length; i++) {
            bucket[i] = [];
        }

        for (let [key, value] of Object.entries(obj)) {
            const singleBucket = bucket[value-1];
             console.log("singleBucket", bucket[value-1], bucket[value-2], bucket[value-3])
            singleBucket.push(key)
        }

        console.log("bucket", bucket)

        let out = [];
        let count = 0;

        for (let i = bucket.length-1; i >= 0; i--) {
            if (bucket[i].length !== 0 && count !== k) {
                out = out.concat(bucket[i]);
                count = count + bucket[i].length;
            }
        }

        return out;
    }
}

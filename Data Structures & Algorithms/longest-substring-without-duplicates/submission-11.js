class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let j = 0;
        let k = 0;
        let obj = {};
        let output = 0;

        while (k < s.length) {
            const val = s[k];

            if (obj[val] !== undefined) {
                if (k-j > output) {
                    output = k - j;
                }
                if (obj[val] >= j) {
                  j = obj[val];
                  j++
                }
            }
            obj[val] = k;
            k++;
        }

        if (k - j > output) {
          output = k - j;
        }

        return output;
    }
}

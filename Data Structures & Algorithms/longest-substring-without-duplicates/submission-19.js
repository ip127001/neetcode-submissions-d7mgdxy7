class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let left = 0;
        let maxlength = 0;

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                left = Math.max(left, map.get(s[i]) + 1);
            }
            maxlength = Math.max(maxlength, i-left+1);
            map.set(s[i], i);
        }

        if (maxlength === 0) {

        }

        return maxlength;
    }
}








// // found duplicate
//             if (map.has(s[i])) {
//                 left = Math.max(left, map.get(s[i]) + 1);
//             }
//             map.set(s[i], i)
//             maxlength = Math.max(maxlength, i-left+1)
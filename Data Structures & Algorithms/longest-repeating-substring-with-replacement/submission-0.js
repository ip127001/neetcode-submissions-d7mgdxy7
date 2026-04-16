class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const obj = {};

        let start = 0;
        let end = 0;

        let maxChar = 0;
        let maxSubstring = 0;

        while (end < s.length) {
            if (obj[s[end]] === undefined) {
                obj[s[end]] = 1;
            } else {
                obj[s[end]] += 1;
            }

            maxChar = Math.max(obj[s[end]], maxChar);

            if (end - start + 1 - maxChar > k) {
                obj[s[start]] = obj[s[start]] - 1;
                start++;
            }

            maxSubstring = Math.max(end - start + 1, maxSubstring);
            end++;
        }
        return maxSubstring
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();

        let left = 0;
        let longest = 0;
        let maxFrequency = 0;

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);

            maxFrequency = Math.max(maxFrequency, map.get(s[i]))

            while ((i - left + 1) - maxFrequency > k) {
                map.set(s[left], map.get(s[left]) - 1)
                left++;
            }

            longest = Math.max(longest, i - left + 1);
        }
        return longest;
    }
}

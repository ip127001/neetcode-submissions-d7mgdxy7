class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const window = new Map();
        const need = new Map();

        for (let i = 0; i < t.length; i++) {
            need.set(t[i], (need.get(t[i]) || 0) + 1)
        }

        let left = 0;
        let required = 0;
        let size = need.size;
        let minLength = Infinity;
        let startIndex = 0;

        for (let j = 0; j < s.length; j++) {
            const curr = s[j];

            window.set(curr,  (window.get(curr) || 0) + 1);

            if (window.has(curr) && need.has(curr) && window.get(curr) === need.get(curr)) {
                required++;
            }

            while (required === size) {
                if (j - left + 1 < minLength) {
                    minLength = j - left + 1;
                    startIndex = left;
                }

                const leftChar = s[left];

                window.set(leftChar, window.get(leftChar) - 1);

                if (need.has(leftChar) && window.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    required--;
                }

                left++;
            }
        }

        return minLength === Infinity ? '' : s.substring(startIndex, startIndex + minLength)
    }
}

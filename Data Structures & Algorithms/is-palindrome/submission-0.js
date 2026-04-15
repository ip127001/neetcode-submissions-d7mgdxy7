class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const validStr = s.replace(/[^A-Za-z0-9]/g, '')
        const str = validStr.toLowerCase();

        const n = str.length - 1;
        for (let i = 0; i < str.length; i++) {
            const j = n - i;
            if (str[i] !== str[j]) {
                return false;
            }
        }

        return true;
    }
}

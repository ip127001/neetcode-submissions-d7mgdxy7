class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return "empty_array"
        }
        return strs.join("__");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 'empty_array') {
            return [];
        }
        return str.split("__")
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let output = [];
    let obj = {};

    for (let i = 0; i < strs.length; i++) {
        let currStr = strs[i];
        const arr = new Array(26).fill().map(_ => -1)

        for (let i = 0; i < currStr.length; i++) {
            const idx = currStr[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (!arr[idx]) {
                arr[idx] = 1;
            } else {
                arr[idx] = arr[idx] + 1;
            }
        }

        const uniqueKey = arr.join("");

        if (!obj[uniqueKey]) {
            obj[uniqueKey] = [currStr]
        } else if (obj[uniqueKey]) {
            obj[uniqueKey].push(currStr)
        }
    }

    for (let value of Object.values(obj)) {
        output.push(value)
    }

    return output;

    }
}

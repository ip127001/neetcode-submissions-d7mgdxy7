class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mainObj = {};

        for (let i = 0; i <strs.length; i++) {
        const keyArr = new Array(26).fill(-1);

        const currStrArr = strs[i].split("");

        currStrArr.forEach((s) => {
            const currCharIdx = s.charCodeAt(0) - 'a'.charCodeAt(0);

            if (!keyArr[currCharIdx]) {
            keyArr[currCharIdx] = 1;
            } else {
            keyArr[currCharIdx] += 1;
            }
        })

        const createUniqueKey = keyArr.join("");

        if (mainObj[createUniqueKey]) {
            mainObj[createUniqueKey].push(strs[i]);
        } else {
            mainObj[createUniqueKey] = [strs[i]];
        }
        }

        return Object.values(mainObj);
    }
}

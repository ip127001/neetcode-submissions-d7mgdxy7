class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const mainObj = {};

        // for (let i = 0; i <strs.length; i++) {
        //     const keyArr = new Array(26).fill(-1);

        //     const currStrArr = strs[i].split("");

        //     currStrArr.forEach((s) => {
        //         const currCharIdx = s.charCodeAt(0) - 'a'.charCodeAt(0);

        //         if (!keyArr[currCharIdx]) {
        //         keyArr[currCharIdx] = 1;
        //         } else {
        //         keyArr[currCharIdx] += 1;
        //         }
        //     })

        //     const createUniqueKey = keyArr.join("");

        //     if (mainObj[createUniqueKey]) {
        //         mainObj[createUniqueKey].push(strs[i]);
        //     } else {
        //         mainObj[createUniqueKey] = [strs[i]];
        //     }
        // }

        // return Object.values(mainObj);

    let output = [];
    let obj = {};

    for (let i = 0; i < strs.length; i++) {
        let currStr = strs[i];
        const arr = new Array(26).fill().map(_ => -1)

        for (let i = 0; i < currStr.length; i++) {
            const idx = currStr[i].charCodeAt(0) - 'a'.charCodeAt(0);
            console.log("idx:", currStr, arr[idx])
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

    console.log(obj)
    for (let value of Object.values(obj)) {
        output.push(value)
    }

    return output;

    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let obj = {}
        for (let i = 0 ; i<t.length; i++) {
            if (!obj[t[i]]) {
                obj[t[i]] = 1
            } else {
                obj[t[i]] = obj[t[i]] + 1; 
            }
        }

        let start = undefined;
        let shortestSubstring = "";
        let shortestSubstrLength = 0;
        let currSubstring = 0;
        let j = 0;
        let clonedObj;

        let i = 0;
        while(i < s.length) {
            if (obj[s[i]] && start === undefined) {
                clonedObj = {...obj};
                start = i;
            }
            if (clonedObj && clonedObj[s[i]] && clonedObj[s[i]] > 0 && start !== undefined) {
                clonedObj[s[i]] = clonedObj[s[i]] - 1;
                j++;
            }
            if (start !== undefined) {
                currSubstring++;
            }
            if (j === t.length) {
                console.log({start})
                if (shortestSubstrLength === 0) {
                    shortestSubstrLength = currSubstring;
                    shortestSubstring = s.slice(start, i+1);
                } else if (shortestSubstrLength > 0 && currSubstring < shortestSubstrLength) {
                    shortestSubstrLength = currSubstring;
                    shortestSubstring = s.slice(start, i+1);
                }
                j = 0;
                currSubstring = 0;
                i = start + 1;
                start = undefined;
            } else {
                i++;
            } 
        }
        return shortestSubstring;
    }
}

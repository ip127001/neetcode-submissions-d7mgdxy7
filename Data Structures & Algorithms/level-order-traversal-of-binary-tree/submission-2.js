/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let q = [];
        if (root?.val !== undefined) {
            q.push({...root, level: 0});
        }
        let output = [];

        while (q.length) {
            let curr = q.shift();
            output.push(curr);

            curr.left && q.push({...curr.left, level: curr.level+1})
            curr.right && q.push({...curr.right, level: curr.level+1})
        }
        
        let result = new Array(output.length).fill([]);

        output.forEach((node) => {
            let idx = node.level;
            const currArr = [...result[idx]];
            currArr.push(node.val);
            result[idx] = currArr;
        })

        result = result.filter(el => el.length > 0);
        return result;
    }
}

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

1
2,3
3,4,5
4,5,6,7

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = []
        const output = [];
        if (!root) {
            return [];
        }
        queue.push([root, 0])

        while (queue.length) {
            const popped = queue.shift();
            const [curr, level] = popped;
            output.push([curr.val, level])

            curr.left && queue.push([curr.left, level + 1])
            curr.right && queue.push([curr.right, level + 1])
        }

        const map = new Map();
        output.forEach(arr => {
            const key = arr[1];
            const val = arr[0];
            if (map.has(key)) {
                map.set(key, map.get(key).concat([val]));
            } else {
                map.set(key, [val]);
            }
        })

        const result = [];
        for (let val of map.values()) {
            result.push(val)
        }

        return result;
    }
}

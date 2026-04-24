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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        let max;

        const leftHeight = this.maxDepth(root.left)
        const rightHeight = this.maxDepth(root.right)

        max = leftHeight > rightHeight ? leftHeight : rightHeight;

        return max + 1;
    }
}

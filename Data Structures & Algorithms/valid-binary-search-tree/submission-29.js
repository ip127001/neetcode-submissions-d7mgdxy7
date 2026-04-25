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
     * @return {boolean}
     */

    isValid(root, prev) {
        console.log("roo-prev", root?.val, prev)
        if (root === null) {
            return true;
        }

        if (!this.isValid(root.left, prev)) {
            return false;
        }

        if (root.val < prev) {
            return false;
        } else if (root.val > prev) {
            prev.pop();
            prev.push(root.val);
        } else {
            return false;
        }

        return this.isValid(root.right, prev)
    }

    isValidBST(root) {
        const prev = [-Infinity];
        return this.isValid(root, prev)
    }
}

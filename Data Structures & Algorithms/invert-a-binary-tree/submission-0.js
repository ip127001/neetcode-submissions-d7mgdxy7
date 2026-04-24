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
     * @return {TreeNode}
     */
    invertTree(root) {
        console.log("root", root)
        if (root === null) {
            return root;
        }
        const right = root.right;
        const left = root.left;

        root.left = right;
        root.right = left;

        if (root.left) {
            this.invertTree(root.left)
        }
        if (root.right) {
            this.invertTree(root.right) 
        }

       return root;
    }
}

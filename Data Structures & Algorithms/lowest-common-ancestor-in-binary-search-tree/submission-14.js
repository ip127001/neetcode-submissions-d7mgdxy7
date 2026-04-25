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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // if (root === null || root.left === null || root.right === null) {
        //     return;
        // }
        
        // if ((root.left?.val === p.val && root.right?.val === q.val) || (root.right?.val === p.val && root.left?.val === q.val)) {
        //     return root;
        // }

        // if ((root.right?.val === p.val || root.right?.val === q.val) && (root?.val === q.val || root?.val === p.val)) {
        //     return root;
        // }

        // if ((root.left?.val === p.val || root.left?.val === q.val) && (root.val === q.val || root.val === p.val)) {
        //     return root;
        // }

        if (p.val > root.val && q.val > root.val) {
            return this.lowestCommonAncestor(root.right, p, q)
        } else if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q)
        } else {
            return root;
        }
    }
}

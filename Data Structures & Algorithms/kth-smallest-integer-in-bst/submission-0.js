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
     * @param {number} k
     * @return {number}
     */

    findSmallestInBST(root, arr) {
        if (root === null) {
            return;
        }
        this.findSmallestInBST(root.left, arr);
        arr.push(root.val);
        this.findSmallestInBST(root.right, arr);

    }

    kthSmallest(root, k) {
        let arr = [];

        this.findSmallestInBST(root, arr);

        return arr[k-1];
    } 
}

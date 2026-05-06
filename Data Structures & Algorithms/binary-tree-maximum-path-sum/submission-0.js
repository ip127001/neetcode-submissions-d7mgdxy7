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

    maxSum = Infinity * -1;
    

    calcMaxPath(root){
        if (root === null) return 0;

        let maxLeft = this.calcMaxPath(root.left);
        let maxRight = this.calcMaxPath(root.right);
        console.log("node -  left & right", maxLeft, maxRight)
        let leftSubtree = 0;
        let rightSubtree = 0;

        if (maxLeft > 0) {
            leftSubtree = maxLeft;
        }
        if (maxRight > 0) {
            rightSubtree = maxRight;
        }

        let newPathVal = root.val + leftSubtree + rightSubtree;
        console.log("new path", root.val, leftSubtree, rightSubtree)
        this.maxSum = Math.max(this.maxSum, newPathVal)
        return root.val + Math.max(leftSubtree, rightSubtree);
    }

    maxPathSum(root) {
        this.calcMaxPath(root);
        let temp = this.maxSum;
        this.maxSum = Infinity * -1;
        return temp;
    }
}

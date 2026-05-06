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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTreeHelper(preorder, inorder, left, right, inOrderMap, pIndex) {
        if (left > right) {
            return null;
        }

        let curr = preorder[pIndex[0]];

        pIndex[0]++
        let root = new TreeNode(curr);

        if (left === right) {
            return root;
        }

        let currIdx = inOrderMap.get(curr);

        root.left = this.buildTreeHelper(preorder, inorder, left, currIdx-1, inOrderMap,  pIndex);
        root.right = this.buildTreeHelper(preorder, inorder, currIdx+1, right, inOrderMap,  pIndex);

        return root;
    }

    
    buildTree(preorder, inorder) {
        const pIndex = [0];
        let inOrderMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            inOrderMap.set(inorder[i], i);
        }

        return this.buildTreeHelper(preorder, inorder, 0, preorder.length-1, inOrderMap,  pIndex);
    }
}

// 1 => 2 => 3
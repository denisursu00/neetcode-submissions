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
    maxPathSum(root) {
        let res = [root.val];
        this.dfs(root, res);
        return res[0];
    }
    dfs(root, res) {
        if (!root) {
            return 0;
        }
        let leftMax = this.dfs(root.left, res);
        let rightMax = this.dfs(root.right, res);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        res[0] = Math.max(res[0], root.val + leftMax + rightMax);
        return root.val + Math.max(leftMax, rightMax);
    }
}

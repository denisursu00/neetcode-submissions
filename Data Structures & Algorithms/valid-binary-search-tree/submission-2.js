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
    isValidBST(root) {
        let q = new Queue([[root, -Infinity, Infinity]]);
        while (!q.isEmpty()) {
            let [node, left, right] = q.pop();

            if (!(left<node.val && node.val<right)) {
                return false;
            }

            if (node.left) {
                q.push([node.left, left, node.val]);
            }
            if (node.right) {
                q.push([node.right, node.val, right]);
            }
        }
        return true;
    }
}

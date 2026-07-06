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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }
        let q = new Queue([[root, 0]]);
        let res = new Array();
        while (!q.isEmpty()) {
            let [node, level] = q.pop();
            
            if (!res[level]) {
                res[level] = new Array();
            }
            res[level].push(node.val);
            
            if (node.left) {
                q.push([node.left, level + 1]);
            }
            if (node.right) {
                q.push([node.right, level + 1]);
            }
        }
        return res;
    }
}

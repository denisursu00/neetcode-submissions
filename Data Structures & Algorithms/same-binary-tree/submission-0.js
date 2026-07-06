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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue = new Queue([[p, q]])
        while (!queue.isEmpty()) {
            let [nodeP, nodeQ] = queue.pop()

            if (nodeP === null && nodeQ === null) continue;

            if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
                return false
            }
            queue.push([nodeP.left, nodeQ.left])
            queue.push([nodeP.right, nodeQ.right])
        }
        return true
    }
}

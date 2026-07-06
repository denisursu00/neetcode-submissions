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
     * @param {TreeNode} subRoot
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

    isSubtree(root, subRoot) {
        if (!subRoot) {
            return true
        }
        if (!root) {
            return false
        }
        if (this.isSameTree(root, subRoot)) {
            return true
        }
        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        ) 
    }
}

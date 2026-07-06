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
    lowestCommonAncestor2(root, p, q) {
        if ((p.val<=root.val && q.val>=root.val) || (p.val>=root.val && q.val<=root.val)) {
            return root;
        }

        if (p.val<root.val && q.val<root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }

        if (p.val>root.val && q.val>root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }

        return null;
    }

    lowestCommonAncestor(root, p, q) {
        let current = root;
        while (current) {
            if (p.val < current.val && q.val < current.val) {
                current = current.left;
            } else if (p.val > current.val && q.val > current.val) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }

}

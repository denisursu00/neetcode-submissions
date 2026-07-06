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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let q = new Queue([root]);
        let res = [];
        while (!q.isEmpty()) {
            let node = q.pop();
            if (!node) {
                res.push('null');
                continue;
            }
            res.push(node.val);
            q.push(node.left);
            q.push(node.right);
        }
        return res.toString();
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const nodes = data.split(',').map((v,i)=>{
            return !isNaN(v) ? parseInt(v) : null;
        })
        if (!nodes[0]) {
            return null;
        }
        let root = new TreeNode(parseInt(nodes[0]));
        const q = new Queue([root]);
        let i = 1;

        while (!q.isEmpty()) {
            let node = q.pop();
            if (nodes[i]) {
                node.left = new TreeNode(parseInt(nodes[i]));
                q.push(node.left);
            }
            i++;
            if (nodes[i]) {
                node.right = new TreeNode(parseInt(nodes[i]));
                q.push(node.right);
            }
            i++
        }
        return root;
    }
}

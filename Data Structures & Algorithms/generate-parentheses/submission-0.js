class Solution {

    backtrack(open, closed, n, res, str) {
        if (open === closed && open === n) {
            res.push(str)
            return
        }
        if (open < n) {
            this.backtrack(open + 1, closed, n, res, str + '(')
        }
        if (open > closed) {
            this.backtrack(open, closed + 1, n, res, str + ')')
        }
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []
        this.backtrack(0, 0, n, res, '')
        return res
    }
}

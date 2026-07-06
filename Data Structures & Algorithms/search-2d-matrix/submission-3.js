class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let lm = 0
        let rm = matrix.length - 1
        let cm
        let ln
        let rn
        while (lm<=rm) {
            cm = lm + Math.floor((rm - lm)/2)
            ln = 0
            rn = matrix[cm].length - 1
            if (matrix[cm][ln] > target) {
                rm = cm - 1
                continue
            }
            if (matrix[cm][rn] < target) {
                lm = cm + 1
                continue
            }
            break
        }
        while (ln <= rn) {
            let cn = ln + Math.floor((rn - ln) / 2)
            if (matrix[cm][cn] < target) {
                ln = cn + 1
            } else if (matrix[cm][cn] > target) {
                rn = cn - 1
            } else {
                return true
            }
        }
        return false
    }
}

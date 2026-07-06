class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {

        const cols = new Map()
        const rows = new Map()
        const boxes = new Map()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                let element = board[r][c]

                if (element === '.') continue
                
                const boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`

                let rowSet = rows.get(r)
                let colSet = cols.get(c)
                let boxSet = boxes.get(boxKey)

                if (
                    (rowSet && rowSet.has(element)) ||
                    (colSet && colSet.has(element)) ||
                    (boxSet && boxSet.has(element))
                ) {
                    return false
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!boxes.has(boxKey)) boxes.set(boxKey, new Set());

                rows.get(r).add(element)
                cols.get(c).add(element)
                boxes.get(boxKey).add(element)

            }
        }
        return true
    }
}

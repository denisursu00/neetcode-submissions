class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (const str of strs) {
            encoded = encoded.concat(`${str.length}#`, str)
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //
    //   4neet4code4love3you
    decode(str) {
        let strs = []
        let i = 0
        while (i<str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }
            let length = parseInt(str.substring(i, j))
            i = j+1
            j = i+length
            strs.push(str.substring(i, j))
            i = j
        }
        return strs
    }
}

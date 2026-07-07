class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //5#Hello5#World
        let encoded = '';
        for (let str of strs) {
            encoded = encoded.concat(`${str.length}#`, str);
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            strs.push(str.substring(j+1, j+1+length));
            i = j + 1 + length;
        }
        return strs;
    }
}

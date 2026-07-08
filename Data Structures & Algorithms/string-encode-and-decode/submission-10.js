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
        let index = 0;
        let strs = [];
        while (index < str.length) {
            let lenStr = '';
            while (str[index]!=='#') {
                lenStr = lenStr.concat(str[index]);
                index++;
            }
            let length = parseInt(lenStr);
            strs.push(str.substring(index+1, index+length+1));
            index = index+length+1;
        }
        return strs;
    }
}

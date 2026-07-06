class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result = result + `>${str.length}<${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let numEndIndex = str.indexOf('<', i);
            let nrOfLetters = str.substring(i+1, numEndIndex);
            result.push(str.substring(numEndIndex + 1, numEndIndex + 1 + Number(nrOfLetters)));
            i = i + 2 + nrOfLetters.length + Number(nrOfLetters);
        }
        return result;
    }
}


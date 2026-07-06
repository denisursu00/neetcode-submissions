class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = new Map();
        for (let str of strs) {
            let letterCounter = new Array(26).fill(0);
            for (let chr of str) {
                letterCounter[chr.charCodeAt()-"a".charCodeAt()] += 1;
            }
            let key = letterCounter.join(",");
            if (!anagrams.has(key)) {
                anagrams.set(key, []);
            }
            anagrams.set(key, [...anagrams.get(key), str]);
        }
        return [...anagrams.values()];
    }
}

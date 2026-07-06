class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set();
        for (const num of nums) {
            if (unique.has(num)) {
                return true;
            } else {
                unique.add(num);
            }
        }
        return false;
    }
}

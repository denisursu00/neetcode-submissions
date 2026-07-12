class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            let area = Math.min(heights[l], heights[r]) * (r - l);
            if (area > res) res = area;
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}

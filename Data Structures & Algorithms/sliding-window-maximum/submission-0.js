class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const output = [];
        const q = new Deque(); // holds indices, not values

        for (let r = 0; r < n; r++) {
            // Remove indices that are out of the current window
            while (q.size() && q.front() < r - k + 1) {
                q.popFront();
            }

            // Remove indices whose values are smaller than current num
            while (q.size() && nums[q.back()] < nums[r]) {
                q.popBack();
            }

            q.pushBack(r);

            // Start adding to output when we hit window size
            if (r >= k - 1) {
                output.push(nums[q.front()]);
            }
        }

        return output;
    }
}

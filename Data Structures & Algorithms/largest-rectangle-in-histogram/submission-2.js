class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0
        for (let i = 0; i < heights.length; i++) {
            let correctIndex = i
            while (stack.length > 0 && heights[i] < stack[stack.length - 1].height) {
                let poped = stack.pop()
                maxArea = Math.max(maxArea, (i - poped.index) * poped.height)
                correctIndex = poped.index
            }
            stack.push({
                index: correctIndex,
                height: heights[i]
            })
        }
        console.log(stack)
        while (stack.length > 0) {
            let top = stack[stack.length - 1]
            maxArea = Math.max(maxArea, (heights.length - top.index) * top.height)
            stack.pop()
        }
        return maxArea
    }
}

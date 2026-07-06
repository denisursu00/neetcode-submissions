class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let res = new Array(t.length).fill(0)
        let stack = []
        stack.push({
            num: t[0],
            index: 0
        })
        for (let i = 1; i < t.length; i++) {
            while (stack.length > 0 && t[i] > stack[stack.length - 1].num) {
                let stackElement = stack[stack.length - 1]
                res[stackElement.index] = i - stackElement.index
                stack.pop()
            }
            stack.push({
                num: t[i],
                index: i
            })
        }
        return res
    }
}

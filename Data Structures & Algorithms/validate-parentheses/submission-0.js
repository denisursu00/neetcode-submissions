class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for (let c of s) {
            switch (c) {
                case '(':
                    stack.push(c)
                    continue
                case '{':
                    stack.push(c)
                    continue
                case '[':
                    stack.push(c)
                    continue
                case ')':
                    if (stack[stack.length-1] !== '(') return false
                    stack.pop()
                    continue
                case '}':
                    if (stack[stack.length-1] !== '{') return false
                    stack.pop()
                    continue
                case ']':
                    if (stack[stack.length-1] !== '[') return false
                    stack.pop()
                    continue
            }
        }
        return stack.length === 0
    }
}

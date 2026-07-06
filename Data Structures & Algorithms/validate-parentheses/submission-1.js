class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const parantheses = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for (let c of s) {
            if (parantheses[c]) {
                stack.push(c)
            } else {
                if (parantheses[stack[stack.length-1]] !== c) {
                    return false
                }
                if (stack.length > 0) {
                    stack.pop()
                } else {
                    return false
                }
                
            }
        }
        return stack.length === 0;

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

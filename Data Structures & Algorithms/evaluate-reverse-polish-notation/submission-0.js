const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
};

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens) {
        let stack = new Array()
        for (let t of tokens) {
            let value = parseInt(t)
            if (!isNaN(value)) {
                //is digit
                stack.push(value)
            } else {
                //is operand
                let r = stack.pop()
                let l = stack.pop()
                let result = operators[t](l, r)
                console.log(result)
                stack.push(result)
            }
        }
        return stack.pop()
    }
}

class MinStack {
    constructor() {
        this.stack = new Array()
        this.min = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.min.length<1 || val <= this.min[this.min.length - 1]) {
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.min[this.min.length - 1] === this.stack[this.stack.length - 1]) {
            this.min.pop()
        }
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}

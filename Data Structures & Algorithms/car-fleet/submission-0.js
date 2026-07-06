class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((p, i) => {
            return {
                position: p,
                speed: speed[i],
                time: (target - p) / speed[i]
            }
        }).sort((a, b)=> b.position - a.position)
        let stack = []
        for (let car of cars) {
            stack.push(car.time)
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }
        return stack.length
    }
}

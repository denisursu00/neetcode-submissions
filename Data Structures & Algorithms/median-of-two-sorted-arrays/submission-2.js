class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1
        let B = nums2

        const total = A.length + B.length
        const half = Math.floor((total + 1) / 2)

        if (B.length < A.length) {
            [A, B] = [B, A]
        }

        let l = 0
        let r = A.length
        while (l <= r) {
            let midA = Math.floor((l + r) / 2)
            let midB = half - midA

            const Aleft = midA > 0 ? A[midA - 1] : Number.MIN_SAFE_INTEGER
            const Aright = midA < A.length ? A[midA] : Number.MAX_SAFE_INTEGER
            const Bleft = midB > 0 ? B[midB - 1] : Number.MIN_SAFE_INTEGER
            const Bright = midB < B.length ? B[midB] : Number.MAX_SAFE_INTEGER

            if (Aleft <= Bright && Aright >= Bleft) {
                if (total % 2 !== 0) {
                    return Math.max(Aleft, Bleft)
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
            } else if (Aleft > Bright) {
                r = midA - 1
            } else {
                l = midA + 1
            }
        }
        return -1
    }
}

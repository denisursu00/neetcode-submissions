class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlpha(c) {
        return ('a' <= c && c <= 'z') ||
               ('A' <= c && c <= 'Z') ||
               ('0' <= c && c <= '9')
    }

    isPalindrome(s) {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            while (left < right && !this.isAlpha(s[left])) {
                left++
            }
            while (left < right && !this.isAlpha(s[right])) {
                right--
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }
        return true
    }
}

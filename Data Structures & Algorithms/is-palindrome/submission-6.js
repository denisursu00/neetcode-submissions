class Solution {

    isAlpha(chr) {
        return ("a" <= chr && "z" >= chr) ||
            ("A" <= chr && "Z" >= chr) ||
            ("0" <= chr && "9" >= chr)
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            while (left < right && !this.isAlpha(s[left])) {
                left++;
            }
            while (left < right && !this.isAlpha(s[right])) {
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

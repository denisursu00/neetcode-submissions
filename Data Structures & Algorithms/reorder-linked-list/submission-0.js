/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        let right = slow.next
        slow.next = null
        let prev = null
        while (right !== null) {
            let next = right.next
            right.next = prev
            prev = right
            right = next
        }

        let left = head
        right = prev
        while (right !== null) {
            const tmp1 = left.next
            const tmp2 = right.next
            left.next = right
            right.next = tmp1
            left = tmp1
            right = tmp2
        }

    }
}

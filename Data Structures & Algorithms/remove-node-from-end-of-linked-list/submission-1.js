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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEndTwoPointer(head, n) {
        let dummy = new ListNode(head.val - 1, head)
        let left = dummy
        let right = head

        while (n > 0) {
            right = right.next
            n--
        }

        while (right !== null) {
            left = left.next
            right = right.next
        }

        left.next = left.next.next
        return dummy.next
    }

    removeNthFromEnd(head, n) {
        let N = 0
        let current = head
        while (current) {
            N++
            current = current.next
        }

        const index = N - n

        if (index === 0) {
            return head.next
        }

        current = head
        for (let i = 0; i < index; i++) {
            if (i === index - 1) {
                current.next = current.next.next
            }
            current = current.next
        }
        return head
    }
}

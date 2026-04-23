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
     * @return {ListNode}
     */
    reverseList(head) {
        // head -> null
        if (!head || head.val === undefined || head.val === null) {
            return head;
        }

        // head is present
        let curr = head;
        let prev = null;

        while (curr !== null) {
            const next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        if (curr === null) {
            head = prev;
        }

        return head;
    }
}

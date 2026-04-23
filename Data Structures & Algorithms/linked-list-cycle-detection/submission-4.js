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
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head;
        let hasCycle = false;

        while (curr !== null) {
            if (curr.seen === true) {
                hasCycle = true;
                break;
            }
            curr.seen = true;
            curr = curr.next;
        }

        
        return hasCycle;
    }
}

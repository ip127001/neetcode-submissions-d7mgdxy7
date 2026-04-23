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
        const obj = {};
        let curr = head;
        let hasCycle = false;
        let i = 0;

        while (curr !== null) {
            console.log("curr", curr)
            
            const key = curr.val;

            // if (obj[key] === undefined) {
            //     obj[key] = i;
            // } else {
            //     const index = obj[key];
            //     if (index < i) {
            //         hasCycle = true;
            //         break;
            //     }
            // }

            if (curr.seen === true) {
                hasCycle = true;
                break;
            }
            curr.seen = true;
            curr = curr.next;
            i++;

            // if (i === 8) {
            //     break;
            // }
        }

        
        return hasCycle;
    }
}

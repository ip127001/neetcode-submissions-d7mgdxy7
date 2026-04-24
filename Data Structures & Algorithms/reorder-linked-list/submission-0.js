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
        let curr = head;
        let i = 0;

        while (curr !== null) {
            i++;
            curr = curr.next;
        }

        const mid = Math.floor((i-1)/2);

        curr = head;
        let leftHalf = head;
        let rightHalf;
        let j = 0;
        while (j <= mid) {
            if (j === mid) {
                rightHalf = curr.next;
                curr.next = null;
                break;
            }
            j++;
            curr = curr.next;
        }

        console.log("two halves", leftHalf, rightHalf)

        let curr2 = rightHalf;
        let prev = null;
        while (curr2 !== null) {
            let next = curr2.next;
            curr2.next = prev;
            prev = curr2;
            curr2 = next;
        }
        rightHalf = prev;
        console.log("reverse 2nd half", rightHalf)

        let curr1 = leftHalf;
        curr2 = rightHalf
        while (curr1 !== null && curr2 !== null) {
            const next1 = curr1.next;
            const next2 = curr2.next;

            curr1.next = curr2;
            curr2.next = next1;
            
            curr1 = next1;
            curr2 = next2;
        }

        console.log("combined 1st and 2nd half", leftHalf)
    }
}

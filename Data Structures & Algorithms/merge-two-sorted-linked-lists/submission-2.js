/**
 * Definition for singly-linked list.
 * **/
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
 

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;
        let curr = null;
        let resultHead = null;

        while (curr1 !== null && curr2 !== null) {
            const min = curr1.val < curr2.val ? curr1.val : curr2.val;
            
            if (curr === null) {
                curr = new ListNode();
                curr.val = min;
                resultHead = curr;
            } else {
                curr.next = new ListNode();
                curr.next.val = min;
                curr = curr.next;
            }

            if (curr1.val < curr2.val) {
                curr1 = curr1.next;
            } else {
                curr2 = curr2.next;
            }
        }

        while (curr1 !== null) {
            if (curr === null) {
                curr = new ListNode();
                curr.val = curr1.val;
                resultHead = curr;
            } else {
                curr.next = new ListNode();
                curr.next.val = curr1.val;
                curr = curr.next;
            }
            
            curr1 = curr1.next;
        }

        while (curr2 !== null) {
            if (curr === null) {
                curr = new ListNode();
                curr.val = curr2.val;
                resultHead = curr;
            } else {
                curr.next = new ListNode();
                curr.next.val = curr2.val;
                curr = curr.next;
            }

            curr2 = curr2.next;
        }

        return resultHead;
    }
}

#  Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
### Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
### Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
### Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

### Constraints:

##### The number of nodes in each linked list is in the range [1, 100].
##### 0 <= Node.val <= 9
##### It is guaranteed that the list represents a number that does not have leading zeros.

## Approch 01
```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ans = new ListNode();
    let cur = ans;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry != 0) {
        let val1 = 0
        let val2 = 0
        if(l1 !== null && l1.val) { val1 = l1.val} else { val1= 0}
        if(l2 !== null && l2.val) { val2 = l2.val} else { val2= 0}
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1 !== null && l1?.next !== null) l1 = l1.next; else l1 = null;
        if (l2 !== null && l2?.next !== null) l2 = l2.next; else l2 = null;
    }
    return ans.next
};

```

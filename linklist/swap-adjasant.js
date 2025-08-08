/**
24. Swap Nodes in Pairs
Solved
Medium
Topics
premium lock icon
Companies
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:



Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead = null;
    let curNode = head;
    let prevNode = null;
    while(curNode?.next){
        let nextNode = curNode.next;
        curNode.next = nextNode.next;
        nextNode.next = curNode;
        if(prevNode){
            prevNode.next = nextNode;
        }
        prevNode = curNode
        curNode = curNode?.next;
        if(!newHead){
            newHead = nextNode;
        }
    }
    return newHead ?? head;
};

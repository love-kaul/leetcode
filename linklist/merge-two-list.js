/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sortedListHead;
    if(list1 && list2){
        sortedListHead = list1.val < list2.val ? list1 : list2;
    } else {
        sortedListHead = list1 ?? list2;
    }
    let firstListNode = list1;
    let secondListNode = list2;
    let isEdgeOnSecondList = sortedListHead === list2;
    while(firstListNode && secondListNode){
        if(firstListNode.val < secondListNode.val){
            if(firstListNode.next?.val < secondListNode.val){
                firstListNode = firstListNode.next;
            } else {
                firstListNode = updateEdges(firstListNode,secondListNode);
                isEdgeOnSecondList = true;
            }
        } else if(secondListNode.val < firstListNode.val){
            if(secondListNode.next?.val < firstListNode.val){
                secondListNode = secondListNode.next;
            } else {
                secondListNode = updateEdges(secondListNode,firstListNode);
                isEdgeOnSecondList = false;
            }
        } else {
            if(isEdgeOnSecondList){
                secondListNode = updateEdges(secondListNode,firstListNode);
                isEdgeOnSecondList = false;
            } else {
                firstListNode = updateEdges(firstListNode,secondListNode);
                isEdgeOnSecondList = true;
            }
        }
    }
    return sortedListHead;
};


function updateEdges(firstNode, secondNode) {
    let tmpNode = firstNode.next;
    firstNode.next = secondNode;
    firstNode = tmpNode;
    return firstNode;
}

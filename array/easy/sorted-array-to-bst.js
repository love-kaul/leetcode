/**


Code
Testcase
Test Result
Test Result
108. Convert Sorted Array to Binary Search Tree
Solved
Easy
Topics
premium lock icon
Companies
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

**/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return genTree(new TreeNode(), nums);
};

function genTree(node,arr) {
    if(!arr.length){
        return  null;
    } else {
        let mid = Math.floor(arr.length / 2);
        console.log(arr, mid, arr.slice(0, mid), arr.slice(mid+1, arr.length) );
        node.val = arr[mid];
        node.left = genTree(new TreeNode(),arr.slice(0, mid));
        node.right = genTree(new TreeNode(),arr.slice(mid+1, arr.length));
        return node;
    }
}

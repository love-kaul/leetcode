/**
448. Find All Numbers Disappeared in an Array
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
**/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0;i<nums.length;i++){
        let el = Math.abs(nums[i]);
        if(nums[el-1] > 0){
            nums[el-1] = -nums[el-1];
        }
    }
    let resp = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            resp.push(i+1);
        }
    }
    return resp;
};

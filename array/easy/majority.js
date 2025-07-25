/**
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    let i=1;
    let half = Math.floor(nums.length / 2);
    while(i<nums.length){
        if(nums[i] == candidate){
            count++;
        } else {
            count--;
        }
        if(!count){
            candidate = nums[i];
            count = 1;
        }
        i++;
    }
    return candidate;
};

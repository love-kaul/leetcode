/**
283. Move Zeroes
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
**/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    while(i<nums.length-1){
        if(!nums[i]){
            let j=i+1;
            while(!nums[j] && j<nums.length){
                j++;
            }
            if(nums[j]){
                [nums[i],nums[j]] = [nums[j],nums[i]];
            } else {
                // no non-zero values left
                break;
            }
        }
        i++;
    }
};

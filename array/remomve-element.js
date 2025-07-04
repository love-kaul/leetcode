/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            let tmp = nums[k];
            nums[k] = nums[i];
            nums[i] = tmp;
            k++;
        }
    }
    return k;
};

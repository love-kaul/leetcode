/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=0;
    let dupMap={};
    let i=0;
    while(i<nums.length && nums[i]!='_'){
        if(dupMap[nums[i]]){
            nums.splice(i,1);
            nums.push('_');
        } else {
            dupMap[nums[i]] = 1;
            k++;
            i++;
        }
    }
    return k;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const elmMap = new Map();
    let pair = [];
    nums.forEach((elm,idx) => {
        elmMap.set(elm,idx);
    });
    for(const [idx,elm] of nums.entries()){
        const otherIdx = elmMap.get(target - elm);
        if(otherIdx > -1 && otherIdx != idx){
            pair = [idx,elmMap.get(target - elm)];
            break;
        }
    }
    return pair;
};

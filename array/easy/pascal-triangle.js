/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let resp = [[1]];
    let rowNo = 1;
    while(rowNo < numRows){
        resp[rowNo]=[1];
        if(resp[rowNo-1].length > 1){
            let left = 0;
            let right = 1;
            while(right<resp[rowNo-1].length){
                resp[rowNo].push(resp[rowNo-1][left]+resp[rowNo-1][right]);
                left++;
                right++;
            }
        }
        resp[rowNo].push(1);
        rowNo++;
    }
    return resp;
};

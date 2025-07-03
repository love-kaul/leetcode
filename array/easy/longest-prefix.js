/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longPrefix = '';
    let isSameCharInAll = true;
    let isEmptyElm = false;
    let i=0;
    while(1) {
        if(!strs[0][i]){
            break;
        }
        for(let j=1;j<strs.length;j++){
            console.log(j,i,strs[j][i],strs[j-1][i])
            if(!strs[j] || !strs[j][i]){
                isEmptyElm = true;
                break;
            }
            if(strs[j][i] !== strs[j-1][i]) {
                isSameCharInAll = false;
                break;
            }
        }
        console.log(isEmptyElm,isSameCharInAll)
        if(isEmptyElm){
            break;
        }
        if(isSameCharInAll){
            longPrefix+=strs[0][i];
        } else {
            break;
        }
        i++;
    }
    return longPrefix;
};

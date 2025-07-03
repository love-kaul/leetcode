/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let revNo = 0;
    let num = x;
    if(x < 0 || (x > 0 && x%10 === 0)){
        return false;
    }
    while(parseInt(num) != 0){
        revNo = (revNo * 10) + (num % 10);
        num = parseInt(num / 10);
    }
    return revNo === x;
};

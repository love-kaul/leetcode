/**
1417. Reformat The String
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

Example 1:

Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
Example 2:

Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.
Example 3:

Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.
**/

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let digits = [];
    let alphabets = [];
    for (let i=0;i<s.length;i++){
        let intParse = parseInt(s[i]);
        if(intParse >= 0 && intParse <=9){
            digits.push(s[i]);
        }else {
            alphabets.push(s[i]);
        }
    }
    let diff = digits.length - alphabets.length;
    let permutationStr = '';
    if([0,1,-1].includes(diff)){
        let i=0;
        while(i<alphabets.length || i<digits.length){
            if(alphabets[i] && digits[i]){
                if(alphabets.length > digits.length){
                    permutationStr+=alphabets[i]+digits[i];
                } else {
                    permutationStr+=digits[i]+alphabets[i];
                }
            } else if(alphabets[i]){
                permutationStr+=alphabets[i];
            } else {
                permutationStr+=digits[i];
            }
            i++;
        }
    }
    return permutationStr;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketsStack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            bracketsStack.push(s[i]);
        } else {
            let popedBr = bracketsStack.pop();
            if((popedBr === '(' && s[i] === ')') || (popedBr === '[' && s[i] === ']') || (popedBr === '{' && s[i] === '}')){
                continue;
            } else {
                return false;
            }
        }
    }
    return bracketsStack.length === 0;
};

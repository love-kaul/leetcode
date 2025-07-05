/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let sum = parseInt(a,2) + parseInt(b,2);
    // return sum.toString(2);

    // const sum = BigInt('0b' + a) + BigInt('0b' + b);
    // return sum.toString(2);
    const maxLength = Math.max(a.length,b.length);
    let f = a.padStart(maxLength, '0');
    let s = b.padStart(maxLength, '0');
    let opMap = {
        '00' : {
            v : '0',
            c : '0'
        },
        '10' : {
            v : '1',
            c : '0'
        },
        '01' : {
            v : '1',
            c : '0'
        },
        '11' : {
            v : '0',
            c : '1'
        }
    };
    let outputStr='';
    let carry = '0';
    for(let i = maxLength - 1; i > -1 ; i-- ){
        let res = opMap[f[i]+s[i]];
        if(carry === '1'){
            res = opMap[res.v+carry];
            if(f[i] === '0' && s[i] === '0'){
              carry = '0';
            }
        } else {
          carry = res.c;
        }
        outputStr = res.v + outputStr;
    }
    if(carry === '1'){
        outputStr = carry + outputStr;
    }
    return outputStr;
};

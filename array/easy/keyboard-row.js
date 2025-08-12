/**
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
**/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    return words.filter(word => {
        const lower = word.toLowerCase();
        let targetRow;

        if (row1.has(lower[0])) targetRow = row1;
        else if (row2.has(lower[0])) targetRow = row2;
        else targetRow = row3;

        return [...lower].every(ch => targetRow.has(ch));
    });
};

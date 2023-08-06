/**
 * anna => anna - pallindrome
 * @param {string} word
 * @return {boolean}
 */

function pallindrome(word) {
    // const reverseWord = word
    //     .split('')
    //     .reverse()
    //     .join(); O(n*3)

    // let reverseWord = '';
    // for(let i= word.length - 1; i >= 0; i--) {
    //     reverseWord += word.charAt(i);
    // } // O(n)

    // divide & conquer
    for (let i = 0; i <= word.length / 2; i++) {
        if(word.charAt(i) !== word.charAt(word.length - 1 - i)) {
            return false;
        } else {
            return true;
        }
    } // O(n/2) => O(n)

}

console.log(pallindrome('anna'));
console.log(pallindrome('react'));
console.log(pallindrome('anrna'));
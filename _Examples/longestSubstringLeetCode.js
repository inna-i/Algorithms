/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLen = 0;
  const lastPos = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastPos.has(ch) && lastPos.get(ch) >= left) {
      left = lastPos.get(ch) + 1;
    }

    lastPos.set(ch, right);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Example 1:
// Input: s = 'abcabcbb'
// Output: 3
// Explanation: The answer is 'abc', with the length of 3.

// Example 2:
// Input: s = 'bbbbb'
// Output: 1
// Explanation: The answer is 'b', with the length of 1.

// Example 3:
// Input: s = 'pwwkew'
// Output: 3
// Explanation: The answer is 'wke', with the length of 3.
// Notice that the answer must be a substring, 'pwke' is a subsequence and not a substring.

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('anviaj')); // 5

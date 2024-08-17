# Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
### Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
### Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
### Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
### Constraints:
##### 0 <= s.length <= 5 * 104
##### s consists of English letters, digits, symbols and spaces.

## Approch 01
```ts
function lengthOfLongestSubstring(s: string): number {
    let window = new Set()
    let left = 0;
    let ans = 0;
    for (let j = 0; j < s.length; j++) {
        while (window.has(s[j])) {
            window.delete(s[left]);
            left++;
        }
        window.add(s[j]);
        ans = Math.max(ans, j - left + 1);
    }
    return ans
};


```

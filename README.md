#  Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
### Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
### Example 2:

Input: s = "cbbd"
Output: "bb"
 
### Constraints:
##### 1 <= s.length <= 1000
##### s consist of only digits and English letters.

## Approch 01

```ts
function longestPalindrome(s: string): string {

    let ans = ''
    let ansLength = 0
    for (let i = 0; i < s.length; i++) {
        // if (s.length % 2 === 0) {
        let l = i
        let r = i + 1
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > ansLength) {
                ans = s.slice(l, r + 1)
                ansLength = r - l + 1
            }
            l--
            r++
        }
        // }
        // else {
        l = i
        r = i
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > ansLength) {
                ans = s.slice(l, r + 1)
                ansLength = r - l + 1
            }
            l--
            r++
        }
        // }
    }
    return ans
};
````

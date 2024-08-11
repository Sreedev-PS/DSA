# Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

#### Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
#### Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

### Constraints:

#### 1 <= strs.length <= 200
#### 0 <= strs[i].length <= 200
#### strs[i] consists of only lowercase English letters.
## Approch 01

```ts
function longestCommonPrefix(strs: string[]): string {
    let commonString: string = '';
    let backUpString: string = '';
    if (strs.length == 0) return commonString;
    else if (strs.length == 1) return strs[0];
    else {
        for (let j = 0; j < strs[0].length; j++) {
            let isHave: boolean = true;
            let matchValue = strs[0][j];
            for (let i = 0; i < strs.length; i++) {
                if (strs[i][j] == undefined) isHave = false;
                else {
                    if (strs[i][j] != matchValue) isHave = false;
                }
            }
            if (isHave) backUpString = backUpString + matchValue;
            else {
                if (commonString.length < backUpString.length) commonString = backUpString;
                backUpString = "";
                break;
            }
        }
    }
    if (commonString.length == 0 && backUpString.length != 0) commonString = backUpString
    return commonString;
};
```

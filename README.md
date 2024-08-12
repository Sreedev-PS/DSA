# Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
### Example 1:

Input: s = "()"
Output: true
### Example 2:

Input: s = "()[]{}"
Output: true
### Example 3:

Input: s = "(]"
Output: false
 
### Constraints:

#### 1 <= s.length <= 104
#### s consists of parentheses only '()[]{}'.

## Approch 01
```ts
function isValid(s: string): boolean {
    const stack = new Array();
    let isStackActive: boolean = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
            isStackActive = true;
        }
        else {
            if (s[i] === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                if (s[i] === ')') {
                    return false;
                    break;
                }
            }
            if (s[i] === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                if (s[i] === '}') {
                    return false;
                    break;
                }
            }
            if (s[i] === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                if (s[i] === ']') {
                    return false;
                    break;
                }
            }
        }
    }
    if (stack.length == 0 && isStackActive) return true;
    else return false;

};
```

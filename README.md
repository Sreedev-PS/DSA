# Concatenation of Array

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Approch 01
```ts
getResult(nums:any){
    nums = JSON.parse(nums)
    const ans = new Array(nums.length*2).fill(0)
    for(let i = 0; i<nums.length;i++){
      ans[i]=nums[i];
      ans[i+nums.length] = nums[i]
    }
    return ans
  }
```

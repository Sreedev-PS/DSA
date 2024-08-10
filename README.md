# Number of Good Pairs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Approch 01
```ts
 numIdenticalPairs(nums:any): number {
    nums = JSON.parse(nums)
    let ans = 0;
    const hashObject:any={};
    for(let i=0;i<nums.length;i++){
        if(hashObject[nums[i]] == undefined){
            hashObject[nums[i]]=0;
        }else{
            hashObject[nums[i]]++;
            ans = ans + hashObject[nums[i]];
        }
    }
    return ans
};
```
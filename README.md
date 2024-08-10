# TwoSum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Approch 01
** export class AppComponent {
  value:any =''

  minimumOperations(nums:any): number {
    nums = JSON.parse(nums)
    let n = 0;
    for(let i in nums){        
        nums[i]%3 != 0 ? n++ :'';
    }
    return n;
  };
} **

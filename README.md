# TwoSum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
##
```ts
export class AppComponent {
  title = 'twoSum';
  inputArray:string = ''
  value:number = 0
  result:any[] = []


  getValue(){
    let input = JSON.parse(this.inputArray) || []
    this.twoSum(input,this.value)// method 1
    this.twoSum2(input,this.value) // method 2
    this.twoSum3(input,this.value) // method 3
  } 
```
## Approch 01
  twoSum3(nums: number[], target: number): number[] {
    this.result = []
    const mapArray = new Map()
    for(let i=0;i<nums.length;i++){
      const difference = target - nums[i]
      if(mapArray.has(difference)){
        this.result = [mapArray.get(difference),i]
      }
      mapArray.set(nums[i],i)
    }
    return this.result
  }
## Approch 02
  twoSum2(nums: number[], target: number): number[] {
    this.result = []
    const hash:{[key:number]:number} = {}
    for(let i = 0;i<nums.length;i++){
      const difference = target-nums[i]
      if(hash[difference] != undefined){
        this.result = [hash[difference],i]
      }
      hash[nums[i]] = i
    }
    return this.result
  }
## Approch 03
  twoSum(nums: number[], target: number): number[] {
    let mapArray: any = {}
    this.result = []
    nums.forEach((x: any, index: any) => {
        let secondNumber = target - x
        if (mapArray[secondNumber] == undefined) {
            mapArray[secondNumber] = index
        } else {
            this.result = [mapArray[secondNumber], index]
        }
    })
    return this.result
  };


}

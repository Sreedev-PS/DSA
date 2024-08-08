import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'twoSum';
  inputArray:string = ''
  value:number = 0
  result:any[] = []


  getValue(){
    // this.result = []
    // if(this.inputArray == ''||this.value == 0){
    //   return window.alert('Please Enter Both Values')
    // }else{
    //   let mapArray:any = {}
    //   let input = JSON.parse(this.inputArray) || []
    //   input.forEach((x:number,i:number) => {
    //     let difference = this.value - x
    //     if(mapArray[difference] == undefined){
    //       mapArray[x] = i
    //     }else{
    //       this.result = [mapArray[difference],i]
    //     }
    //   });
    // }
    let input = JSON.parse(this.inputArray) || []
    this.twoSum(input,this.value)// method 1
    this.twoSum2(input,this.value) // method 2
    this.twoSum3(input,this.value) // method 3
  }

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



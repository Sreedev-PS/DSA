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
  value:any = ''

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
}

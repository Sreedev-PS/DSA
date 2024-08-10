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
  value:any =''

  getResult(nums:any){
    nums = JSON.parse(nums)
    const ans = new Array(nums.length*2).fill(0)
    for(let i = 0; i<nums.length;i++){
      ans[i]=nums[i];
      ans[i+nums.length] = nums[i]
    }
    return ans
  }
}

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

  minimumOperations(nums:any): number {
    nums = JSON.parse(nums)
    let n = 0;
    for(let i in nums){        
        nums[i]%3 != 0 ? n++ :'';
    }
    return n;
  };
}

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

  finalValueAfterOperations(operations: any): number {
    operations = JSON.parse(operations)
    let x = 0;
    for(let i of operations){
        if(i==="--X")x--;
        if(i==="X--")x--;
        if(i==="X++")x++;
        if(i==="++X")x++;
    }
    return x;
};
}

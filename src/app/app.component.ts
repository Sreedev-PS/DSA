import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'twoSum';
  value:any = ''
  result:any[] = []

  getValue(){
    let input = JSON.parse(this.value)
    for(let i=0; i<input.length; i++ ){
      this.result[i] = input[input[i]]
    }
  }
}

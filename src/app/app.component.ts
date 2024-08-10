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
  getValue2(){ //second method can use to do without creating new array.. so need to change result from my code and place appropriate input variable ... its just an algorithm need to make it as what u want
    let input = JSON.parse(this.value)
    for(let i=0; i<input.length; i++ ){
      this.result[i] = input[i]+input.length*( input[input[i]] % input.length)
    }

    for(let i=0; i<this.result.length; i++ ){
      this.result[i] = Math.floor(this.result[i]/this.result.length) // both input and result are same so we can use the input array. without creating an additional array
    }
  }
}

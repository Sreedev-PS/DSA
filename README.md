# TwoSum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Approch 01
```ts
  getValue(){
    let input = JSON.parse(this.value)
    for(let i=0; i<input.length; i++ ){
      this.result[i] = input[input[i]]
    }
  }
```
## Approch 02
```ts
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
```

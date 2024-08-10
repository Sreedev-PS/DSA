# Final Value of Variable After Performing Operations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Approch 01

```ts
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
```
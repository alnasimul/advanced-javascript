
// var numbers = [2,3,5,7,6,9];
// var output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result  = element * element;
//     output.push(result); 
// }

// console.log(output);

let numbers = [2,3,4,5,8,9,7];

let result  = numbers.map( x => x * x);

let output = result.filter( x => {
    if(x % 2 === 0 )
    return x;
});

console.log(result);
console.log(output);
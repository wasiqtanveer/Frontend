// .reduce() is a method that executes a reducer function on each element of the array, resulting in a single output value.
// It can be used to sum numbers, concatenate strings, or even flatten arrays.

let numbers = [1,2,3,4,5];
// Example 1: Summing numbers in an array
let total = numbers.reduce(sum)
console.log(total); // Outputs: 15

function sum(accumulator,current)
{
    return accumulator + current;
}



// Method chaning
// is used to call multiple methods on the same object in a single line of code.
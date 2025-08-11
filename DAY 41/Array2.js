// Merging 2 arrays
let marvel = ["ironman", "hulk", "thor"];
let dc = ["batman", "superman", "flash"];

// not a good approach
// marvel.push(dc);
// console.log(marvel); // not ideal, dc is added as a single element


// good approach
// Using concat method
console.log("concat method");
let array2 = marvel.concat(dc);
console.log(array2);

// Using spread operator
console.log("spread method");
let array3 = [...marvel,...dc];
console.log(array3);



//Nested Arrays
let nested = [1,2,3,[4,5,6,],3,3,1,[1,2,[3,5,9,7]]];
// this can be leveled up to any depth
console.log(nested.flat(Infinity));//infinity flattens all levels of nested arrays



// Conversion to array 
let string = "wasiq";
console.log(Array.isArray(string)); // false, string is not an array

//converting string to array
arr = Array.from(string); // Converts string to an array of characters
console.log(Array); // Outputs: ['w', 'a', 's', 'i', 'q']

Array.from({name: "wasiq", age: 20}); // this give undefined because from method expects an iterable or array-like object
// can convert on keys or values of an object to array




let a = 1
let b = 2;
let c = 3;

console.log(Array.of(a, b, c));
//Array declarations
let array1 = [1, 2, 3, 4, 5];// Array with numbers
let array2 = [1,2,3,"wasiqb", true, null];// Array with mixed types
let array = new Array(1,2,3,4,5)// Array using the constructor no need for brackets it does that automatically

// array methods
// array1.push(6); // Adds 6 to the end of array1
// console.log(array1);

// array1.pop(); // Removes the last element from array1
// console.log(array1);

// array1.shift(); // Removes the first element from array1
// console.log(array1);

// array1.unshift(0); // Adds 0 to the beginning of array1
// console.log(array1);

// console.log(array1.includes(2)); // Checks if 2 is in array1
// console.log(array1.indexOf(3)); // Finds the index of 3 in array1

// const newarray = array1.join()// Joins all elements of array1 into a string
// console.log(newarray);
// console.log(typeof(newarray));// Outputs the type of newarray, which is a string



// difference between slice and splice
let originalArray = [1, 2, 3, 4, 5];

//slice
let slicedArray = originalArray.slice(1, 4); // Extracts elements from index 1 to 3
console.log("Original Array:",originalArray); // Original array remains unchanged
console.log("Sliced Array:",slicedArray); // Outputs: [2, 3, 4]


//splice
let splicedArray = originalArray.splice(1, 3); // Removes 3 elements starting from index 1
console.log("Original Array:", originalArray); // Original array is modified to [1, 5]
console.log("Spliced Array:", splicedArray); // Outputs: [2, 3, 4]



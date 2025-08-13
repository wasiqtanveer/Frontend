// findlast()
array = [1,2,3,4,5,6,7,8,9]


let lastEven = array.findLast(number => number%2 === 0);


console.log("the last even number from the array is :", lastEven);//8

// find lastindex()
let lastIndexEven = array.lastIndexOf(lastEven);
console.log("the index of the last even number from the array is :", lastIndexEven); //7


// some()
// it checks if atleast one element passes the test, if so it returns true 
// otherwise false

let lessthan = array.some(number => number < 2)
console.log(lessthan); // true

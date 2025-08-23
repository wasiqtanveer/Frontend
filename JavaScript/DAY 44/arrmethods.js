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


//every()
// it checks if all elements pass the test, if so it returns true
// otherwise false

let greaterthan = array.every(number => number > 0)
console.log(greaterthan); // true



//flat map()
//Its a mixture of flat() and map() method
// map() part → turned each num into [num, num*2]
// → [[1,2], [2,4], [3,6]]

// flat() part → removed one nesting level
// → [1, 2, 2, 4, 3, 6]

let newarr = [1,2,3]
let flat = newarr.flatMap(number => [number, number * 2])

console.log(flat);



// sorted() and tosorted()
// sorted() changes the original array
// tosorted() returns a new sorted array without changing the original
let unsort = [4,2,7,4,12,312,64,43,123,64]

// sort() in JavaScript works differently for strings and numbers:
// 1. By default, sort() converts elements to strings and sorts them alphabetically.
//    Example: [10, 2, 30] becomes ["10", "2", "30"] → sorted as ["10", "2", "30"] → [10, 2, 30]
// 2. For numbers, we must provide a compare function: (a, b) => a - b
//    - If result < 0 → a comes before b
//    - If result > 0 → b comes before a
//    - If result = 0 → order stays the same

unsort.sort((a, b) => a - b);
console.log(unsort);

//tosort()
let sortto = unsort.toSorted((a,b) => a - b);
console.log(sortto); 


// let students = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 22 },
//     { name: "Jim", age: 21 }
// ];

// let groupByAge = students.group(student => student.age);
// console.log(groupByAge);


let whole = [1,3,4,3,5,3]
let done = whole.fill(0)
console.log(done);


// use case of with()

let change = ["wasiq" , "haseeb","haziq", " faiq "]

let after = change.with("wasiq" , "Atiq")
console.log(change);//["wasiq" , "haseeb","haziq", " faiq "]
console.log(after);//["Atiq" , "haseeb","haziq", " faiq "]

// 1. Destructuring Arrays
//  Create an array of 5 fruits or numbers.
let array = ["Apple🍎","Mango🥭", "Pineapple🍍" , "Pear🍐" , "Watermelon🍉" ]
//  Use array destructuring to extract:
//  The first two items
let result = [...array.slice(0,2), ...array.slice(-2)]

//  Skip an item and get the last two
//  Print them using console.log().
console.log(result);



// 2. Destructuring Objects
// • Create an object with properties: name, age, location, and a nested skills array.
const obj = 
{
    name : "Wasiq",
    Age : 23,
    Location : "Lahore",
    Skills : ["HTML", "CSS", "JavaScript", "React"]
}

const {name , Age , Location} = obj
console.log(name);
console.log(Age);
console.log(Location);

const [skill1 , skill2, skill3, skill4] = obj.Skills
console.log(skill1);
console.log(skill2);
console.log(skill3);


// • Use object destructuring to extract name and location.
// • Destructure the nested skills array into separate variables.

// 3. The Spread Operator (...)
// • Create two arrays (e.g., frontendSkills and backendSkills) and merge them using the spread
// operator.
let forntend = ["html", "css", "js", "react"]
let backend = ["mongo", "express", "nodejs"]

let arr = [...forntend,...backend]
console.log(arr);


// • Clone an object and add a new key using spread syntax.

let boy =
{
    name: "Ali",
    Age: 23
}

let copy = 
{
    ...boy,
    hobby : "football"
}


// • Show that the original object/array is unaffected (prove with logging).
console.log(boy);
console.log(copy);// will have an additional attribute


// 4. Rest Pattern and Parameters
// • Use the rest pattern to:
//   ->Destructure an array where the first value is extracted and the rest are collected into
//     another variable.
let Destructure = [10,20,30,40,50]

const [first,...rest] = Destructure
console.log(first);
console.log(rest);

//   ->Create a function that accepts any number of parameters and sums them using the rest
//     parameter.
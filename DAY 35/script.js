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
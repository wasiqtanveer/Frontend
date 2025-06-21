//====================== 1. Basic Array Operations ======================
// Create an array let fruits = ["Apple", "Banana", "Mango"];
let fruits = ["Apple", "Banana", "Mango"];

// Add "Orange" to the end
fruits.push("orange")
console.log(fruits);

// Remove the first item
fruits.shift()
console.log(fruits);

// Add "Grapes" to the beginning
fruits.unshift("Grapes")
console.log(fruits);

// Find the index of "Mango"
console.log(fruits.indexOf("Mango"))

// Check if "Pineapple" exists in the array using .includes()
fruits.includes("pineapple") ? console.log("Yes"): console.log("No, it doesn't");



/*
Array pop()	    Removes the last element from an array
Array push()	Adds a new element to an array
Array shift()	Removes the first array element
Array unshift()	Adds a new element at the beginning of an array
*/



//====================== 2. Introduction to Objects ======================
console.log("====================== 2. Introduction to Objects ======================");

// Create an object person with the following properties:
// firstName, lastName, age, hobbies (array)
let person = 
{
    firstName : "wasiq",
    lastName : "tanveer",
    age : 22,
    hobbies : ["Games" , "Football" , "Coding" , "Movies"]
}
// Log the whole object and individual properties.
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);


// ====================== 3. Dot vs. Bracket Notation ======================
console.log("====================== 3. Dot vs. Bracket Notation ======================");

// Access and log firstName and hobbies using:
// Dot notation (person.firstName)
console.log(person.firstName);

// Bracket notation (person["hobbies"])
console.log(person["hobbies"]);

// Add a new property profession using both notations.
// person.profession = "Student"
// console.log(person);

person["profession"] = "IT professional"
console.log(person);//

// Comment the difference between the two notations.
/*
* Dot notation is cleaner, while brackets are more flexible like when there is space
  in the properties name we can use bracket[] notation 
*/

// ====================== 4. Object Methods ======================
console.log("====================== 4. Object Methods ======================");

// Add a method getSummary() to person that returns a string:
person.getSummary = function()
{
    return `${person.firstName} ${person.lastName} is ${person.age} years old and loves playing ${person.hobbies[0]}, ${person.hobbies[1]} and ${person.hobbies[2]}`
}
// John Doe is 25 years old and loves playing Football and Reading."
// Use this keyword inside the method.
// Call and log the result of person.getSummary().
console.log(person.getSummary()); 


// ====================== 5. Iteration: The for Loop ======================
console.log("====================== 5. Iteration: The for Loop ======================");

// Create an array let scores = [80, 92, 67, 75, 88];
let score = [80, 92, 67, 75, 88];
// Use a for loop to:
// Log each score individually.
let add = 0
for (let i=0; i<score.length; i++)
{
    console.log(score[i]);
    add += score[i]
}

// Calculate and log the total and average score.
console.log(`Sum of all the elements in Array is ${add}`);
console.log(`Average of all the elements in Array is ${add/(score.length)}`);
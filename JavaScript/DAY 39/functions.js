
//  Default Parameters
// Write a function with a default parameter (e.g., greet(name = 'Guest'))
// Call it with and without an argument
function greet(name = "Guest")
{
    console.log("hello",name);
    
}

greet("Wasiq")
greet()


// Value vs Reference
// Change a number inside a function → confirm original doesn’t change
let a = 20
let b = a
b = 10
console.log(a);

// Change an object inside a function → confirm original does change
let obj = {name:"wasiq"}
let cop = obj
cop.name = "tan"

// Try copying an object using spread operator and change the copy

let copy = {...obj}
copy.name = "tanveer"
console.log(obj.name); 
console.log(copy.name);


// First-Class & Higher-Order Functions
// Store a function in a variable and call it
const hi = function()
{
    console.log('hi');
}

const sayhi = hi
sayhi()

// Pass a function as an argument to another function
function studentname()
{
    return 'student'
}

function praise(callback)
{
    console.log("these are good",callback());
}
praise(studentname)
// Write a function that returns another function

function hello(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

const greethy = hello("HI")
greethy("wasiq")
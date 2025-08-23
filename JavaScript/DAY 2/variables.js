let name_ = "wasiq"
let age = 22
let learning_javascript = true
const birth_year = 2002


// console.log(name, age, learning_javascript, birth_year);
//                   OR
console.log(name_);
console.log(age);
console.log(learning_javascript);
console.log(birth_year);



/*   
there are 3 way to declare a variable in JavaScript
1. Using var (can be re-declared and updated)
example:
var name = "wasiq";
var name = "tanveer"; // re-declared no error  
var is global scope

2. Using let (can be updated but not re-declared in the same scope)
example:
let name = "wasiq";
let name = "tanveer"; // re-declared in the same scope will throw an error
name = "tanveer"; // updated no error
let is block scope

3. Using const (cannot be updated or re-declared)
example:
const name = "wasiq";
const name = "tanveer"; // re-declared will throw an error
name = "tanveer"; // updated will throw an error
const is block scope
   
*/

let university; // undefined variable
let department = null; // null variable

//======================= Object =========================
let student_1 =
{
    full_name: "wasiq",
    dept : "IOC",
    Semester : "4th"
}


//===================== Array ==============================

array = ["C++" , "Python" , "Java" ]

console.log(array);


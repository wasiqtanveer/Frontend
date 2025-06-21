//====================== Statement vs Expression ======================
//Statement
let year = 2025
if (year == 2025)
{
    year = 2023   
}
    /*Statement is the complete line of code that perform an action , it may include expression as well but it isn't limited to producing value only but ratehr ot does somehthing*/
// expression
2+3
"wasiq"
    /* Expression is a piece of code that give a value */
    
    


//====================== Ternary Operator Practice ======================


let age = 20; // (;) is important here to use ternary operator 
(age > 18) ? console.log("Your are an Adult"): console.log("You are a minor");

// console.log
// (
//     age>= 18 ? "Your are an Adult" : "You are a minor"
// );



//traditional practice
if (age >= 18)
{
    console.log("Your are an Adult")
}
else
{
    console.log("You are a minor")
}


//nested ternary operator
let score = 91;
let grade = score >= 90 ? "Excellent": // if score is 90 or above it will print excellent
            score >= 75 ? "good": 
            score >= 50 ? "Pass" : "Fail"; //if score is > 50, will print pass else fail


console.log(grade);

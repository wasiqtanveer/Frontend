//====================== Basic Operators ======================
// "use strict"
let num_1 = 10;
let num_2 = 20;

addition = num_1 + num_2 // addition automatically becomes a global variable as it is not declared (not a preferred way), use "use strict" to avoid this 
let subtraction = num_2 - num_1
let multiplication = num_1 * num_2
let division = num_1 / num_2
let modulus = num_1 % num_2

//====================== Console logs ======================
console.log("********** Basic Operators **********");

console.log("Sum of num 1 and num 2 is :",addition);
console.log("Difference of num 1 and num 2 is :",subtraction);
console.log("Product of num 1 and num 2 is :",multiplication);
console.log("Division of num 1 and num 2 is :",division);

//====================== Comparision Operators ======================
console.log("********** Comparision Operators **********");

console.log(5 > 8); // returns false
console.log(5 < 8); // returns true
console.log(5 <= 8); //returns true
console.log(5 >= 8); //returns false
console.log(5 == "5"); // returns ture as it just checks value not data-type
console.log(5 === "5"); // returns false as it checks value as well as data-type
console.log(5 != "6" ); // returns true, checks if value are not equal ignoring types
console.log(5 !== "5"); //return true , checks if value or data-type are not equal, if one is equal than returns ture

//====================== Logical operators ======================
console.log("********** Logical Operators **********");
console.log(1+3 == 4 && 4+0 == 4); // returns true
console.log(3+6 == 6 || 3+3 == 6); // return true
console.log(!true); // returns false (inverts the original value)


//====================== Part 2: Operator Precedence ======================

let expression = 5*2+3 // output: 13
console.log(expression);
console.log("after parentheses");
let expression_2 = 5*(2+3)
console.log(expression_2); // output: 25

//====================== Part 3: Strings and Template Literals ======================
let first_name = "wasiq"
let last_name = "Tanveer"
let full_name = first_name + " " + last_name
let language = "JavaScript" 
console.log("my name is "+ full_name);

let sentence = `My name is ${full_name} and i am learning ${language} `
console.log(sentence);


//====================== Part 4: If/Else Statement ======================
let marks = 49

if (marks >= 90 && marks <= 100)
    {
        console.log("Excellent");
    }
else if(marks >= 75 && marks < 90)
    {
        console.log("Good")     
    }    
else if(marks >= 50 && marks < 75)
    {
        console.log("Pass")     
    }    
else if(marks < 50)
    {
        console.log("Fail")     
    }    


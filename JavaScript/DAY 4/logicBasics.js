let age = 25;
let year = "2025";
let name = "wasiq";

// Convert year to a number using Number() and log the result.
console.log(Number(year));

// Convert age to a string using String() and log the result.
console.log(String(age));

// Try subtracting and adding year and age (observe coercion).
console.log(age + year);
console.log(age - year);

// Explain in comments what happens and why.
/*
    -> in addition it concats the age with year
       while,in subtraction it subtracts the age from year
    -> it happens because (+) is used for both concatenation and addition so 
       whenever JS sees "+" with a string it treats both the parties as strings and concats them
    -> while, as (-) is used with numbers only thats why it subtracts the age from number   
       
*/

//====================== Part 2: Truthy and Falsy Values ======================

let Array = [0, "", "Hello", undefined, null, NaN, 1, "false"];

for (let i = 0; i < Array.length; i++) 
    {
        if (Boolean(Array[i]) == true) 
            {
            console.log("Value is Truthy");
            } 
       
        else
            {
            console.log("value is Falsy");
            }
    }

//====================== Part 3: Equality Operators ======================
let num = 5;
let string = "5";

console.log(num == string); //returns ture
console.log(num === string); //returns false
/*
-> (==) compares only values regardless of what the datatype is
-> while, (===) compares the both value as well as datatype
*/

//====================== Part 4: Boolean Logic and Logical Operators =====================
let isUserLoggedIn = true;
let hasAccess = false;

// &&
if (isUserLoggedIn == true && hasAccess == true) 
    {
        console.log("User can access Dashboard");
    }

else if(isUserLoggedIn == true && hasAccess == false) 
    {
        console.log("User have no access to Dashboard");
    }

else if(isUserLoggedIn == false && hasAccess == true) 
    {
        console.log("User isn't logged in");
    }

    else(isUserLoggedIn == false && hasAccess == false) 
    {
        console.log("User isn't logged in and has no access to dashboard");
    }
 
    
    
// ||

if (isUserLoggedIn == true || hasAccess == true) 
    {
        console.log("User can access Dashboard");
    }
    
    else if(isUserLoggedIn == true || hasAccess == false) 
    {
        console.log("User have no access to Dashboard");
    }
    
    else if(isUserLoggedIn == false || hasAccess == true) 
    {
        console.log("User isn't logged in but can access the dashboard");
    }

else(isUserLoggedIn == false || hasAccess == false) 
    {
        console.log("User isn't logged in and has no access to dashboard");
    }

    
// (!) can be adjusted with both (&&) and (||) , all it does is it will invert their values like true = false and false = true
   

//====================== Part 5: Switch Statement =====================
let day = "Tuesday"

switch (day) //can use .tolowercase() to prevent casing problem
{
    case ("Monday"):
        console.log("today is Monday");
        break;            

    case ("Tuesday"):
        console.log("today is Tuesday");
        break;            

    case ("Wednesday"):
        console.log("today is Wednesday");
        break;

    case ("Thursday"):
        console.log("today is Thursday");
        break;           

    case ("Friday"):
        console.log("today is Friday");
        break;           

    case ("Saturday"):
        console.log("today is Saturday");
        break;            

    case ("sunday"):
        console.log("today is sunday");
        break;           

    default:
        console.log("Incorrect day entered");
        break;
            
}
// Hoisting and TDZ
// Write examples showing:
// A variable declared with var and accessed before declaration (hoisting)
// var myName;
// console.log(myName);
// myName = "wasiq" // results in undefined


// A variable declared with let and const inside and outside of the TDZ

// console.log(a);
// let a = 20

// console.log(b);
// const b = 30
/* both a and b are hoisted but they cannot be accesed because the log is in temporal dead zone */

// Function declarations vs function expressions and arrow functions

// eat() // will give ni error
// function eat()
// {
//     console.log("dog is eating");
    
// } // each and everything fully hoisted



// greet() // gives error
// var greet = function() // var is hoisted but function is not thats why it gives error
// {
//     console.log("hello");
    
// }


// welcome()

// const welcome = () =>
// {
//     console.log("welcome");
    
// }


/*----------------------------- 3 ------------------------------- */

/*
function variable()
{
    console.log(varVariable)
    var varVariable = "I'm var"; // var hoists but the value dont so it gives undefined
    
    console.log(letVariable)
    let letVariable = "I'm let"; // are hoisted but accessed in TDZ

    console.log(constVariable)
    const constVariable = "I'm const";// are hoisted but accessed in TDZ

}

variable()
*/
    
/*----------------------------- 4 ------------------------------- */

const object = 
{
    myname : "wasiq",
    greet : function()
    {
        console.log("hello",this.myname);
        
    }
}

object.greet.call(object)
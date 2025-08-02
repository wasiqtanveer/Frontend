/* -------------------------- task1 ----------------------------- */
// 1. Regular Functions vs. Arrow Functions
// Create two functions:
// One using a regular function
function regular()
{
    console.log("This is a regualr function");    
}
regular()

// One using an arrow function
const arrowfunction = () =>
{
    console.log("This is an arrow Function");
}
arrowfunction()

// Observe and log how this behaves differently in each case inside:
// A method of an object
const obj = 
{
    myname : "wasiq",
    greet : function()
    {
        console.log(this.myname);
        
    },

    greetArrow: () =>
    {
        console.log(this.myname);       
    }

}

obj.greet() // gives name
obj.greetArrow() // gives undefined

// A function inside setTimeout
const obj2 =
{
    hisname : "newton",

    greetwithArrow : function()
    {
        setTimeout(() =>
        {
            console.log(this.hisname);
            
        },1000)
    },

    greetwithRegular : function()
    {
        setTimeout(function()
    {
        console.log("regular in time out ",this.hisname);
        
    },2000)
    }
}

obj2.greetwithArrow() // gives newton 
obj2.greetwithRegular() //undefined



// 2. Primitives vs. Objects
// • Write code that:
// o Assigns a primitive to one variable and copies it to another — then mutate one and
// observe results.
// o Assigns an object to one variable and copies it to another — then mutate a property and
// observe results.

// • Use console.log() to show how memory is shared or separated.
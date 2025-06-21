// "use strict"
// addition = num_1 + num_2 //gives error , value cant be given to variable without declaration if strict mode is used
// strict mode prohibits to give value to a varaible that is not declared, without that it can done and no error will be given


//=================================== Basic Functions =======================================
function greet(name)
{
    console.log(`hi ${name}`);   
}

function area(lenght,width)
{
    console.log(`Area of Rectangle is : ${lenght * width}`);
    
}

greet("wasiq")
area(3,5)


//=================================== Function Declaration vs Expression =====================
function add(a,b)
{
    return a+b
}

const multiply = function(a,b)
{
    return `${a*b}`
}

console.log(add(3,4));
console.log(multiply(3,4));

// the main difference i see between these 2 is that in Function expression we are assigning the function to a varaible
// while in function declaration we declare it and name it directly

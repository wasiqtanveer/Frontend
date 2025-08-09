//using call

let obj1 = 
{
    name:"wasiq",
    age : 23,
    occupation : "student",
    printdetails: function()
    {
        console.log(this.name);
        
    }
}


obj1.printdetails()

let obj2 = 
{
    name:"ali",
    age : 25,
    occupation : "student",
}

obj1.printdetails.call(obj2)

/*
Using call() to make one object use another object's method.
Here, obj1 has a printdetails() method that logs its name.
By using obj1.printdetails.call(obj2), we tell JavaScript to run
the printdetails() function, but set 'this' to refer to obj2 instead of obj1.
This way, the method uses obj2's properties while keeping the same function code.
*/

let hello = function()
{
    console.log(this.name);
}

// incase a function is not in a object bura general fucntion than it can be called as
// hello.call(null,obj2.name)
// OR
hello.call(obj2)


//Apply  method
let greet = function(city,country)
{
    console.log(this.name+" "+city+" "+country);
}

greet.apply(obj2,["kohat" , "Pakistan"]) // instead of passing arguments seperately apply help pass it in an array
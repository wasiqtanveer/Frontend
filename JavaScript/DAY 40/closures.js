// lexical scoping
/* 
    it suggests that if a variable is declared within the function than that varaible cant be
    accessed outside of that funciton but if there is a function within that function than 
    that function can access it 
*/

function outer()
{
    let num = 20
    console.log("outer function", num);

    function inner()
    {
        let num2 = 30 // this variable cant be accessed by the parent funcion
        console.log("inner function" , num);
    }
    inner()
    
}

outer()
//console.log(num); // this gives error



console.log("\n ------------ Closures ---------------");

function outside()
{
    let num = 0

    function inside()
    {
        num++;
        console.log(num);
    }

    return inside;
}

let call = outside();

call()
call()
call()

/*
A closure is created when an inner function is returned by an outer function.
Even after the outer function has finished running, the inner function
still has access to the outer function's variables through the closure.
This happens because the inner function "remembers" the scope in which it was created.
In simple terms, it's like the inner function carries a backpack
filled with the variables of the outer function, so it can use them later.
*/


let variable = "Global"

function outer()
{
    let variable = "outer"

    if (true)
    {
        let variable = "block"
        console.log(`inside block: ${variable}`);
    }

    console.log(`inside outer: ${variable}`);
    
    function inner()
    {
        console.log(`inside inner: ${variable}`);
    }
    inner()
}

outer()
console.log("In global scope:", variable); // Global


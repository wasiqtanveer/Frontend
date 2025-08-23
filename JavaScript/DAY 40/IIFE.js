console.log("--------------Named IIFE--------------");
(function hello()
{
    console.log("THis is a name IIFE and it reuns immediately");
    
})(); // if this semi-colon isnt used the IIFE wont know where to stop..., tthats its significance

// Arrowed IIFe
console.log("--------------Arrowed/un named IIFE--------------");
(()=>
    {
        console.log("This is an arrowed IIFE");
    })();
    
    
console.log("--------------Argument IIFE---------------");
(function(name)
{
    console.log("Hey",name);
    
})("Wasiq");

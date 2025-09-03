
function call(data, nextdata)
{

    setTimeout(() =>
        {
            console.log("Hello",data);
            
            if(nextdata)
            {
            nextdata()
            }
            
        },2000);
}

call("wasiq", ()=>
    {
    call("atiq", ()=>
    {
        call("faiq",()=>
        {
            call("haziq")
        })
    })
    })
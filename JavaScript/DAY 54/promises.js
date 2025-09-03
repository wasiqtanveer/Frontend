// to tackle the problem of callback hell, we can use promises
function async()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => 
        {
            console.log("data 1");
            resolve("Fetched Data 1")
        },4000)       
    })
}

function async2()
{
        return new Promise((resolve,reject) =>
    {
        setTimeout(() => 
        {
            console.log("data 2");
            resolve("Fetched Data 2")
        },4000)       
    })   
}

console.log("Fetching data 1...");
let p1 = async();
p1.then((response) =>
{
    console.log(response);

    console.log("Fetching data 2...");

    let p2 = async2();
    p2.then((response) =>   
    {
        console.log(response);
    })
    
})
// Synchronous log
console.log('Start');


//setTimeout
setTimeout(() =>
{
    console.log('setTimeout');
},0)

// promise (resolve only)
new Promise((resolve) => {
    resolve("promise Resolved");
}).then((value) => console.log(value));


// synchronous log
console.log("start 2");




// setTimeout will print at the end as even though its time is 0ms, it has to wait for the current execution stack to be empty
// promise will print before setTimeout as it goes to microtask queue which has higher priority than macrotask queue (setTimeout)
// so the order will be:
// Start
// start 2
// promise Resolved
// setTimeout


function simulateApi(success)
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            if(success)
            {
                resolve("data Fetched")
            }

            else
            {
                reject("Fetching Failed")
            }
        },1000)
    })
}

simulateApi(1) // gave one so as to give the dilusion of true
.then((data) =>
{
    console.log(data);     x
})
.catch((error) =>
{
    console.log(error);
    
})
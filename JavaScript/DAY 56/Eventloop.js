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
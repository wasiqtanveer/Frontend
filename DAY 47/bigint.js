// 1. BigInt Practice
// o Declare a very large transaction ID using BigInt, e.g.:
const transactionID = 987654321987654321987654321n;
// if (n) isnt added at the end the number would be treated as a regular number
// which dont have the ability to store such big number abd will lose precision
console.log(`Transaction ID: ${transactionID}`);


// 2. Creating and Formatting Dates
// o Create a new Date for the current transaction:

// const now = new Date();
const date = new Date()
console.log(`Transaction Date: ${date}`);

// console.log('Transaction Date:', now);
// o Also create a fixed date like:
new Date()
const fixeddate = new Date(2002,9,29,9,30,41)
console.log(`History :${fixeddate}`);


// const fixedDate = new Date('2024-12-25T10:00:00');



// 3. Simple Operations With Dates
// o Calculate how many days passed between two dates:
let timediff =  Math.abs(fixeddate-date)

// Convert milliseconds to days (1000 ms = 1 sec, 60 sec = 1 min, 60 min = 1 hr, 24 hr = 1 day)
let dayspast = timediff/(1000*6*60*24)
// Divide by total milliseconds in one day to get the difference in days


// const diffTime = Math.abs(fixedDate - now);
// const diffDays = diffTime / (1000 * 60 * 60 * 24);
// console.log(`Days between transactions: ${Math.round(diffDays)}`);
console.log(`Days between transactions: ${Math.round(dayspast)} Days`);





// 4. (Optional) Simulate Sorting Bug Fix (Simplified):
// o You have an array of numbers [200, 1200, 100, 900] and want to sort them correctly (as
// numbers):
let array = [200, 1200, 100, 900];
array.sort((a,b) => a-b)// do b-a for reverse order

console.log('Sorted Array:', array);


// const transactions = [200, 1200, 100, 900];
// transactions.sort((a, b) => a - b); // Fix sorting
// console.log('Sorted Transactions:', transactions);
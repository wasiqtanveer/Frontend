// 1. Converting and Checking Numbers
// • Accept a string input like "1000" and convert it to a number.
let bill = "1354"
let tip = 0.15


let numBill = Number(bill)
console.log(`The bill is ${numBill}`);
console.log(`The TIP is ${tip*100}%`);


// • Use Number.isNaN() and Number.isFinite() to check its validity.
console.log(Number.isNaN(numBill));//false
console.log(Number.isFinite(numBill));//true

// 2. Math and Rounding
// • Calculate the tip for a bill amount (e.g., 15% of 850).
let tipAmount = numBill * tip;
console.log(`The TIP amount is ${tipAmount}`);

``
// • Use:
// o Math.round()
console.log(Math.round(tipAmount));
// o Math.floor()
console.log(Math.floor(tipAmount));
// o Math.ceil()
console.log(Math.ceil(tipAmount));
// o toFixed()
console.log(tipAmount.toFixed(2));

// to show different rounding results of the total bill (bill + tip).
let total = numBill + tipAmount;
console.log(`The total bill is ${total}`); //



// 3. Remainder Operator
// • A restaurant has 7 seats per table. Check how many tables are fully occupied and how many
// leftover people for:
let customers = 45;
let filled = Math.floor(customers/7)
let left = customers % 7
// o 45 customers
console.log(`For ${customers} customers: ${filled} tables are filled, ${left} customers are left.`);
// o 31 customers





// 4. Numeric Separators
// • Declare a large number like bank balance
// const bankBalance = 1_000_000; // One million
const bankBalance = 1_000_000; // One million
console.log(`Bank Balance: $${bankBalance}`);
// • Display the bank balance and comment on how numeric separators improve readability.
// Numeric separators make large numbers easier to read by visually separating groups of digits.

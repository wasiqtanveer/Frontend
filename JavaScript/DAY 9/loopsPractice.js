// ====================== 1. The for Loop ======================

// Write a for loop that prints numbers from 1 to 10.
for(let i=1; i<=10; i++)
{
    console.log(i);
    
}
// Create an array of names and use a for loop to greet each name (e.g., "Hello, Aisha!").
let Names = ["wasiq" , "Taimoor" , "Nisaar"]
for(i=0; i<Names.length; i ++)
{
    console.log(Names[i]);   
}


// ====================== 2. Looping Arrays with break and continue ======================

// • Create an array:
const items = ["Book", 34, "Pen", true, "Notebook", 0];
// Use a for loop to:
// Print only string values using continue.
// Stop the loop when a boolean value is encountered using break.
for(i=0; i<items.length; i++)
    {
    if (typeof(items[i]) === "boolean") //since type of return a string we compare it with a string
    {
        break
    }
    
    else if(typeof(items[i]) === "string")
    {
        console.log(items[i]);
    }

    else
    {
        continue
    }
}


// ====================== 3. Looping Backwards & Nested Loops ======================

// Create an array of colors and loop from the last element to the first using a reverse for loop.
let colors = ["blue" , "red" , "green" , "yellow"]

for(i=colors.length-1; i>=0; i--)
    {
        console.log(colors[i]);
        
    }    
    
// Write a nested loop to simulate the following output:
for(i = 1; i<3; i++)
{
    console.log(`Exercise ${i}`);
    for(j = 1; j<3; j++)
    {
        console.log(`Set${j}`);
        
    }
}


// ====================== 4. The while Loop ======================

// Use a while loop to count from 1 to 5.
let count=1
while(count<6)
{
    console.log(count);
    count++    
}
// Simulate a dice roll:
// Keep rolling a random number (1–6) until a 6 appears. Log each roll.
let random = 0 // Math.floor rounof the number to an integer
while(random !=6)
{
    console.log(random);
    random = Math.floor(Math.random()*7)
    
}
console.log(random);


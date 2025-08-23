/* ------------------------ shallow copy ------------------------ */

const object = 
{
    name : "wasiq",
    age : 23,
    address : 
    {
        city : "kohat",
        postalcode : 20120
    } 
}

const copy = { ...object}

copy.name = "copy"
console.log(copy.name); // changing outer properties dosent effect the original and copy as both are independent of each other
console.log(object.name);


// but changing inner properties effect both as they are shared
copy.address.city = "islamabad" // channing in copy affect original as well
console.log(copy.address.city);
console.log(object.address.city);


/* ------------------------ Deep copy ------------------------ */

const object2 = 
{
    name : "wasiq",
    age : 23,
    address : 
    {
        city : "kohat",
        postalcode : 20120
    } 
}

const copy2 = structuredClone(object2)

copy2.name = "copy"
console.log(copy2.name);
console.log(object2.name);

copy2.address.postalcode = 10000

console.log(object2.address.postalcode); // now changing one dosnet effect other as they are not shared anymore but different copies
console.log(copy2.address.postalcode);

// 4. Garbage Collection (Exploration)
// Simulate a scenario where large objects are created inside a function.
// one using an arrow function
const arrow =()=>
{
    var large =
    {
        data : new Array(100).fill("brain") // creates array with 100 slot and fill it with "brain"

    }

    console.log("📦 Large object created inside function");


    console.log("🔍 Accessing one item:", large.data[0]);

    console.log("⏹️ Function about to end (object still in memory for now)");
}

arrow()
arrow()
arrow()
// after this the it is vaible for garbage colleciton

// Explain (in comments) how they are removed from memory after the function finishes
// (assuming no external reference remains).
// Add console statements showing function calls and variable scopes to visualize memory
// lifecycle.

// 1. Use of Sets
// • Create a Set called enrolledStudents and add 5 unique student names.
const myset = new Set(["Wasiq","Haziq","Atiq","Faiq","Wasiq",])
// • Attempt to add a duplicate name and show that it doesn’t get added.
myset.add("Daoud")
myset.add("Wasiq")
// • Remove one student and print the final Set.
myset.delete("Wasiq")

// • Convert the Set to an array and print it.
const array = [...myset]
console.log(myset); 
console.log(array); 



// 2. Useful Set Operations
// • Check if a student is in the Set using .has().
console.log(myset.has("Wasiq"));
// • Clear the Set and show that it's empty.
myset.clear()
console.log(myset); 


// 3. Use of Maps
// • Create a Map named studentCourses where the key is the student name and the value is their
// course.
const mymap = new Map([
    ["wasiq" , "AI"],
    ["Ali" , "Cyber Security"]
])
// • Add 3–5 students and their courses.
mymap.set("qasim" , "Software Engineering")
mymap.set("iftikhar" , "Data Base")
mymap.set("khalid" , "Assembly Language")
mymap.set("ahmed" , "OOP")
// • Use .get() to retrieve a specific student’s course.

console.log(mymap.get("wasiq"));

// • Use .has() to check if a student is in the map.
console.log(mymap.has("iftikhar"));
console.log(mymap.has("iftir"));

// • Use .delete() to remove a student.
console.log(mymap.delete("iftikhar"));
console.log(mymap);

// • Iterate through the Map and print each key-value pair.

for(const [key,value] of mymap)
{
    console.log(`${key} has enrolled in ${value}`);
    
}

// map is used to when we need to store a collection of key value pair
//while set is used to store a collection of uniques values

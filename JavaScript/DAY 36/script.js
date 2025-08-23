// 1. Create a Students Data Array
// • Define an array of student objects.
// • Each student should have:
// o name, age, course, email, and optionally score.

let students = 
[
    {
        name:"wasiq",
        age:22,
        email: "wasiq@gmail.com",
        score : 80
    }
    ,
    {
        name:"ali",
        age:23,
        email: "ali@gmail.com",
        score : 93
    }
    ,
    {
        name:"Asif",
        age:20,
        email: "asif@gmail.com",
        score : 50
    }
    ,
    {
        name:"Khalid",
        age:20,
        email: "khalid@gmail.com",
    }
]



// 2. Use the for-of Loop to Display Student Info
// • Loop through the student array using for-of
// • Print each student's name and course using template literals.

// 3. Use Nullish Coalescing (??) to Handle Missing Scores
// • Print each student’s score using:

// o student.score ?? 'No score yet'
for(const item of students)
{
    console.log(`My name is ${item.name} and my grade is ${item.score ?? "Grades not assigned yet"}`);

    
}



// 4. Use Logical Assignment Operators
// • If score is null or undefined, assign a default of 50 using ??=.
// • If a student has a course, append " (Enrolled)" to the course name using &&=.
for(const item of students)
{
    console.log(`My name is ${item.name} and my grade is ${item.score || "50"}`);   
}


// 5. Use Enhanced Object Literals
// • Create a summary object that:
// o Stores total number of students (use array .length)
let summary =
{
    totalStudents : students.length,
    printSummary: function()
    {
        console.log(`${this.totalStudents} are currently under survielance`);
        
    }
}
// o Stores a method printSummary() that logs a short message using this.
console.log(summary.totalStudents);


// 6. Use Optional Chaining (?.)
// • Access a nested property that may not exist, like student.address?.city
// • Log a fallback if it's undefined.
console.log(students.score?.mids); //returns undefined


// 7. Looping Over Object Keys, Values, and Entries
// • Use:
// o Object.keys() to log all student property names

console.log(Object.keys(students[1]));

// o Object.values() to log all student property values
console.log(Object.values(students[1]));
// o Object.entries() to loop through and log key–value pairs for one student
Object.entries(students[0]).forEach(([key , value])=>
{
      console.log(`${key}: ${value}`);
})

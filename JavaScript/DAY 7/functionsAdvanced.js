/*If the function has only one statement, and the 
statement returns a value, you can remove the brackets 
and the return keyword */

getFullName = (first,last) => `My name is ${first} ${last}`

console.log(getFullName("Wasiq" , "Tanveer"));

//squared
square = a => a*a //as there is single statement and its returning a value so there is no need to use brackets or return 
// as there is single parameter in this function we can ignore the parameter brackets
console.log(square(2));


//welcome
welcome = () => "welcome to learning JS"
console.log(welcome());



//====================== 2. Functions Calling Other Functions ======================
// Create a function named cutFruit that takes a number of fruits and returns fruit * 4.
cutFruit = numberOfFruits => numberOfFruits*4

// Create another function named makeJuice that:
makeJuice = (numberOfApples, numberOfOranges) =>
    {
        return `Juice with ${cutFruit(numberOfApples)} pieces of apple and ${cutFruit(numberOfOranges)} pieces of orange.`
    }
// Takes the number of apples and oranges.
// Calls cutFruit for both.
// Returns a string like: "Juice with 8 pieces of apple and 12 pieces of orange."
console.log(makeJuice(2, 3))


//====================== 3. Review Functions ======================
// Example 1
temprature = celcius => `${(celcius*(9/5)) + 32}`
console.log(temprature(0));

// Example 2
Bmi = (weightInKgs, heightInMeters) =>
{
    return weightInKgs/heightInMeters**2
}
console.log(Bmi(70,1.65));

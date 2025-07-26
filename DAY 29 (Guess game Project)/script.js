// Targeting elements

 // gives back the value in the input field
let submit = document.querySelector("#submit-guess"); //targets submit button
let triesSpan = document.querySelector("#tries"); // return number of tries
let scoreSpan = document.querySelector("#score"); // gives current score
let reset = document.querySelector("#reset-game") // targets reset button

let tries = 0; // initialize tries
let score = 0; // initialize score


// what happens when the submit button is clicked
submit.addEventListener("click", function()
{
    //generate a random number between 1-10
    let random = Math.floor(Math.random()*10) + 1;

    let playerguess = document.querySelector("#guess").value;
    console.log("Secret number:", random); // Optional for testing
    
    if(playerguess != "" && playerguess >= 1 && playerguess <= 10) // check if the input is not empty and within range
    {
        tries++;
        triesSpan.textContent = tries; // update the number of tries

        if(random === Number(playerguess))
        {
            score++;
        }
    }
    scoreSpan.textContent = score; // update the score
    playerguess = document.querySelector("#guess").value = ""; // clear the input field
    document.querySelector("#guess").focus();     // set cursor back to input

});


reset.addEventListener("click", function()
{
    tries = 0; // reset tries
    score = 0; // reset score
    triesSpan.textContent = tries; // update the number of tries
    scoreSpan.textContent = score; // update the score
    document.querySelector("#guess").value = ""; // clear the input field
    document.querySelector("#guess").focus(); // set cursor back to input
})
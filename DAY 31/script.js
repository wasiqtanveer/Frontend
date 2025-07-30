// Targeting elements

let score = document.querySelector("#score")
let buttons = document.querySelectorAll(".btn")
let dice = document.querySelector("#dice")
let reset = document.querySelector("#reset")
let rules = document.querySelector("#rules")
let openPopup = document.querySelector("#open-popup") // targets open popup button
let closePopup = document.querySelector("#close-popup"); // targets close popup button
let popup = document.querySelector("#popup"); // targets the popup div
let overlay = document.querySelector("#overlay"); // targets the overlay div


//holds the selected button
let selectedButton = null
let random = null
let scoreJs = 0;

// reset button functionality
reset.addEventListener('click', () =>
{
    scoreJs = 0;
    score.textContent = scoreJs;
})


buttons.forEach(btn =>
{
    btn.addEventListener('click' , () =>
    {
        if (selectedButton !== null)
            return; // if one is selected than, others cant be selected

        selectedButton = Number(btn.value);

        // Remove 'selected' class from all buttons
        buttons.forEach(b => 
            {
                b.classList.remove('selected')
                b.disabled = true;
            });

        // Add 'selected' class to the clicked one
        btn.style.backgroundColor = "black"
        btn.classList.add('selected');
        btn.style.color = "white"
        
    })    
})

diceChange = () =>
{
    random = Math.floor(Math.random()*6) + 1;

    switch (random) {
        case 1:
            dice.src = "icons/dice-six-faces-one.svg"
            break;

        case 2:
            dice.src = "icons/dice-six-faces-two.svg"
            break;

        case 3:
            dice.src = "icons/dice-six-faces-three.svg"
            break;
        
        case 4:
            dice.src = "icons/dice-six-faces-four.svg"
            break;
        
        case 5:
            dice.src = "icons/dice-six-faces-five.svg"
            break;
            
        case 6:
            dice.src = "icons/dice-six-faces-six.svg"    
            break;

        default:
            break;
    }

    
    comparision()
    
}

dice.addEventListener('click' , diceChange)

comparision = () => {
    if (selectedButton === null) return;

    if (random === selectedButton) {
        scoreJs++;
        score.textContent = scoreJs;
    }

    buttons.forEach(btn => 
        {
            btn.disabled = false;
            btn.classList.remove('selected');
            btn.style.backgroundColor = ""; // reset to default
            btn.style.color = "";
        });

            selectedButton = null; // allow selection again
};


// copied this from the last project "reusability"
rules.addEventListener("click", function()
{
    popup.style.display = "block"; // show the popup
    overlay.style.display = "block"; // show the overlay
})


const closeOverlay= () =>
{
    popup.style.display = "none"; // hide the popup
    overlay.style.display = "none"; // hide the overlay
}

// linking the above function with the button
closePopup.addEventListener("click", closeOverlay);
overlay.addEventListener("click", closeOverlay);


// giving the close popup button a keyboard shortcut
document.addEventListener("keydown", function(event)
{
    if(event.key ==="Escape" && popup.style.display === "block")
    {
        closeOverlay(); // call the function to close the popup
    }
})
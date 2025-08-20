let cards = document.querySelectorAll(".card")



//this function is a call back to intersection Observer
function callbackFunction(entries)
{
    entries.forEach(entry =>
    {
        entry.target.classList.toggle("show", entry.isIntersecting);   
    }
    )
}

// threshold, root, root margin is decided here
const options = {
    threshold : 1 
}

const cardObserver = new IntersectionObserver(
    callbackFunction,
    options
)


//observing each card
cards.forEach((card) =>
{
    cardObserver.observe(card);    
})



//applying infinite scrolling

const lastCardObserver = new IntersectionObserver(entries =>
{
    const lastcard = entries[0]
    console.log(lastcard);
    if(!lastcard.isIntersecting) return;//make new cards as the last card becomes visible
    loadNewCards()
    lastCardObserver.unobserve(lastcard.target) // stop observing the last card
    lastCardObserver.observe(document.querySelector(".card:last-child")) // start observing the new last card

},{})

lastCardObserver.observe(document.querySelector(".card:last-child"))

const cardContainer = document.querySelector(".card-container");

function loadNewCards(){
for(let i = 0; i < 10; i++)
{
    const card = document.createElement("div");
    card.textContent = "New Card"
    card.classList.add("card");
    cardObserver.observe(card);
    cardContainer.append(card);
}}
let card = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => 
{
    entries.forEach(entry =>
    {
        entry.target.classList.toggle("show",entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target); //if you want to load the animations only once and not again and again
    })

},
{
    threshold : 1
})

card.forEach(cards=>
{
    observer.observe(cards);
}
)



// infinite scrolling

let lastCardObserver = new IntersectionObserver(entries =>
{

},{})



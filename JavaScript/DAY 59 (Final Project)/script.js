let search = document.getElementById("search");
let input = document.getElementById("input");
let dishName = document.getElementById("dish-name");
let category = document.getElementById("category");
let dishImage = document.getElementById("dish-image");
let instructions = document.getElementById("instructions");

let url;

// async that dictates what happens on api call
async function apiCall()
{
    let response = await fetch(url)
    let data = await response.json()
    console.log(data.meals[0].strCategory);
    console.log(data.meals[0].strInstructions);
    console.log(data.meals[0].strMealThumb);
    console.log(data.meals);
    dishName.textContent = data.meals[0].strMeal
    category.textContent = data.meals[0].strCategory
    dishImage.src = data.meals[0].strMealThumb
    instructions.textContent = data.meals[0].strInstructions

    
}



let form = document.querySelector("#search form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        alert("Please enter a dish name!");
        return;
    }
    document.getElementById("result").style.display = "block";
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`;
    apiCall();
});



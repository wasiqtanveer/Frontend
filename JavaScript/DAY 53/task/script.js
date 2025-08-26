let country = "Italy";
let url = `https://restcountries.com/v3.1/name/${country}`;
fetch(url)
.then(response => response.json())
.then(data => 
{
    console.log(data[0]);
    console.log(`Capital : ${data[0].capital}`);
    console.log(`Currency : ${data[0].currencies.EUR.name}`);
    console.log(`Population : ${data[0].population}`);
    console.log(`Flag Url : ${data[0].flags.png}`);
    


    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <h2>${data[0].name.common}</h2>
        <p>Capital: ${data[0].capital}</p>
        <p>Currency: ${data[0].currencies.EUR.name}</p>
        <p>Population: ${data[0].population}</p>
        <img src="${data[0].flags.png}" alt="Flag of ${data[0].name.common}">
    `;
    document.body.appendChild(newDiv);
}
);

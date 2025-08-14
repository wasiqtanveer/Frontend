// targeting navbar elements
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let game = document.querySelector("#game");
let contact = document.querySelector("#contact");

// targeting sections
let heroSection = document.querySelector("#hero");
let aboutSection = document.querySelector("#aboutSection");
let gamesSection = document.querySelector("#gamesSection");
let contactSection = document.querySelector(".contact");

//targeting print button
let log = document.querySelector("#print");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

home.addEventListener("click", function (e) {
  // 'e' is the event object for this click
  // preventDefault() stops the <a> tag from reloading or jumping
  e.preventDefault();

  // Scroll to the hero section with a smooth animation
  heroSection.scrollIntoView({
    behavior: "smooth",
  });
});

about.addEventListener("click", function (e) {
  e.preventDefault(); // stop reload
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});

game.addEventListener("click", function (e) {
  e.preventDefault(); // stop reload
  gamesSection.scrollIntoView({
    behavior: "smooth",
  });
});


contact.addEventListener("click", function (e) {
  e.preventDefault(); // stop reload
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});


log.addEventListener("click", function(e)
{
    e.preventDefault();
  console.log("Name: " + name.value);
  console.log("Email: " + email.value);
  console.log("Message: " + message.value);
}
)
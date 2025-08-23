const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

// Open sidebar
hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

// Close sidebar with ❌
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Close sidebar when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

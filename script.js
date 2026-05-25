const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){

    navLinks.style.display = "flex";

    navLinks.style.flexDirection = "column";

    navLinks.style.position = "absolute";

    navLinks.style.top = "80px";

    navLinks.style.left = "0";

    navLinks.style.width = "100%";

    navLinks.style.background = "#fff";

    navLinks.style.padding = "20px";

  }

  else{

    navLinks.style.display = "none";

  }

});



const popup = document.getElementById("popup");

const closeBtn = document.getElementById("closeBtn");

const bookButtons = document.querySelectorAll(".book-btn");



bookButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    popup.style.display = "flex";

  });

});



closeBtn.addEventListener("click", () => {

  popup.style.display = "none";

});



window.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.style.display = "none";

  }

});



const popupForm = document.getElementById("popupForm");

popupForm.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Booking Confirmed Successfully!");

  popup.style.display = "none";

  popupForm.reset();

});

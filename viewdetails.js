/* =========================
   GET SELECTED CAR
========================= */

const selectedCar =
JSON.parse(
localStorage.getItem("selectedCar")
);


/* =========================
   HTML ELEMENTS
========================= */

const carImage =
document.getElementById("carImage");

const carType =
document.getElementById("carType");

const carName =
document.getElementById("carName");

const carRating =
document.getElementById("carRating");

const carPrice =
document.getElementById("carPrice");

const carSeats =
document.getElementById("carSeats");

const carTransmission =
document.getElementById("carTransmission");

const carFuel =
document.getElementById("carFuel");

const bookBtn =
document.querySelector(".book-btn");


/* =========================
   CHECK DATA
========================= */

if(selectedCar){

    /* IMAGE */

    carImage.src =
    selectedCar.image;


    /* TYPE */

    carType.innerText =
    selectedCar.type;


    /* NAME */

    carName.innerText =
    selectedCar.name;


    /* RATING */

    carRating.innerText =
    selectedCar.rating;


    /* PRICE */

    carPrice.innerText =
    selectedCar.price;


    /* SEATS */

    carSeats.innerText =
    selectedCar.seats;


    /* TRANSMISSION */

    carTransmission.innerText =
    selectedCar.transmission;


    /* FUEL */

    carFuel.innerText =
    selectedCar.fuel;

}


/* =========================
   BOOK BUTTON
========================= */

bookBtn.addEventListener("click",()=>{

    alert(
    `${selectedCar.name} booked successfully 🚗`
    );

});


/* =========================
   IMAGE HOVER EFFECT
========================= */

carImage.addEventListener("mouseenter",()=>{

    carImage.style.transform =
    "scale(1.03)";

    carImage.style.transition =
    "0.4s";

});

carImage.addEventListener("mouseleave",()=>{

    carImage.style.transform =
    "scale(1)";

});


/* =========================
   CARD ANIMATION
========================= */

const cards =
document.querySelectorAll(".detail-card");

cards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    setTimeout(()=>{

        card.style.opacity = "1";

        card.style.transform =
        "translateY(0px)";

        card.style.transition =
        "0.5s";

    },index * 150);

});


/* =========================
   PAGE LOAD ANIMATION
========================= */

window.addEventListener("load",()=>{

    document.body.style.opacity =
    "1";

});

document.body.style.opacity =
"0";

document.body.style.transition =
"0.5s";


/* =========================
   ERROR HANDLING
========================= */

if(!selectedCar){

    alert(
    "No Car Selected ❌"
    );

    window.location.href =
    "browsecars.html";

}
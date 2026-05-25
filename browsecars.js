/* =========================
   CAR DATA
========================= */

const cars = [

    {
        name: "Volkswagen Golf GTI",
        brand: "Volkswagen",
        type: "Sports",
        price: 95,
        rating: 4.6,
        seats: "5 Seats",
        transmission: "Manual",
        fuel: "Gasoline",
        image: "./images/car1.jpg"
    },

    {
        name: "Mahindra Scorpio N",
        brand: "Mahindra",
        type: "SUV",
        price: 110,
        rating: 4.7,
        seats: "7 Seats",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "./images/car2.jpg"
    },

    {
        name: "Suzuki Swift",
        brand: "Suzuki",
        type: "Sedan",
        price: 60,
        rating: 4.5,
        seats: "5 Seats",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "./images/car3.jpg"
    },

    {
        name: "Toyota Supra",
        brand: "Toyota",
        type: "Sports",
        price: 220,
        rating: 4.9,
        seats: "2 Seats",
        transmission: "Automatic",
        fuel: "Gasoline",
        image: "./images/car4.jpg"
    },

    {
        name: "Skoda Superb",
        brand: "Skoda",
        type: "Sedan",
        price: 100,
        rating: 4.7,
        seats: "5 Seats",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "./images/car5.jpg"
    },

    {
        name: "Porsche 911 Turbo",
        brand: "Porsche",
        type: "Sports",
        price: 320,
        rating: 5.0,
        seats: "2 Seats",
        transmission: "Automatic",
        fuel: "Gasoline",
        image: "./images/car6.jpg"
    },

    {
        name: "Cadillac ATS",
        brand: "Cadillac",
        type: "Sedan",
        price: 140,
        rating: 4.6,
        seats: "5 Seats",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "./images/car7.jpg"
    },

    {
        name: "Chevrolet Camaro",
        brand: "Chevrolet",
        type: "Sports",
        price: 210,
        rating: 4.8,
        seats: "4 Seats",
        transmission: "Automatic",
        fuel: "Gasoline",
        image: "./images/car8.jpg"
    },

    {
        name: "Porsche Panamera",
        brand: "Porsche",
        type: "Luxury",
        price: 280,
        rating: 4.9,
        seats: "4 Seats",
        transmission: "Automatic",
        fuel: "Gasoline",
        image: "./images/car9.jpg"
    },

    {
        name: "BMW M5",
        brand: "BMW",
        type: "Sedan",
        price: 260,
        rating: 4.9,
        seats: "5 Seats",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "./images/car10.jpg"
    },

    {
        name: "Lamborghini Huracan",
        brand: "Lamborghini",
        type: "Sports",
        price: 450,
        rating: 5.0,
        seats: "2 Seats",
        transmission: "Automatic",
        fuel: "Gasoline",
        image: "./images/car11.jpg"
    },

    {
        name: "BMW M4 Coupe",
        brand: "BMW",
        type: "Sports",
        price: 240,
        rating: 4.8,
        seats: "4 Seats",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "./images/car12.jpg"
    },

    {
        name: "BMW M4 Competition",
        brand: "BMW",
        type: "Sports",
        price: 275,
        rating: 4.9,
        seats: "4 Seats",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "./images/car13.jpg"
    }

];



/* =========================
   SELECTORS
========================= */

const carsContainer =
document.getElementById("carsContainer");

const searchInput =
document.getElementById("searchInput");

const carCount =
document.getElementById("carCount");

const darkModeBtn =
document.getElementById("darkModeBtn");

const toast =
document.getElementById("toast");

const bookingModal =
document.getElementById("bookingModal");

const closeModal =
document.getElementById("closeModal");

const priceRange =
document.getElementById("priceRange");

const priceValue =
document.getElementById("priceValue");

const sortBtn =
document.getElementById("sortBtn");

const sortDropdown =
document.getElementById("sortDropdown");

const sortOptions =
document.querySelectorAll(".sort-option");

const selectedSort =
document.getElementById("selectedSort");

const filterBtn =
document.getElementById("filterBtn");

const filterSidebar =
document.getElementById("filterSidebar");

const closeFilter =
document.getElementById("closeFilter");

const favCount =
document.getElementById("favCount");

const topBtn =
document.getElementById("topBtn");

const compareModal =
document.getElementById("compareModal");

const compareContainer =
document.getElementById("compareContainer");

let favoriteCars = 0;

let compareCars = [];



/* =========================
   DISPLAY CARS
========================= */

function displayCars(data) {

    carsContainer.innerHTML = "";

    data.forEach(car => {

        carsContainer.innerHTML += `

<div class="car-card">

<div class="wishlist-btn">
<i class="fa-solid fa-heart"></i>
</div>

<img src="${car.image}" class="car-image">

<div class="car-content">

<span class="car-badge">
${car.type}
</span>

<h2 class="car-title">
${car.name}
</h2>

<div class="car-rating">
⭐ ${car.rating}
</div>

<div class="car-details">
<span>${car.seats}</span>
<span>${car.transmission}</span>
<span>${car.fuel}</span>
</div>

<div class="car-price">
$${car.price}
<span>/day</span>
</div>

<div class="compare-checkbox">

<label>

<input type="checkbox"
class="compare-check"
data-name="${car.name}">

Compare

</label>

</div>

<div class="card-buttons">

<a href="viewdetails.html"
class="details-btn"
onclick='saveCarDetails(${JSON.stringify(car)})'>

View Details

</a>

<button class="book-btn">
Book Now
</button>

</div>

<button class="compare-btn">
Compare Now
</button>

</div>

</div>

`;

    });

    carCount.textContent = data.length;

    wishlistFunction();

    bookingFunction();

    compareFunction();

}

displayCars(cars);



/* =========================
   SEARCH
========================= */

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const filteredCars =
    cars.filter(car =>

        car.name.toLowerCase().includes(value)
        ||
        car.brand.toLowerCase().includes(value)

    );

    displayCars(filteredCars);

});



/* =========================
   SORT
========================= */

sortBtn.addEventListener("click", () => {

    sortDropdown.classList.toggle("active");

});

sortOptions.forEach(option => {

    option.addEventListener("click", () => {

        let sortedCars = [...cars];

        const sortType =
        option.dataset.sort;

        if (sortType === "low") {

            sortedCars.sort((a, b) =>
            a.price - b.price);

        }

        else if (sortType === "high") {

            sortedCars.sort((a, b) =>
            b.price - a.price);

        }

        else if (sortType === "rating") {

            sortedCars.sort((a, b) =>
            b.rating - a.rating);

        }

        displayCars(sortedCars);

    });

});



/* =========================
   DARK MODE
========================= */

if(localStorage.getItem("darkMode")
=== "enabled") {

    document.body.classList.add("dark");

}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

    }

    else {

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

    }

});



/* =========================
   TOAST
========================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

}



/* =========================
   WISHLIST
========================= */

function wishlistFunction() {

    const wishlistBtns =
    document.querySelectorAll(".wishlist-btn");

    wishlistBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            btn.classList.toggle("active");

            if(btn.classList.contains("active")) {

                favoriteCars++;

            }

            else {

                favoriteCars--;

            }

            favCount.textContent =
            favoriteCars;

            showToast("Wishlist Updated ❤️");

        });

    });

}



/* =========================
   BOOKING
========================= */

function bookingFunction() {

    const bookBtns =
    document.querySelectorAll(".book-btn");

    bookBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            bookingModal.classList.add("active");

        });

    });

}

if(closeModal){

    closeModal.addEventListener("click", () => {

        bookingModal.classList.remove("active");

    });

}



/* =========================
   PRICE FILTER
========================= */

priceRange.addEventListener("input", () => {

    priceValue.textContent =
    `$${priceRange.value}`;

    const filteredCars =
    cars.filter(car =>

        car.price <= priceRange.value

    );

    displayCars(filteredCars);

});



/* =========================
   FILTER SIDEBAR
========================= */

filterBtn.addEventListener("click", () => {

    filterSidebar.classList.add("active");

});

closeFilter.addEventListener("click", () => {

    filterSidebar.classList.remove("active");

});



/* =========================
   TOP BUTTON
========================= */

window.addEventListener("scroll", () => {

    if(window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



/* =========================
   COMPARE FUNCTION
========================= */

function compareFunction() {

    compareCars = [];

    const compareChecks =
    document.querySelectorAll(".compare-check");

    compareChecks.forEach(check => {

        check.addEventListener("change", () => {

            const carName =
            check.dataset.name;

            const selectedCar =
            cars.find(car =>
            car.name === carName);

            if(check.checked) {

                const alreadyExists =
                compareCars.some(car =>
                car.name === selectedCar.name);

                if(!alreadyExists) {

                    compareCars.push(selectedCar);

                }

            }

            else {

                compareCars =
                compareCars.filter(car =>
                car.name !== carName);

            }

        });

    });

}



document.addEventListener("click", (e) => {

    if(e.target.classList.contains("compare-btn")) {

        if(compareCars.length < 2) {

            showToast(
            "Select 2 Cars To Compare ⚠️"
            );

            return;

        }

        compareModal.classList.add("active");

        compareContainer.innerHTML = `

<div class="compare-grid">

${compareCars.map(car => `

<div class="compare-card">

<img src="${car.image}">

<h3>${car.name}</h3>

<p>Price: $${car.price}</p>

<p>Rating: ${car.rating}</p>

<p>Fuel: ${car.fuel}</p>

<p>Seats: ${car.seats}</p>

</div>

`).join("")}

</div>

`;

    }

});



/* =========================
   VIEW DETAILS
========================= */

function saveCarDetails(car){

    localStorage.setItem(
        "selectedCar",
        JSON.stringify(car)
    );

}
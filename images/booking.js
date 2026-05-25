

const menuIcon = document.getElementById("menuicon");
const sideNav = document.getElementById("sidenav");
const closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click", () => {
    sideNav.style.top = "0";
});

closeNav.addEventListener("click", () => {
    sideNav.style.top = "-100%";
});

const pickupDate = document.getElementById("pickup-date");
const dropoffDate = document.getElementById("dropoff-date");
const dateError = document.getElementById("dateerror");

const validateDates = () => {

    const pickup = new Date(pickupDate.value);
    const dropoff = new Date(dropoffDate.value);

   if (pickupDate.value && dropoffDate.value) {

        if (dropoff < pickup) {
            dateError.classList.remove("hidden");
            return false;
        } else {
            dateError.classList.add("hidden");
            return true;
        }
    } 

    return true;
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const pickupLocation = document.getElementById("pickup-location").value.trim();
    const dropoffLocation = document.getElementById("dropoff-location").value.trim();
    const carType = document.getElementById("car-type").value;

    // Check empty fields
    if (
        pickupLocation === "" ||
        dropoffLocation === "" ||
        pickupDate.value === "" ||
        dropoffDate.value === "" ||
        carType === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Validate dates
    if (!validateDates()) {
        return;
    }
    alert(`${pickupLocation},
${dropoffLocation}, 
${pickupDate.value},
${dropoffDate.value}, 
${carType}.
"Car search successful!"`);
});
 
// booking buttons
const bookingButtons = document.querySelectorAll("button[id^='btn']");

bookingButtons.forEach((button) => {

    button.addEventListener("click", () => {

        let carName = button.parentElement.querySelector("h3").textContent;
        let carmodel = button.parentElement.querySelector("p").textContent;

        alert(`${carmodel}
${carName} 
Booked successfully!`);
    });
});
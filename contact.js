// Hamburger menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.navbar nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
}

// Close menu when clicking outside navbar
document.addEventListener('click', function(event) {
    if (nav && !event.target.closest('.navbar')) {
        nav.classList.remove('active');
    }
});

// Get the form and message display elements
const contactForm = document.getElementById('contactForm');
const messageResponse = document.getElementById('message-response');
contactForm.addEventListener('submit', function(e) {
    // Stop form from actually submitting
    e.preventDefault();

    // Get values from form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Check if all required fields are filled
    if (name === '' || email === '' || subject === '' || message === '') {
        messageResponse.textContent = 'Please fill in all required fields!';
        messageResponse.className = 'error';
        return;
    }

    // Check if email looks valid
    if (!isValidEmail(email)) {
        messageResponse.textContent = 'Please enter a valid email address!';
        messageResponse.className = 'error';
        return;
    }

    // If everything is valid, show success message
    messageResponse.textContent = 'Message sent successfully! We will get back to you soon.';
    messageResponse.className = 'success';

    // Clear the form
    contactForm.reset();

    // Remove the message after 5 seconds
    setTimeout(function() {
        messageResponse.textContent = '';
        messageResponse.className = '';
    }, 5000);
});

// Check if email is in correct format
function isValidEmail(email) {
    // Simple email validation - checks for @ and .
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}


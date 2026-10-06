const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");

});

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.classList.contains("active")) {
            button.classList.remove("active");
            button.textContent = "♡";
        } else {
            button.classList.add("active");
            button.textContent = "♥";
        }

    });

});

const contactForm = document.querySelector(".contact-form-box form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("message").value;

        const subject = "New Property Enquiry - Aurelia Estates";

        const body =
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Email: " + email + "\n" +
            "Interested In: " + interest + "\n\n" +
            "Message:\n" + message;

        const mailto =
            "mailto:hello@aureliaestates.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailto;
    });
}
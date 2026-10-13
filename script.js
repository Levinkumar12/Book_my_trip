

let menuButton = document.getElementById("menu-button");
let navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});



let hotelsLink = document.getElementById("hotels-link");
let hotelsMenu = document.getElementById("hotels-menu");

hotelsLink.addEventListener("click", function (event) {
    event.preventDefault();

    hotelsMenu.classList.toggle("show-dropdown");

    let isExpanded = hotelsMenu.classList.contains("show-dropdown");
    hotelsLink.setAttribute("aria-expanded", isExpanded);
});


let navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        if (link !== hotelsLink) {
            navMenu.classList.remove("show");
            hotelsMenu.classList.remove("show-dropdown");

            hotelsLink.setAttribute("aria-expanded", "false");
        }
    });
});




let bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let destination = document.getElementById("destination").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let rooms = document.getElementById("rooms").value;
    let adults = document.getElementById("adults").value;

    let message = document.getElementById("message");

    if (checkout <= checkin) {
        message.textContent =
            "Check-out date must be after check-in date.";
        return;
    }

    message.textContent =
        "Searching hotels in " + destination +
        " | Check-in: " + checkin +
        " | Check-out: " + checkout +
        " | Rooms: " + rooms +
        " | Adults: " + adults;

});



let subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    document.getElementById("subscribe-message").textContent =
        "Thank you! Your email is " + email;

    subscribeForm.reset();
});

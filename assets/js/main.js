// Main JavaScript file for site-wide functionalities
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully");

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Active link highlighting in navigation
    const currentLocation = window.location.pathname;
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href.includes(currentLocation)) {
            link.classList.add("active-link");
        }
    });

    console.log("Main.js enhancements applied successfully");
});

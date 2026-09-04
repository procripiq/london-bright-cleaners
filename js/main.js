// London Bright Cleaners - Static site JS
// Form submits directly to Formsubmit.co (no AJAX needed)
// This file handles smooth scrolling and mobile nav

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var targetId = this.getAttribute("href");
            if (targetId === "#") return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll(".nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelector(".nav").classList.remove("open");
        });
    });
});

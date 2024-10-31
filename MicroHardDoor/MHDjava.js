document.addEventListener("DOMContentLoaded", function() {
    // Existing code for showing sections
    document.querySelector(".home-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("welcome").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "block";

        // Show the GitHub links
        document.getElementById("github-link").style.display = "block";
    });

    // Code to handle GitHub link clicks and open in a new window
    document.getElementById("github-pedro").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://github.com/Maximus23451", "_blank"); // Replace with Pedro's GitHub URL
    });

    document.getElementById("github-kuci").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://github.com/zoligamer", "_blank"); // Replace with Kuci's GitHub URL
    });

    document.getElementById("github-zubi").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://github.com/mateszornyu", "_blank"); // Replace with Zubi's GitHub URL
    });
});
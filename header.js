// Load the header dynamically
document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Optional: Highlight the active menu link
            const currentPath = window.location.pathname.split('/').pop();
            const links = document.querySelectorAll('.menu a');
            links.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        });
});
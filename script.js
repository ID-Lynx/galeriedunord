// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Debug CSS loading
    const styleSheets = document.styleSheets;
    console.log('Number of stylesheets:', styleSheets.length);
    
    for(let i = 0; i < styleSheets.length; i++) {
        console.log('Stylesheet:', styleSheets[i].href);
    }
    
    // Close mobile menu when clicking a link
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('navLinks').classList.remove('active');
        });
    });
});
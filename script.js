var typed = new Typed(".typing", {
  strings: [
    "Software Engineer",
"Analytical Thinker",
"Technical Strategist",
// "Resourceful Troubleshooter",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: true,
});
var typed = new Typed(".typing-2", {
  strings: [
    "Software Engineer",
"Analytical Thinker",
"Technical Strategist",
"Innovative Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: true,
});


window.addEventListener("scroll", function() {
  var navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('scrolled', window.scrollY > 100); // Toggle the class based on scroll position
});

// Function to toggle navigation menu for smaller screens
function toggleMenu() {
  var nav = document.querySelector('.nav-bar');
  nav.classList.toggle('active');
}

// Function to close the navigation menu when a link is clicked
function closeMenu() {
  var nav = document.querySelector('.nav-bar');
  nav.classList.remove('active');
}

// Add event listeners for menu toggle button and links
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleMenu);

  var navLinks = document.querySelectorAll('.nav-bar ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
});

// Function to adjust layout based on screen width
function adjustLayout() {
  var screenWidth = window.innerWidth;
  var nav = document.querySelector('.nav-bar');
  if (screenWidth < 768) {
    nav.classList.add('mobile');
  } else {
    nav.classList.remove('mobile');
  }
}

// Event listener for window resize
window.addEventListener('resize', adjustLayout);

// Call adjustLayout function on page load
adjustLayout();

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu functionality
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-navlist a');

// Open menu
menuIcon.addEventListener('click', function() {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu
closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close menu when clicking on a link
mobileLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Tab functionality
function openTab(evt, tabName) {
  // Hide all tab content
  const tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('active');
  }

  // Remove active class from all tab buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  // Show the specific tab content
  document.getElementById(tabName).classList.add('active');
  
  // Add active class to the button that opened the tab
  evt.currentTarget.classList.add('active');
}

// Scroll to top button
const topButton = document.getElementById('top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    topButton.classList.add('show-top');
  } else {
    topButton.classList.remove('show-top');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Elements to animate
const animatedElements = document.querySelectorAll('.timeline .container, .box, .row');
animatedElements.forEach(el => {
  observer.observe(el);
  el.classList.add('animate-on-scroll');
});

// Add animation styles directly
const style = document.createElement('style');
style.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-on-scroll.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Initialize all tabs
document.addEventListener('DOMContentLoaded', function() {
  // Get all tab content elements
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Hide all tab content except the first one
  for (let i = 1; i < tabContents.length; i++) {
    tabContents[i].classList.remove('active');
  }
  
  // Make sure the first tab is active for each tab section
  const tabSections = document.querySelectorAll('.tabs');
  tabSections.forEach(section => {
    const firstButton = section.querySelector('.tab-button');
    if (firstButton) {
      firstButton.classList.add('active');
    }
  });
});

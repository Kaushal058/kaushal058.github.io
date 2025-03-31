// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Hide mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('appear');
        }
    });
};

// Run the animation check on load and scroll
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// Dynamic typing effect for profession
const professionElement = document.getElementById('profession');
const professions = ['Accountant', 'Student', 'Problem solver', 'Photoshop Master','Tutor'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    const currentProfession = professions[professionIndex];

    if (isDeleting) {
        // Remove a character
        professionElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        // Add a character
        professionElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }

    // If word is complete, start deleting after a pause
    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause before deleting
    }

    // If word is deleted, move to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typingDelay = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typingDelay);
}

// Start the typing effect
setTimeout(typeEffect, 1000);
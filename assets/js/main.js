   // Initialize EmailJS
   (function() {
    // Replace with your actual EmailJS user ID when you sign up
    emailjs.init("kmqiwwkwS9FR0830B");
})();


const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

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

// Form submission handling with EmailJS
const contactForm = document.getElementById('contactForm');
const loadingSpinner = document.getElementById('loading-spinner');
const submitButton = document.getElementById('submit-btn');
const successMessage = document.getElementById('form-status-success');
const errorMessage = document.getElementById('form-status-error');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    submitButton.disabled = true;
    
    // Hide any existing status messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    
    emailjs.sendForm("service_s408yao","template_w8qap17",this)
        .then(function() {
            // Hide spinner
            loadingSpinner.style.display = 'none';
            submitButton.disabled = false;
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
        }, function(error) {
            // Hide spinner
            loadingSpinner.style.display = 'none';
            submitButton.disabled = false;
            
            // Show error message
            errorMessage.style.display = 'block';
            console.error('Email send failed:', error);
        });
});

// Fade in animation on scroll
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
const professions = ['Accountant', 'Financial Adviser', 'Problem Solver', 'Learner'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
       
        professionElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
       
        professionElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }
    
   
    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause before deleting
    } 
    
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typingDelay = 500; // Pause before typing next word
    }
    
    setTimeout(typeEffect, typingDelay);
}

setTimeout(typeEffect, 1000);
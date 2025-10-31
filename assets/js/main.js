// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-purple-600');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-purple-600');
            link.classList.remove('text-gray-600');
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('November 6, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<div class="text-2xl font-bold">Event is Live!</div>';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Schedule Day Tabs
const dayTabs = document.querySelectorAll('.day-tab');
const scheduleContents = document.querySelectorAll('.schedule-content');

dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        dayTabs.forEach(t => {
            t.classList.remove('active', 'bg-purple-600', 'text-white');
            t.classList.add('text-gray-600');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active', 'bg-purple-600', 'text-white');
        tab.classList.remove('text-gray-600');
        
        // Hide all schedule contents
        scheduleContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Show selected day schedule
        const dayId = tab.getAttribute('data-day');
        document.getElementById(`${dayId}-schedule`).classList.remove('hidden');
    });
});

// Initialize first tab as active
dayTabs[0].classList.add('bg-purple-600', 'text-white');
dayTabs[0].classList.remove('text-gray-600');

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation for contact form (if any)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Competition card hover effect
const competitionCards = document.querySelectorAll('.competition-card');
competitionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Console message
console.log('%cE-Summit 2025', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with ❤️ by E-Cell SIT Web Development Team', 'font-size: 14px; color: #666;');

// ⚡ Motion & Animation Enhancement System
// Smooth, Modern, Premium Animations for E-Summit 2025

// ========================================
// 1. PAGE LOAD ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Navbar slide down
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.add('animate-slideDown');
    }

    // Hero content stagger animation
    const heroElements = document.querySelectorAll('.hero-content > div > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.classList.add('animate-slideUp');
        }, 100 + (index * 100));
    });

    // Logo floating animation
    const logos = document.querySelectorAll('.hero-content .w-12, .hero-content .w-16');
    logos.forEach(logo => {
        logo.classList.add('animate-floating');
    });
});

// ========================================
// 2. SCROLL-TRIGGERED ANIMATIONS
// ========================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            
            // Add appropriate animation class based on data attribute
            if (target.dataset.animate === 'left') {
                target.classList.add('scroll-reveal-left');
            } else if (target.dataset.animate === 'right') {
                target.classList.add('scroll-reveal-right');
            } else if (target.dataset.animate === 'scale') {
                target.classList.add('scroll-reveal-scale');
            } else {
                target.classList.add('scroll-reveal');
            }
            
            // Unobserve after animation
            animateOnScroll.unobserve(target);
        }
    });
}, observerOptions);

// Observe all elements with scroll-hidden class
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-hidden');
    scrollElements.forEach(el => animateOnScroll.observe(el));
});

// ========================================
// 3. CARD STAGGER ANIMATIONS
// ========================================

function staggerCardAnimations() {
    const cardContainers = document.querySelectorAll('.grid');
    
    cardContainers.forEach(container => {
        const cards = container.querySelectorAll('.glass-card, .stat-card, .competition-card, .speaker-card');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = Array.from(entry.target.querySelectorAll('.glass-card, .stat-card, .competition-card, .speaker-card'));
                    
                    cards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        
                        setTimeout(() => {
                            card.classList.add('animate-bounceIn');
                            card.classList.add(`stagger-${Math.min(index + 1, 6)}`);
                        }, 50);
                    });
                    
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        if (container) {
            cardObserver.observe(container);
        }
    });
}

document.addEventListener('DOMContentLoaded', staggerCardAnimations);

// ========================================
// 4. PARTICLE SYSTEM FOR HERO
// ========================================

function createParticles() {
    const particlesContainer = document.querySelector('.particles-dark');
    if (!particlesContainer) return;

    const colors = [
        'var(--purple-royal)',
        'var(--accent-magenta)',
        'var(--accent-blue)',
        'var(--accent-cyan)',
        'var(--accent-gold)'
    ];

    // Create additional animated particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle-dark');
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 3;
        const animationDuration = Math.random() * 5 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            animation-delay: ${animationDelay}s;
            animation-duration: ${animationDuration}s;
            box-shadow: 0 0 ${size * 3}px ${color};
        `;
        
        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);

// ========================================
// 5. NAVBAR EFFECTS
// ========================================

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        navbar.style.background = 'var(--glass-navbar)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(26, 18, 43, 0.85)';
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// 6. BUTTON RIPPLE EFFECT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Ripple effect styles (inline)
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// ========================================
// 7. SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// 8. PARALLAX EFFECT ON SCROLL
// ========================================

function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-dark, .section-speakers, .section-testimonials');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = 0.5;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                element.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', parallaxEffect);

// ========================================
// 9. GRADIENT FLOW ANIMATION
// ========================================

function animateGradients() {
    const gradientElements = document.querySelectorAll('.gradient-text-hero, .btn-primary, .section-footer');
    
    gradientElements.forEach(el => {
        if (el.style.backgroundSize !== '200% 200%') {
            el.style.backgroundSize = '200% 200%';
        }
    });
}

document.addEventListener('DOMContentLoaded', animateGradients);

// ========================================
// 10. COUNTDOWN TIMER ANIMATION
// ========================================

function animateCountdown() {
    const countdownNumbers = document.querySelectorAll('#countdown .gradient-text');
    
    countdownNumbers.forEach(number => {
        number.classList.add('animate-breatheGlow');
    });
}

document.addEventListener('DOMContentLoaded', animateCountdown);

// ========================================
// 11. ICON ROTATION ON HOVER
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-glow');
    
    icons.forEach(icon => {
        let rotation = 0;
        
        icon.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            rotation += 360;
            this.style.transform = `rotate(${rotation}deg) scale(1.1)`;
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });
});

// ========================================
// 12. TEXT SHIMMER EFFECT
// ========================================

function addShimmerToHeadings() {
    const mainHeadings = document.querySelectorAll('h1, h2.gradient-text');
    
    mainHeadings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.classList.add('animate-shimmer');
        });
        
        heading.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.classList.remove('animate-shimmer');
            }, 3000);
        });
    });
}

document.addEventListener('DOMContentLoaded', addShimmerToHeadings);

// ========================================
// 13. STATS COUNTER ANIMATION
// ========================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseInt(target.dataset.target);
                const duration = 2000;
                const step = targetNumber / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < targetNumber) {
                        target.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = targetNumber;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ========================================
// 14. FOOTER REVEAL ANIMATION
// ========================================

function animateFooter() {
    const footer = document.querySelector('.section-footer');
    
    if (footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slideUp');
                    
                    // Animate footer children with stagger
                    const footerChildren = entry.target.querySelectorAll('.container > div > div');
                    footerChildren.forEach((child, index) => {
                        child.style.opacity = '0';
                        setTimeout(() => {
                            child.classList.add('animate-fadeInBlur');
                        }, 100 + (index * 100));
                    });
                    
                    footerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        footerObserver.observe(footer);
    }
}

document.addEventListener('DOMContentLoaded', animateFooter);

// ========================================
// 15. CURSOR GLOW TRAIL (Optional)
// ========================================

function createCursorGlow() {
    // Only enable on devices with mouse (not touch)
    if ('ontouchstart' in window) return;
    
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
        z-index: 9999;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// Uncomment to enable cursor glow
// document.addEventListener('DOMContentLoaded', createCursorGlow);

// ========================================
// 16. PERFORMANCE OPTIMIZATION
// ========================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms';
        el.style.transitionDuration = '0.01ms';
    });
}

// Log animation system loaded
console.log('⚡ E-Summit 2025 Animation System Loaded');
console.log('💜 Purple Futuristic Theme Active');
console.log('🎨 Motion Effects: Enabled');

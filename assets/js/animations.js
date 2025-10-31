// Animation utilities for E-Summit 2025
// Enhanced animations and micro-interactions

// Particle system for hero sections
class ParticleSystem {
    constructor(container, options = {}) {
        this.container = container;
        this.particles = [];
        this.options = {
            count: options.count || 50,
            colors: options.colors || ['#1E90FF', '#5A189A', '#48CAE4', '#E0AAFF', '#9D4EDD'],
            speed: options.speed || 1,
            size: options.size || { min: 2, max: 6 }
        };
        
        this.init();
    }
    
    init() {
        this.createParticles();
        this.animate();
    }
    
    createParticles() {
        for (let i = 0; i < this.options.count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-dark';
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            this.resetParticle(particle);
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }
    
    resetParticle(particle) {
        const size = Math.random() * (this.options.size.max - this.options.size.min) + this.options.size.min;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    }
    
    animate() {
        // Animation is handled by CSS, this method can be extended for custom animations
        setInterval(() => {
            this.particles.forEach(particle => {
                if (Math.random() < 0.01) { // 1% chance to reset particle
                    this.resetParticle(particle);
                }
            });
        }, 100);
    }
}

// Smooth reveal animations
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Parallax scrolling effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Typing animation effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Glitch text effect
function glitchText(element, originalText, duration = 2000) {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iteration) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iteration >= originalText.length) {
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}

// Magnetic button effect
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Floating elements animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.animationDuration = `${3 + Math.random() * 2}s`;
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initRevealAnimations();
    initParallaxEffect();
    initMagneticButtons();
    initFloatingElements();
    
    // Initialize particle systems
    const heroSections = document.querySelectorAll('.particles-dark');
    heroSections.forEach(section => {
        new ParticleSystem(section);
    });
    
    console.log('🎨 Animations initialized successfully!');
});

// Export functions for use in other scripts
window.AnimationUtils = {
    typeWriter,
    glitchText,
    ParticleSystem
};
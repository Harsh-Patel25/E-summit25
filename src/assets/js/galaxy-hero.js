// 🌌 Galaxy Hero Animation System with Multi-Theme Support
// Premium particle animation with 6 color themes

class GalaxyHero {
    constructor() {
        this.canvas = document.getElementById('galaxyCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.nebulaClouds = [];
        this.shootingStars = [];
        this.floatingOrbs = [];
        this.mouse = { x: 0, y: 0 };
        this.currentTheme = 'cosmic-blue';
        
        // Theme definitions
        this.themes = {
            'cosmic-blue': {
                name: 'Cosmic Blue Glow',
                bg: '#050816',
                primary: '#1E90FF',
                secondary: '#00FFFF',
                text: '#F5F9FF',
                accent: '#3A3F47',
                particles: ['#1E90FF', '#00FFFF', '#4169E1', '#87CEEB'],
                glow: 'rgba(30, 144, 255, 0.8)'
            },
            'sunset-horizon': {
                name: 'Sunset Horizon',
                bg: '#0B132B',
                primary: '#FF7A00',
                secondary: '#FFD369',
                text: '#FFF5E4',
                accent: '#2B2B2B',
                particles: ['#FF7A00', '#FFD369', '#FF6B35', '#FFA500'],
                glow: 'rgba(255, 122, 0, 0.8)'
            },
            'titanium-dark': {
                name: 'Titanium Dark Mode',
                bg: '#0F1115',
                primary: '#1E3A8A',
                secondary: '#A0AEC0',
                text: '#EDF2F7',
                accent: '#2D3748',
                particles: ['#1E3A8A', '#A0AEC0', '#4A5568', '#718096'],
                glow: 'rgba(30, 58, 138, 0.8)'
            },
            'aurora-energy': {
                name: 'Aurora Energy',
                bg: '#071E22',
                primary: '#00FF9C',
                secondary: '#00BFFF',
                text: '#E8F6F3',
                accent: '#1B2E35',
                particles: ['#00FF9C', '#00BFFF', '#00E5A0', '#00CED1'],
                glow: 'rgba(0, 255, 156, 0.8)'
            },
            'crimson-edge': {
                name: 'Crimson Edge',
                bg: '#0D0D0D',
                primary: '#FF2E63',
                secondary: '#FF7096',
                text: '#F8F9FA',
                accent: '#333643',
                particles: ['#FF2E63', '#FF7096', '#FF1744', '#FF4081'],
                glow: 'rgba(255, 46, 99, 0.8)'
            },
            'neon-pulse': {
                name: 'Neon Pulse',
                bg: '#01010A',
                primary: '#FF00FF',
                secondary: '#00FFFF',
                text: '#FFFFFF',
                accent: '#7DF9FF',
                particles: ['#FF00FF', '#00FFFF', '#FF1493', '#00CED1'],
                glow: 'rgba(255, 0, 255, 0.8)'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createParticles();
        this.createNebulaClouds();
        this.createFloatingOrbs();
        this.setupEventListeners();
        this.animate();
        this.applyTheme(this.currentTheme);
    }
    
    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.createParticles(); // Recreate for new dimensions
        });
    }
    
    // Create star particles
    createParticles() {
        this.particles = [];
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 8000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                z: Math.random() * 1000,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                speedZ: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.8 + 0.2,
                twinkle: Math.random() * 0.02 + 0.01,
                twinkleDirection: 1
            });
        }
    }
    
    // Create nebula cloud layers
    createNebulaClouds() {
        this.nebulaClouds = [];
        for (let i = 0; i < 5; i++) {
            this.nebulaClouds.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 200 + 150,
                opacity: Math.random() * 0.15 + 0.05,
                speedX: (Math.random() - 0.5) * 0.1,
                speedY: (Math.random() - 0.5) * 0.1
            });
        }
    }
    
    // Create floating orbs
    createFloatingOrbs() {
        this.floatingOrbs = [];
        for (let i = 0; i < 8; i++) {
            this.floatingOrbs.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 40 + 20,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.1,
                pulse: 0,
                pulseSpeed: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    // Create shooting star
    createShootingStar() {
        if (Math.random() < 0.995) return; // Rare occurrence
        
        const startX = Math.random() * this.canvas.width;
        const startY = Math.random() * this.canvas.height * 0.5;
        
        this.shootingStars.push({
            x: startX,
            y: startY,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 8 + 6,
            angle: Math.random() * Math.PI / 4 + Math.PI / 4,
            opacity: 1,
            decay: 0.02
        });
    }
    
    setupEventListeners() {
        // Mouse parallax
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 50;
            this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 50;
        });
        
        // Theme switcher
        const themeButtons = document.querySelectorAll('[data-theme]');
        themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');
                this.applyTheme(theme);
            });
        });
    }
    
    applyTheme(themeName) {
        this.currentTheme = themeName;
        const theme = this.themes[themeName];
        
        // Update CSS variables
        document.documentElement.style.setProperty('--galaxy-bg', theme.bg);
        document.documentElement.style.setProperty('--galaxy-primary', theme.primary);
        document.documentElement.style.setProperty('--galaxy-secondary', theme.secondary);
        document.documentElement.style.setProperty('--galaxy-text', theme.text);
        document.documentElement.style.setProperty('--galaxy-accent', theme.accent);
        document.documentElement.style.setProperty('--galaxy-glow', theme.glow);
        
        // Update active button
        document.querySelectorAll('[data-theme]').forEach(btn => {
            btn.classList.remove('active-theme');
        });
        document.querySelector(`[data-theme="${themeName}"]`)?.classList.add('active-theme');
        
        // Animate transition
        document.body.style.transition = 'background-color 0.5s ease';
    }
    
    drawNebulaClouds() {
        const theme = this.themes[this.currentTheme];
        
        this.nebulaClouds.forEach(cloud => {
            const gradient = this.ctx.createRadialGradient(
                cloud.x, cloud.y, 0,
                cloud.x, cloud.y, cloud.radius
            );
            
            gradient.addColorStop(0, theme.particles[0] + '40');
            gradient.addColorStop(0.5, theme.particles[1] + '20');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.globalAlpha = cloud.opacity;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Move clouds
            cloud.x += cloud.speedX - this.mouse.x * 0.001;
            cloud.y += cloud.speedY - this.mouse.y * 0.001;
            
            // Wrap around
            if (cloud.x < -cloud.radius) cloud.x = this.canvas.width + cloud.radius;
            if (cloud.x > this.canvas.width + cloud.radius) cloud.x = -cloud.radius;
            if (cloud.y < -cloud.radius) cloud.y = this.canvas.height + cloud.radius;
            if (cloud.y > this.canvas.height + cloud.radius) cloud.y = -cloud.radius;
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawParticles() {
        const theme = this.themes[this.currentTheme];
        
        this.particles.forEach(particle => {
            // Calculate depth perspective
            const scale = 1000 / (1000 + particle.z);
            const x = (particle.x - this.canvas.width / 2) * scale + this.canvas.width / 2;
            const y = (particle.y - this.canvas.height / 2) * scale + this.canvas.height / 2;
            const size = particle.size * scale;
            
            // Parallax effect
            const parallaxX = x + this.mouse.x * (particle.z / 1000) * 2;
            const parallaxY = y + this.mouse.y * (particle.z / 1000) * 2;
            
            // Twinkle effect
            particle.opacity += particle.twinkle * particle.twinkleDirection;
            if (particle.opacity >= 1 || particle.opacity <= 0.2) {
                particle.twinkleDirection *= -1;
            }
            
            // Draw particle
            const color = theme.particles[Math.floor(Math.random() * theme.particles.length)];
            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = particle.opacity * scale;
            
            // Glow effect
            this.ctx.shadowBlur = size * 3;
            this.ctx.shadowColor = color;
            
            this.ctx.beginPath();
            this.ctx.arc(parallaxX, parallaxY, size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.shadowBlur = 0;
            
            // Move particle
            particle.z -= particle.speedZ;
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Reset if out of bounds
            if (particle.z < 1) {
                particle.z = 1000;
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
            }
            
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawFloatingOrbs() {
        const theme = this.themes[this.currentTheme];
        
        this.floatingOrbs.forEach(orb => {
            // Pulse effect
            orb.pulse += orb.pulseSpeed;
            const pulseSize = Math.sin(orb.pulse) * 5;
            
            const gradient = this.ctx.createRadialGradient(
                orb.x, orb.y, 0,
                orb.x, orb.y, orb.radius + pulseSize
            );
            
            gradient.addColorStop(0, theme.primary + 'AA');
            gradient.addColorStop(0.5, theme.secondary + '40');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.globalAlpha = orb.opacity;
            this.ctx.beginPath();
            this.ctx.arc(orb.x, orb.y, orb.radius + pulseSize, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Move orb
            orb.x += orb.speedX - this.mouse.x * 0.002;
            orb.y += orb.speedY - this.mouse.y * 0.002;
            
            // Bounce off edges
            if (orb.x < -orb.radius || orb.x > this.canvas.width + orb.radius) {
                orb.speedX *= -1;
            }
            if (orb.y < -orb.radius || orb.y > this.canvas.height + orb.radius) {
                orb.speedY *= -1;
            }
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawShootingStars() {
        const theme = this.themes[this.currentTheme];
        
        this.shootingStars = this.shootingStars.filter(star => {
            // Calculate end point
            const endX = star.x + Math.cos(star.angle) * star.length;
            const endY = star.y + Math.sin(star.angle) * star.length;
            
            // Draw gradient line
            const gradient = this.ctx.createLinearGradient(star.x, star.y, endX, endY);
            gradient.addColorStop(0, theme.primary + 'FF');
            gradient.addColorStop(0.5, theme.secondary + 'AA');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.globalAlpha = star.opacity;
            
            this.ctx.beginPath();
            this.ctx.moveTo(star.x, star.y);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            // Move shooting star
            star.x += Math.cos(star.angle) * star.speed;
            star.y += Math.sin(star.angle) * star.speed;
            star.opacity -= star.decay;
            
            return star.opacity > 0;
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    animate() {
        // Clear canvas
        this.ctx.fillStyle = this.themes[this.currentTheme].bg;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw layers (back to front)
        this.drawNebulaClouds();
        this.drawFloatingOrbs();
        this.drawParticles();
        this.drawShootingStars();
        
        // Create occasional shooting stars
        this.createShootingStar();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const galaxyHero = new GalaxyHero();
    
    // Fade in hero content
    setTimeout(() => {
        document.querySelector('.hero-content')?.classList.add('fade-in-active');
    }, 300);
    
    // Pulse scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
        let direction = 1;
        let position = 0;
        setInterval(() => {
            position += direction * 0.5;
            if (position > 10 || position < 0) direction *= -1;
            scrollIndicator.style.transform = `translateY(${position}px)`;
        }, 50);
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GalaxyHero;
}

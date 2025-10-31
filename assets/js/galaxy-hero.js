// Galaxy Hero Section with Cosmic Effects
// Advanced particle system and cosmic animations

class GalaxyHero {
    constructor(container, options = {}) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.stars = [];
        this.mouse = { x: 0, y: 0 };
        
        this.options = {
            particleCount: options.particleCount || 100,
            starCount: options.starCount || 200,
            colors: options.colors || {
                particles: ['#1E90FF', '#5A189A', '#48CAE4', '#E0AAFF', '#9D4EDD'],
                stars: ['#FFFFFF', '#F0F6FC', '#C8D3F0'],
                nebula: ['#1E90FF', '#5A189A', '#9D4EDD']
            },
            speed: options.speed || 0.5,
            interactive: options.interactive !== false
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createParticles();
        this.createStars();
        this.bindEvents();
        this.animate();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.resize();
    }
    
    resize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    createParticles() {
        for (let i = 0; i < this.options.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.options.speed,
                vy: (Math.random() - 0.5) * this.options.speed,
                size: Math.random() * 3 + 1,
                color: this.options.colors.particles[Math.floor(Math.random() * this.options.colors.particles.length)],
                opacity: Math.random() * 0.8 + 0.2,
                life: Math.random() * 100
            });
        }
    }
    
    createStars() {
        for (let i = 0; i < this.options.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                color: this.options.colors.stars[Math.floor(Math.random() * this.options.colors.stars.length)],
                opacity: Math.random() * 0.8 + 0.2,
                twinkle: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        if (this.options.interactive) {
            this.container.addEventListener('mousemove', (e) => {
                const rect = this.container.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            });
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Interactive effect
            if (this.options.interactive) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += dx * force * 0.001;
                    particle.vy += dy * force * 0.001;
                }
            }
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Life cycle
            particle.life += 0.5;
            if (particle.life > 100) {
                particle.life = 0;
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
            }
        });
    }
    
    updateStars() {
        this.stars.forEach(star => {
            star.opacity += star.twinkle;
            if (star.opacity > 1 || star.opacity < 0.2) {
                star.twinkle *= -1;
            }
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }
    
    drawStars() {
        this.stars.forEach(star => {
            this.ctx.save();
            this.ctx.globalAlpha = star.opacity;
            this.ctx.fillStyle = star.color;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    drawConnections() {
        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(30, 144, 255, 0.1)';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.globalAlpha = (100 - distance) / 100 * 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        this.ctx.restore();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateStars();
        this.updateParticles();
        
        this.drawStars();
        this.drawConnections();
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize galaxy hero sections
document.addEventListener('DOMContentLoaded', () => {
    const heroSections = document.querySelectorAll('.hero-dark');
    
    heroSections.forEach(section => {
        new GalaxyHero(section, {
            particleCount: 80,
            starCount: 150,
            interactive: true
        });
    });
    
    console.log('🌌 Galaxy Hero initialized!');
});

// Export for use in other scripts
window.GalaxyHero = GalaxyHero;
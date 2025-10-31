// Cinematic Galaxy Effects for E-Summit 2025
// Advanced cosmic animations and visual effects

class CinematicGalaxy {
    constructor(container, options = {}) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        
        // Cosmic elements
        this.stars = [];
        this.nebulae = [];
        this.comets = [];
        this.pulsingOrbs = [];
        
        this.mouse = { x: 0, y: 0 };
        this.time = 0;
        
        this.options = {
            starCount: options.starCount || 300,
            nebulaCount: options.nebulaCount || 5,
            cometCount: options.cometCount || 3,
            orbCount: options.orbCount || 8,
            colors: options.colors || {
                stars: ['#FFFFFF', '#F0F6FC', '#C8D3F0', '#1E90FF'],
                nebula: ['#1E90FF', '#5A189A', '#9D4EDD', '#E0AAFF'],
                comets: ['#1E90FF', '#48CAE4', '#E0AAFF'],
                orbs: ['#1E90FF', '#5A189A', '#9D4EDD', '#E0AAFF', '#48CAE4']
            },
            interactive: options.interactive !== false,
            speed: options.speed || 1
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createStars();
        this.createNebulae();
        this.createComets();
        this.createPulsingOrbs();
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
        
        // Recreate elements on resize
        this.createStars();
        this.createNebulae();
        this.createComets();
        this.createPulsingOrbs();
    }
    
    createStars() {
        this.stars = [];
        for (let i = 0; i < this.options.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                color: this.options.colors.stars[Math.floor(Math.random() * this.options.colors.stars.length)],
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }
    
    createNebulae() {
        this.nebulae = [];
        for (let i = 0; i < this.options.nebulaCount; i++) {
            this.nebulae.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 200 + 100,
                color: this.options.colors.nebula[Math.floor(Math.random() * this.options.colors.nebula.length)],
                opacity: Math.random() * 0.1 + 0.05,
                drift: {
                    x: (Math.random() - 0.5) * 0.2,
                    y: (Math.random() - 0.5) * 0.2
                },
                pulse: Math.random() * 0.01 + 0.005
            });
        }
    }
    
    createComets() {
        this.comets = [];
        for (let i = 0; i < this.options.cometCount; i++) {
            this.resetComet(i);
        }
    }
    
    resetComet(index) {
        const side = Math.floor(Math.random() * 4);
        let x, y, vx, vy;
        
        switch (side) {
            case 0: // Top
                x = Math.random() * this.canvas.width;
                y = -50;
                vx = (Math.random() - 0.5) * 2;
                vy = Math.random() * 2 + 1;
                break;
            case 1: // Right
                x = this.canvas.width + 50;
                y = Math.random() * this.canvas.height;
                vx = -(Math.random() * 2 + 1);
                vy = (Math.random() - 0.5) * 2;
                break;
            case 2: // Bottom
                x = Math.random() * this.canvas.width;
                y = this.canvas.height + 50;
                vx = (Math.random() - 0.5) * 2;
                vy = -(Math.random() * 2 + 1);
                break;
            case 3: // Left
                x = -50;
                y = Math.random() * this.canvas.height;
                vx = Math.random() * 2 + 1;
                vy = (Math.random() - 0.5) * 2;
                break;
        }
        
        if (!this.comets[index]) {
            this.comets[index] = {};
        }
        
        Object.assign(this.comets[index], {
            x, y, vx, vy,
            size: Math.random() * 3 + 2,
            color: this.options.colors.comets[Math.floor(Math.random() * this.options.colors.comets.length)],
            tail: [],
            maxTailLength: 20
        });
    }
    
    createPulsingOrbs() {
        this.pulsingOrbs = [];
        for (let i = 0; i < this.options.orbCount; i++) {
            this.pulsingOrbs.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                baseSize: Math.random() * 20 + 10,
                size: 0,
                color: this.options.colors.orbs[Math.floor(Math.random() * this.options.colors.orbs.length)],
                pulseSpeed: Math.random() * 0.02 + 0.01,
                phase: Math.random() * Math.PI * 2,
                drift: {
                    x: (Math.random() - 0.5) * 0.3,
                    y: (Math.random() - 0.5) * 0.3
                }
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
    
    updateStars() {
        this.stars.forEach(star => {
            star.twinklePhase += star.twinkleSpeed;
            star.opacity = 0.3 + Math.sin(star.twinklePhase) * 0.5;
        });
    }
    
    updateNebulae() {
        this.nebulae.forEach(nebula => {
            nebula.x += nebula.drift.x * this.options.speed;
            nebula.y += nebula.drift.y * this.options.speed;
            nebula.opacity = 0.05 + Math.sin(this.time * nebula.pulse) * 0.03;
            
            // Wrap around screen
            if (nebula.x > this.canvas.width + nebula.size) nebula.x = -nebula.size;
            if (nebula.x < -nebula.size) nebula.x = this.canvas.width + nebula.size;
            if (nebula.y > this.canvas.height + nebula.size) nebula.y = -nebula.size;
            if (nebula.y < -nebula.size) nebula.y = this.canvas.height + nebula.size;
        });
    }
    
    updateComets() {
        this.comets.forEach((comet, index) => {
            // Add current position to tail
            comet.tail.push({ x: comet.x, y: comet.y });
            if (comet.tail.length > comet.maxTailLength) {
                comet.tail.shift();
            }
            
            // Update position
            comet.x += comet.vx * this.options.speed;
            comet.y += comet.vy * this.options.speed;
            
            // Reset if out of bounds
            if (comet.x < -100 || comet.x > this.canvas.width + 100 ||
                comet.y < -100 || comet.y > this.canvas.height + 100) {
                this.resetComet(index);
            }
        });
    }
    
    updatePulsingOrbs() {
        this.pulsingOrbs.forEach(orb => {
            orb.phase += orb.pulseSpeed;
            orb.size = orb.baseSize * (0.5 + Math.sin(orb.phase) * 0.5);
            
            orb.x += orb.drift.x * this.options.speed;
            orb.y += orb.drift.y * this.options.speed;
            
            // Interactive effect
            if (this.options.interactive) {
                const dx = this.mouse.x - orb.x;
                const dy = this.mouse.y - orb.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    orb.size += force * 10;
                }
            }
            
            // Wrap around screen
            if (orb.x > this.canvas.width + 50) orb.x = -50;
            if (orb.x < -50) orb.x = this.canvas.width + 50;
            if (orb.y > this.canvas.height + 50) orb.y = -50;
            if (orb.y < -50) orb.y = this.canvas.height + 50;
        });
    }
    
    drawStars() {
        this.stars.forEach(star => {
            this.ctx.save();
            this.ctx.globalAlpha = star.opacity;
            this.ctx.fillStyle = star.color;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = star.color;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    drawNebulae() {
        this.nebulae.forEach(nebula => {
            this.ctx.save();
            this.ctx.globalAlpha = nebula.opacity;
            
            const gradient = this.ctx.createRadialGradient(
                nebula.x, nebula.y, 0,
                nebula.x, nebula.y, nebula.size
            );
            gradient.addColorStop(0, nebula.color);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(nebula.x, nebula.y, nebula.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    drawComets() {
        this.comets.forEach(comet => {
            // Draw tail
            this.ctx.save();
            comet.tail.forEach((point, index) => {
                const alpha = index / comet.tail.length * 0.8;
                this.ctx.globalAlpha = alpha;
                this.ctx.fillStyle = comet.color;
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, comet.size * alpha, 0, Math.PI * 2);
                this.ctx.fill();
            });
            
            // Draw comet head
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = comet.color;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = comet.color;
            this.ctx.beginPath();
            this.ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    drawPulsingOrbs() {
        this.pulsingOrbs.forEach(orb => {
            this.ctx.save();
            this.ctx.globalAlpha = 0.6;
            
            const gradient = this.ctx.createRadialGradient(
                orb.x, orb.y, 0,
                orb.x, orb.y, orb.size
            );
            gradient.addColorStop(0, orb.color);
            gradient.addColorStop(0.7, orb.color + '80');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }
    
    animate() {
        this.time += 0.016; // ~60fps
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateStars();
        this.updateNebulae();
        this.updateComets();
        this.updatePulsingOrbs();
        
        this.drawNebulae();
        this.drawStars();
        this.drawPulsingOrbs();
        this.drawComets();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Initialize cinematic galaxy on hero sections
document.addEventListener('DOMContentLoaded', () => {
    const heroSections = document.querySelectorAll('.hero-dark');
    
    heroSections.forEach(section => {
        new CinematicGalaxy(section, {
            starCount: 250,
            nebulaCount: 4,
            cometCount: 2,
            orbCount: 6,
            interactive: true,
            speed: 0.8
        });
    });
    
    console.log('🌌 Cinematic Galaxy effects initialized!');
});

// Export for use in other scripts
window.CinematicGalaxy = CinematicGalaxy;
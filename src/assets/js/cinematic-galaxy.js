// 🌌 Advanced Cinematic Galaxy Animation Engine
// Fixed Palette: Cosmic Blue Glow Theme
// Colors: Electric Blue (#1E90FF) + Neon Cyan (#00FFFF)
// Premium 3D depth with optimized performance

class CinematicGalaxy {
    constructor() {
        this.canvas = document.getElementById('galaxyCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Fixed Cosmic Blue Glow palette
        this.colors = {
            electricBlue: '#1E90FF',
            neonCyan: '#00FFFF',
            softBlue: '#4FC3F7',
            white: '#F5F9FF',
            particles: ['#00FFFF', '#1E90FF', '#4FC3F7', '#87CEEB', '#5DADE2']
        };
        
        this.particles = [];
        this.nebulaClouds = [];
        this.shootingStars = [];
        this.connectionLines = [];
        this.mouse = { x: 0, y: 0, moveX: 0, moveY: 0 };
        this.time = 0;
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createParticleSystem();
        this.createNebulaClouds();
        this.setupEventListeners();
        this.animate();
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Recreate particles on resize
        if (this.particles.length > 0) {
            this.createParticleSystem();
        }
    }
    
    // Advanced particle system with 3D depth
    createParticleSystem() {
        this.particles = [];
        const density = (this.canvas.width * this.canvas.height) / 6000;
        const particleCount = Math.floor(density);
        
        for (let i = 0; i < particleCount; i++) {
            const depth = Math.random();
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                z: depth * 1500 + 100, // 3D depth
                baseZ: depth * 1500 + 100,
                size: Math.random() * 2.5 + 0.8,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                speedZ: Math.random() * 0.8 + 0.3,
                opacity: Math.random() * 0.9 + 0.1,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
                color: this.colors.particles[Math.floor(Math.random() * this.colors.particles.length)],
                pulsePhase: Math.random() * Math.PI * 2,
                isConnector: Math.random() < 0.1 // 10% are connection points
            });
        }
    }
    
    // Cinematic nebula clouds with depth
    createNebulaClouds() {
        this.nebulaClouds = [];
        const cloudCount = 8;
        
        for (let i = 0; i < cloudCount; i++) {
            this.nebulaClouds.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 250 + 200,
                opacity: Math.random() * 0.08 + 0.03,
                speedX: (Math.random() - 0.5) * 0.15,
                speedY: (Math.random() - 0.5) * 0.15,
                color: Math.random() > 0.5 ? this.colors.neonCyan : this.colors.electricBlue,
                pulseSpeed: Math.random() * 0.01 + 0.005,
                pulsePhase: Math.random() * Math.PI * 2,
                depth: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    // Create cinematic shooting stars
    createShootingStar() {
        if (Math.random() < 0.993) return;
        
        const isTopLeft = Math.random() < 0.5;
        const startX = isTopLeft ? Math.random() * this.canvas.width * 0.5 : this.canvas.width - Math.random() * this.canvas.width * 0.5;
        const startY = Math.random() * this.canvas.height * 0.3;
        
        this.shootingStars.push({
            x: startX,
            y: startY,
            length: Math.random() * 100 + 60,
            speed: Math.random() * 10 + 8,
            angle: Math.random() * Math.PI / 6 + Math.PI / 4,
            opacity: 1,
            decay: 0.015,
            color: Math.random() > 0.5 ? this.colors.neonCyan : this.colors.electricBlue,
            width: Math.random() * 2 + 1
        });
    }
    
    setupEventListeners() {
        // Mouse parallax DISABLED for performance
        // Mouse position always stays at center (0, 0)
        this.mouse.x = 0;
        this.mouse.y = 0;
        this.mouse.moveX = 0;
        this.mouse.moveY = 0;
        
        // Commented out mouse tracking
        /*
        let lastX = 0, lastY = 0;
        
        window.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            this.mouse.x = ((e.clientX - centerX) / centerX) * 60;
            this.mouse.y = ((e.clientY - centerY) / centerY) * 60;
            
            this.mouse.moveX = e.clientX - lastX;
            this.mouse.moveY = e.clientY - lastY;
            
            lastX = e.clientX;
            lastY = e.clientY;
        });
        
        // Reset on mouse leave
        window.addEventListener('mouseleave', () => {
            this.mouse.x = 0;
            this.mouse.y = 0;
        });
        */
    }
    
    // Draw nebula clouds with depth blur
    drawNebulaClouds() {
        this.nebulaClouds.forEach(cloud => {
            // Pulsing effect
            cloud.pulsePhase += cloud.pulseSpeed;
            const pulse = Math.sin(cloud.pulsePhase) * 0.03 + 1;
            const currentRadius = cloud.radius * pulse;
            
            // Parallax based on depth
            const parallaxX = cloud.x - this.mouse.x * cloud.depth;
            const parallaxY = cloud.y - this.mouse.y * cloud.depth;
            
            // Create radial gradient
            const gradient = this.ctx.createRadialGradient(
                parallaxX, parallaxY, 0,
                parallaxX, parallaxY, currentRadius
            );
            
            const colorRgb = this.hexToRgb(cloud.color);
            gradient.addColorStop(0, `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${cloud.opacity})`);
            gradient.addColorStop(0.4, `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${cloud.opacity * 0.5})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Movement
            cloud.x += cloud.speedX - this.mouse.x * 0.002;
            cloud.y += cloud.speedY - this.mouse.y * 0.002;
            
            // Wrap around
            if (cloud.x < -currentRadius) cloud.x = this.canvas.width + currentRadius;
            if (cloud.x > this.canvas.width + currentRadius) cloud.x = -currentRadius;
            if (cloud.y < -currentRadius) cloud.y = this.canvas.height + currentRadius;
            if (cloud.y > this.canvas.height + currentRadius) cloud.y = -currentRadius;
        });
    }
    
    // Advanced particle rendering with 3D depth
    drawParticles() {
        const connectorParticles = this.particles.filter(p => p.isConnector);
        
        this.particles.forEach((particle, index) => {
            // 3D perspective calculation
            const scale = 1000 / (1000 + particle.z - 500);
            const x = (particle.x - this.canvas.width / 2) * scale + this.canvas.width / 2;
            const y = (particle.y - this.canvas.height / 2) * scale + this.canvas.height / 2;
            const size = particle.size * scale;
            
            // Advanced parallax with depth
            const depthFactor = (particle.z / 1500);
            const parallaxX = x + this.mouse.x * depthFactor * 3;
            const parallaxY = y + this.mouse.y * depthFactor * 3;
            
            // Twinkle effect
            particle.twinklePhase += particle.twinkleSpeed;
            const twinkle = Math.sin(particle.twinklePhase) * 0.4 + 0.6;
            particle.opacity = Math.max(0.1, Math.min(1, twinkle));
            
            // Pulse for depth
            particle.pulsePhase += 0.02;
            const pulse = Math.sin(particle.pulsePhase) * 0.2 + 1;
            
            // Draw particle with glow
            const opacity = particle.opacity * scale * pulse;
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = opacity;
            
            // Glow effect
            this.ctx.shadowBlur = size * 4;
            this.ctx.shadowColor = particle.color;
            
            this.ctx.beginPath();
            this.ctx.arc(parallaxX, parallaxY, size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.shadowBlur = 0;
            
            // Draw connections between nearby connector particles
            if (particle.isConnector && scale > 0.5) {
                connectorParticles.forEach(other => {
                    if (other === particle) return;
                    
                    const otherScale = 1000 / (1000 + other.z - 500);
                    const otherX = (other.x - this.canvas.width / 2) * otherScale + this.canvas.width / 2;
                    const otherY = (other.y - this.canvas.height / 2) * otherScale + this.canvas.height / 2;
                    
                    const distance = Math.hypot(parallaxX - otherX, parallaxY - otherY);
                    
                    if (distance < 150) {
                        const connectionOpacity = (1 - distance / 150) * 0.15 * scale * otherScale;
                        this.ctx.strokeStyle = particle.color;
                        this.ctx.globalAlpha = connectionOpacity;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.beginPath();
                        this.ctx.moveTo(parallaxX, parallaxY);
                        this.ctx.lineTo(otherX, otherY);
                        this.ctx.stroke();
                    }
                });
            }
            
            // Particle movement with camera drift
            particle.z -= particle.speedZ;
            particle.x += particle.speedX + Math.sin(this.time * 0.001) * 0.1;
            particle.y += particle.speedY + Math.cos(this.time * 0.001) * 0.1;
            
            // Reset particles that move too close
            if (particle.z < 50) {
                particle.z = 1600;
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
            }
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    // Cinematic shooting stars
    drawShootingStars() {
        this.shootingStars = this.shootingStars.filter(star => {
            const endX = star.x + Math.cos(star.angle) * star.length;
            const endY = star.y + Math.sin(star.angle) * star.length;
            
            // Gradient trail
            const gradient = this.ctx.createLinearGradient(
                star.x, star.y, endX, endY
            );
            
            const colorRgb = this.hexToRgb(star.color);
            gradient.addColorStop(0, `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${star.opacity})`);
            gradient.addColorStop(0.5, `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${star.opacity * 0.6})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = star.width;
            this.ctx.globalAlpha = star.opacity;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = star.color;
            
            this.ctx.beginPath();
            this.ctx.moveTo(star.x, star.y);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            this.ctx.shadowBlur = 0;
            
            // Movement
            star.x += Math.cos(star.angle) * star.speed;
            star.y += Math.sin(star.angle) * star.speed;
            star.opacity -= star.decay;
            
            return star.opacity > 0 && star.x < this.canvas.width + 200 && star.y < this.canvas.height + 200;
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    // Add depth fog effect
    drawDepthFog() {
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, this.canvas.height / 2, 0,
            this.canvas.width / 2, this.canvas.height / 2, Math.max(this.canvas.width, this.canvas.height) * 0.8
        );
        
        gradient.addColorStop(0, 'rgba(5, 8, 22, 0)');
        gradient.addColorStop(0.7, 'rgba(5, 8, 22, 0.1)');
        gradient.addColorStop(1, 'rgba(5, 8, 22, 0.3)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    // Main animation loop
    animate() {
        this.time++;
        
        // Clear with slight trail for motion blur
        this.ctx.fillStyle = 'rgba(5, 8, 22, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render layers (back to front)
        this.drawNebulaClouds();
        this.drawParticles();
        this.drawShootingStars();
        this.drawDepthFog();
        
        // Create occasional shooting stars
        this.createShootingStar();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
    
    // Helper: Hex to RGB
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const galaxy = new CinematicGalaxy();
    
    // Fade in hero content
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0) scale(1)';
        }
    }, 500);
    
    console.log('🌌 Cinematic Galaxy Engine Initialized');
    console.log('💙 Fixed Palette: Cosmic Blue Glow');
    console.log('🎨 Colors: Electric Blue (#1E90FF) + Neon Cyan (#00FFFF)');
    console.log('✨ Features: 3D Depth | Connection Lines | Shooting Stars | Optimized Performance');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CinematicGalaxy;
}

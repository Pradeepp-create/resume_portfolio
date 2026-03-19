// script.js - Busfolio Logic
class Busfolio {
    constructor() {
        this.currentSection = 0;
        this.totalSections = 10;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateUI();
    }

    cacheDOM() {
        this.bus = document.getElementById('bus');
        this.sections = document.querySelectorAll('.section');
        this.stops = document.querySelectorAll('.stop');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        this.stops.forEach((stop, index) => {
            stop.addEventListener('click', () => this.goTo(index));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    next() {
        if (this.currentSection < this.totalSections - 1 && !this.isTransitioning) {
            this.goTo(this.currentSection + 1);
        }
    }

    prev() {
        if (this.currentSection > 0 && !this.isTransitioning) {
            this.goTo(this.currentSection - 1);
        }
    }

    goTo(targetSection) {
        if (this.isTransitioning || targetSection === this.currentSection) return;
        
        this.isTransitioning = true;
        
        // Update position
        this.currentSection = targetSection;
        
        // Animate bus
        this.bus.classList.remove('bus-move-left', 'bus-move-right');
        setTimeout(() => {
            if (targetSection > this.currentSection - 1) {
                this.bus.classList.add('bus-move-right');
            } else {
                this.bus.classList.add('bus-move-left');
            }
        }, 50);
        
        // Update UI
        this.updateUI();
        
        // Reset transition
        setTimeout(() => {
            this.isTransitioning = false;
            this.bus.classList.remove('bus-move-left', 'bus-move-right');
        }, 1000);
    }

    updateUI() {
        // Update sections
        this.sections.forEach((section, i) => {
            section.classList.toggle('active', i === this.currentSection);
        });
        
        // Update stops
        this.stops.forEach((stop, i) => {
            stop.classList.toggle('active', i === this.currentSection);
        });
        
        // Update buttons
        this.prevBtn.disabled = this.currentSection === 0;
        this.nextBtn.disabled = this.currentSection === this.totalSections - 1;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Busfolio();
});

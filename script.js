// script.js - FIXED VERSION
class JourneyPortfolio {
    constructor() {
        this.currentSection = 0;
        this.totalSections = 10;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateAll();
    }
    
    cacheElements() {
        this.roadContainer = document.querySelector('.road-container');
        this.progressFill = document.querySelector('.progress-fill');
        this.dots = document.querySelectorAll('.dot');
        this.sections = document.querySelectorAll('.content-section');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
    }
    
    bindEvents() {
        // Next/Prev buttons
        this.prevBtn.addEventListener('click', () => this.prevSection());
        this.nextBtn.addEventListener('click', () => this.nextSection());
        
        // Dots navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentSection) {
                    this.goToSection(index);
                }
            });
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.prevSection();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSection();
                    break;
            }
        });
        
        // Wheel navigation
        document.addEventListener('wheel', (e) => {
            if (this.isAnimating) return;
            e.preventDefault();
            if (e.deltaY > 0) {
                this.nextSection();
            } else {
                this.prevSection();
            }
        }, { passive: false });
    }
    
    nextSection() {
        if (this.currentSection < this.totalSections - 1 && !this.isAnimating) {
            this.goToSection(this.currentSection + 1);
        }
    }
    
    prevSection() {
        if (this.currentSection > 0 && !this.isAnimating) {
            this.goToSection(this.currentSection - 1);
        }
    }
    
    goToSection(targetSection) {
        if (this.isAnimating || targetSection === this.currentSection) return;
        
        this.isAnimating = true;
        this.currentSection = targetSection;
        
        // Animate everything
        this.updateRoad();
        this.updateProgress();
        this.updateContent();
        this.updateButtons();
        
        // Reset animation lock
        setTimeout(() => {
            this.isAnimating = false;
        }, 900);
    }
    
    updateRoad() {
        const offset = -(this.currentSection * 10);
        this.roadContainer.style.transform = `translateX(${offset}%)`;
    }
    
    updateProgress() {
        const percentage = ((this.currentSection + 1) / this.totalSections) * 100;
        this.progressFill.style.width = `${percentage}%`;
    }
    
    updateContent() {
        // Remove active from all
        this.sections.forEach((section, index) => {
            section.classList.remove('active');
        });
        this.dots.forEach((dot, index) => {
            dot.classList.remove('active');
        });
        
        // Add active to current
        this.sections[this.currentSection].classList.add('active');
        this.dots[this.currentSection].classList.add('active');
    }
    
    updateButtons() {
        this.prevBtn.disabled = this.currentSection === 0;
        this.nextBtn.disabled = this.currentSection === this.totalSections - 1;
        
        this.prevBtn.style.opacity = this.currentSection > 0 ? '1' : '0.4';
        this.nextBtn.style.opacity = this.currentSection < this.totalSections - 1 ? '1' : '0.4';
        
        // Visual feedback
        if (this.currentSection === 0) {
            this.prevBtn.style.cursor = 'not-allowed';
        } else {
            this.prevBtn.style.cursor = 'pointer';
        }
        
        if (this.currentSection === this.totalSections - 1) {
            this.nextBtn.style.cursor = 'not-allowed';
        } else {
            this.nextBtn.style.cursor = 'pointer';
        }
    }
    
    updateAll() {
        this.updateRoad();
        this.updateProgress();
        this.updateContent();
        this.updateButtons();
    }
}

// 🔥 START ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio loaded!');
    new JourneyPortfolio();
});

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

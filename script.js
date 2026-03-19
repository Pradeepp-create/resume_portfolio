// script.js
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
        this.updateRoadPosition();
        this.updateProgress();
        this.updateContent();
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
        this.prevBtn.addEventListener('click', () => this.prevSection());
        this.nextBtn.addEventListener('click', () => this.nextSection());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentSection) {
                    this.goToSection(index);
                }
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSection();
            if (e.key === 'ArrowRight') this.nextSection();
        });
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
    
    goToSection(sectionIndex) {
        this.isAnimating = true;
        this.currentSection = sectionIndex;
        
        this.updateRoadPosition();
        this.updateProgress();
        this.updateContent();
        this.updateButtons();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    updateRoadPosition() {
        const roadPosition = -(this.currentSection * 10);
        this.roadContainer.style.transform = `translateX(${roadPosition}%)`;
    }
    
    updateProgress() {
        const progress = ((this.currentSection + 1) / this.totalSections) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    updateContent() {
        // Hide all sections
        this.sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Hide all dots
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current section and dot
        this.sections[this.currentSection].classList.add('active');
        this.dots[this.currentSection].classList.add('active');
    }
    
    updateButtons() {
        this.prevBtn.style.opacity = this.currentSection > 0 ? '1' : '0.5';
        this.nextBtn.style.opacity = this.currentSection < this.totalSections - 1 ? '1' : '0.5';
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new JourneyPortfolio();
});

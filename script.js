// script.js - FIXED & PREMIUM
const sectionsData = [
    {
        title: "Pradeep M",
        content: `
            <div style="text-align: center;">
                <h1>Pradeep M</h1>
                <h2>B.E (Hons) Electronics and Communication Engineering</h2>
                <p style="font-size: 1.3rem; color: var(--text-primary); margin: 30px 0;">
                    <i class="fas fa-map-marker-alt" style="color: var(--accent-primary); margin-right: 10px;"></i>
                    Sriperumbudur (near toll plaza)
                </p>
                <p style="font-size: 1.4rem;">Passionate tech enthusiast turning code into real-world solutions.</p>
                <p style="font-size: 1.4rem;">Ready to drive innovation with cutting-edge skills 🚀</p>
            </div>
        `
    },
    {
        title: "Career Objective",
        content: `
            <h2>Career Objective</h2>
            <p>Tech-driven engineer with strong passion for innovation and problem-solving.</p>
            <div class="skill-grid">
                <div class="skill-tag">Excellent time management & team collaboration</div>
                <div class="skill-tag">Seeking challenging opportunities in tech</div>
                <div class="skill-tag">Skilled in: Python • Cloud Computing • Marketing • Website Building</div>
            </div>
        `
    },
    {
        title: "Education",
        content: `
            <h2>Education</h2>
            <div style="background: rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; backdrop-filter: blur(15px);">
                <h3 style="font-size: 1.6rem; margin-bottom: 15px;">B.E (Hons) ECE • 2022–2026</h3>
                <p style="font-size: 1.3rem; margin-bottom: 10px;"><strong>St. Joseph College of Engineering</strong> • CGPA: 8.5</p>
                <p style="font-size: 1.2rem;">Specialization: Python, Cloud Computing, Marketing, Website Building</p>
            </div>
        `
    },
    {
        title: "Skills",
        content: `
            <h2>Skills</h2>
            <div class="skill-grid">
                <div>
                    <h4 style="margin-bottom: 15px;">Web Technologies</h4>
                    <div class="skill-tag">HTML</div><div class="skill-tag">CSS</div><div class="skill-tag">JavaScript</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 15px;">Programming</h4>
                    <div class="skill-tag">Python</div><div class="skill-tag">Java</div><div class="skill-tag">SQL</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 15px;">Tools</h4>
                    <div class="skill-tag">Git</div><div class="skill-tag">GitHub</div><div class="skill-tag">MATLAB</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 15px;">Soft Skills</h4>
                    <div class="skill-tag">Teamwork</div><div class="skill-tag">Creativity</div><div class="skill-tag">Adaptability</div>
                </div>
            </div>
        `
    },
    {
        title: "Experience",
        content: `
            <h2>Experience</h2>
            <div style="display: grid; gap: 25px;">
                <div style="background: rgba(255,255,255,0.08); padding: 35px; border-radius: 20px; border-left: 5px solid var(--accent-primary);">
                    <h4 style="margin-bottom: 10px;">Cloud Computing Internship</h4>
                    <p style="font-size: 1.1rem; opacity: 0.9;">Gateway Software Solutions • July–Aug 2025</p>
                </div>
                <div style="background: rgba(255,255,255,0.08); padding: 35px; border-radius: 20px; border-left: 5px solid var(--accent-primary);">
                    <h4 style="margin-bottom: 10px;">Value Added Course</h4>
                    <p style="font-size: 1.1rem; opacity: 0.9;">Best Route Consulting • March 2025</p>
                </div>
            </div>
        `
    },
    {
        title: "Projects",
        content: `
            <h2>Projects</h2>
            <div class="skill-grid">
                <div class="skill-tag" style="padding: 25px;">
                    <h4>Waste Segregation System</h4>
                    <p>Smart automation project for efficient waste management</p>
                </div>
                <div class="skill-tag" style="padding: 25px;">
                    <h4>Digital Acoustic Signal Processing</h4>
                    <p>Advanced audio processing and analysis system</p>
                </div>
                <div class="skill-tag" style="padding: 25px;">
                    <h4>E-commerce Website</h4>
                    <p>Fully responsive online shopping platform</p>
                </div>
            </div>
        `
    },
    {
        title: "Certificates",
        content: `
            <h2>Certificates</h2>
            <div class="cert-grid">
                <div class="skill-tag">Microsoft Office Productivity</div>
                <div class="skill-tag">Cloud Computing Training</div>
                <div class="skill-tag">Non-verbal Communication</div>
                <div class="skill-tag">Interview Skills</div>
                <div class="skill-tag">AI Tools for Designing</div>
            </div>
        `
    },
    {
        title: "Contact",
        content: `
            <h2>Contact</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin-top: 30px;">
                <a href="mailto:pradeeptn22@gmail.com" style="color: inherit; text-decoration: none;">
                    <div class="skill-tag" style="display: flex; align-items: center; gap: 15px; padding: 25px;">
                        <i class="fas fa-envelope" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                        <span>pradeeptn22@gmail.com</span>
                    </div>
                </a>
                <a href="tel:+917550199164" style="color: inherit; text-decoration: none;">
                    <div class="skill-tag" style="display: flex; align-items: center; gap: 15px; padding: 25px;">
                        <i class="fas fa-phone" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                        <span>+91 7550199164</span>
                    </div>
                </a>
                <a href="#" style="color: inherit; text-decoration: none;">
                    <div class="skill-tag" style="display: flex; align-items: center; gap: 15px; padding: 25px;">
                        <i class="fab fa-linkedin" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                        <span>LinkedIn</span>
                    </div>
                </a>
                <a href="#" style="color: inherit; text-decoration: none;">
                    <div class="skill-tag" style="display: flex; align-items: center; gap: 15px; padding: 25px;">
                        <i class="fab fa-github" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                        <span>GitHub</span>
                    </div>
                </a>
            </div>
        `
    },
    {
        title: "Technical Profile",
        content: `
            <h2>Technical Profile</h2>
            <div class="skill-grid">
                <div>
                    <h4 style="margin-bottom: 15px;">Programming</h4>
                    <div class="skill-tag">Python</div><div class="skill-tag">C</div><div class="skill-tag">C++</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 15px;">Languages</h4>
                    <div class="skill-tag">Tamil</div><div class="skill-tag">English</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 15px;">Tools</h4>
                    <div class="skill-tag">Excel</div><div class="skill-tag">Word</div><div class="skill-tag">PowerPoint</div>
                </div>
            </div>
        `
    },
    {
        title: "Journey Complete",
        content: `
            <div style="text-align: center; padding: 40px 20px;">
                <h1 style="font-size: 4rem; margin-bottom: 30px;">Journey Complete 🚀</h1>
                <p style="font-size: 1.5rem; margin-bottom: 25px; opacity: 0.9;">
                    From classroom concepts to real-world code, this journey built skills, solved problems, and ignited passion.
                </p>
                <p style="font-size: 1.5rem; margin-bottom: 40px; opacity: 0.9;">
                    Ready for the next destination—let's build something amazing together!
                </p>
                <p style="font-size: 1.8rem; font-weight: 700; color: var(--accent-primary);">
                    Thanks for traveling with me. Let's connect! 👨‍💻
                </p>
            </div>
        `
    }
];

class BusfolioPremium {
    constructor() {
        this.currentSection = 0;
        this.totalSections = 10;
        this.isMoving = false;
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
        this.showSection(0);
    }

    cacheElements() {
        this.busContainer = document.getElementById('busContainer');
        this.bus = document.getElementById('bus');
        this.stops = document.querySelectorAll('.stop');
        this.progressLine = document.querySelector('.progress-line');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.popup = document.getElementById('contentPopup');
        this.popupContent = document.getElementById('popupContent');
        this.prevPopup = document.getElementById('prevPopup');
        this.nextPopup = document.getElementById('nextPopup');
        this.themeSwitch = document.getElementById('themeSwitch');
    }

    bindEvents() {
        this.prevBtn.onclick = () => this.prevSection();
        this.nextBtn.onclick = () => this.nextSection();
        this.prevPopup.onclick = () => this.prevSection();
        this.nextPopup.onclick = () => this.nextSection();
        
        this.stops.forEach((stop, index) => {
            stop.onclick = () => this.goToSection(index);
        });

        this.themeSwitch.onclick = () => this.toggleTheme();

        document.onkeydown = (e) => {
            if (e.key === 'ArrowLeft') this.prevSection();
            if (e.key === 'ArrowRight') this.nextSection();
        };
    }

    async showSection(sectionIndex) {
        if (this.isMoving || sectionIndex === this.currentSection) return;
        
        this.isMoving = true;
        this.currentSection = sectionIndex;
        
        // Bus movement animation (2 seconds)
        this.bus.classList.remove('moving-left', 'moving-right', 'stopped');
        await this.sleep(100);
        
        if (sectionIndex > this.currentSection - 1) {
            this.bus.classList.add('moving-right');
        } else {
            this.bus.classList.add('moving-left');
        }
        
        // Update UI after movement
        await this.sleep(2000);
        this.bus.classList.remove('moving-left', 'moving-right');
        this.bus.classList.add('stopped');
        
        this.updateUI();
        this.showPopup();
        
        await this.sleep(500);
        this.isMoving = false;
    }

    nextSection() {
        if (this.currentSection < this.totalSections - 1 && !this.isMoving) {
            this.showSection(this.currentSection + 1);
        }
    }

    prevSection() {
        if (this.currentSection > 0 && !this.isMoving) {
            this.showSection(this.currentSection - 1);
        }
    }

    goToSection(index) {
        if (!this.isMoving) {
            this.showSection(index);
        }
    }

    updateUI() {
        // Update stops
        this.stops.forEach((stop, i) => {
            stop.classList.toggle('active', i === this.currentSection);
        });
        
        // Update progress
        const progress = ((this.currentSection + 1) / this.totalSections) * 100;
        this.progressLine.style.height = progress + '%';
        this.progressLine.classList.add('animate');
        
        // Update buttons
        this.prevBtn.disabled = this.currentSection === 0;
        this.nextBtn.disabled = this.currentSection === this.totalSections - 1;
        this.prevPopup.disabled = this.currentSection === 0;
        this.nextPopup.disabled = this.currentSection === this.totalSections - 1;
    }

    showPopup() {
        const data = sectionsData[this.currentSection];
        this.popupContent.innerHTML = data.content;
        this.popup.classList.add('show');
        setTimeout(() => this.popupContent.classList.add('show'), 100);
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.classList.add(savedTheme + '-mode');
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BusfolioPremium();
});

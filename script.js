class JourneyPortfolio {
  constructor() {
    this.currentSection = 0;
    this.totalSections = 10;
    this.isMoving = false;
    
    this.elements = {
      road: document.getElementById('road'),
      bus: document.getElementById('bus'),
      glassCard: document.getElementById('glassCard'),
      cardTitle: document.getElementById('cardTitle'),
      cardContent: document.getElementById('cardContent'),
      sectionNum: document.getElementById('sectionNum'),
      progressFill: document.getElementById('progressFill'),
      progressDots: document.getElementById('progressDots'),
      prevBtn: document.getElementById('prevBtn'),
      nextBtn: document.getElementById('nextBtn')
    };

    this.stopNames = ['Welcome', 'Objective', 'Education', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact', 'Tech Stack', 'Complete!'];

    this.sectionsData = [
      { title: "Welcome Aboard!", content: `<h3>Pradeep M</h3><p><strong>B.E (Hons) Electronics & Communication Engineering</strong></p><p><strong>Location:</strong> Sriperumbudur</p><p>🚀 Passionate about technology! 💻</p>` },
      { title: "Career Objective", content: `<h3>My Mission</h3><ul><li>🔥 Cutting-edge technology</li><li>⏰ Time management skills</li><li>🚀 Growth opportunities</li><li>💻 Python, Cloud, Web Dev</li></ul>` },
      { title: "Education", content: `<h3>St. Joseph College of Engineering</h3><p><strong>B.E (Hons) ECE • 2022–2026</strong></p><p><strong>CGPA: 8.5/10</strong></p>` },
      { title: "Core Skills", content: `<h3>Technical Skills</h3><ul><li>HTML, CSS, JavaScript</li><li>Python, Java, SQL</li><li>Git, GitHub</li></ul>` },
      { title: "Experience", content: `<h3>Real Impact</h3><ul><li>☁️ Cloud Computing Internship</li><li>📈 Value Added Course</li></ul>` },
      { title: "Projects", content: `<h3>Hands-On Work</h3><ul><li>🗑️ Waste Segregation</li><li>🛒 E-commerce Website</li></ul>` },
      { title: "Certificates", content: `<h3>Certified</h3><ul><li>📊 Microsoft Office</li><li>☁️ Cloud Computing</li><li>💼 Interview Skills</li></ul>` },
      { title: "Contact", content: `<h3>Get In Touch</h3><p><strong>Email:</strong> pradeeptn22@gmail.com</p><p><strong>Phone:</strong> +91 7550129164</p>` },
      { title: "Tech Stack", content: `<h3>Full Stack</h3><ul><li>Python, C, C++</li><li>Excel, Word, PowerPoint</li></ul>` },
      { title: "Complete!", content: `<h3>Journey Done!</h3><p><strong>Ready for the future! 🚀</strong></p>` }
    ];

    this.init();
  }

  init() {
    this.setupStops();
    this.createProgressDots();
    this.updateDisplay();
    this.updateProgress();
    this.updateButtons();
    this.bindEvents();
    // FIX FIRST SLIDE GLITCH
    setTimeout(() => {
      document.querySelector('.stop').classList.add('active');
      document.querySelector('.stop-label').classList.add('show');
      this.elements.glassCard.classList.add('show');
    }, 100);
  }

  setupStops() {
    document.querySelectorAll('.stop').forEach((stop, index) => {
      stop.style.setProperty('--stop-index', index);
      stop.dataset.index = index;
      
      const label = document.createElement('div');
      label.className = 'stop-label';
      label.textContent = this.stopNames[index];
      stop.appendChild(label);
      
      const marker = document.createElement('div');
      marker.className = 'stop-marker';
      stop.appendChild(marker);
    });
  }

  createProgressDots() {
    const container = this.elements.progressDots;
    for (let i = 0; i < this.totalSections; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot';
      dot.addEventListener('click', () => this.goToSection(i));
      container.appendChild(dot);
    }
    this.updateProgressDots();
  }

  bindEvents() {
    this.elements.nextBtn.onclick = () => this.nextSection();
    this.elements.prevBtn.onclick = () => this.prevSection();
  }

  async nextSection() {
    if (this.currentSection < 9 && !this.isMoving) await this.moveToSection(this.currentSection + 1);
  }

  async prevSection() {
    if (this.currentSection > 0 && !this.isMoving) await this.moveToSection(this.currentSection - 1);
  }

  async moveToSection(target) {
    this.isMoving = true;
    
    // Road + Bus move
    this.elements.road.style.transform = `translateX(-${target * 10}%)`;
    this.elements.bus.style.left = `calc(15% + ${target * 10}% - 7%)`;
    this.elements.road.classList.add('moving');
    this.elements.bus.classList.add('moving');
    
    // Hide current stop
    document.querySelectorAll('.stop-label').forEach(l => l.classList.remove('show'));
    document.querySelectorAll('.stop').forEach(s => s.classList.remove('active'));
    
    setTimeout(() => {
      this.currentSection = target;
      
      // Show new stop
      const newStop = document.querySelector(`[data-index="${target}"]`);
      newStop.classList.add('active');
      setTimeout(() => newStop.querySelector('.stop-label').classList.add('show'), 200);
      
      // Update content
      this.elements.glassCard.classList.remove('show');
      setTimeout(() => {
        this.updateDisplay();
        this.elements.glassCard.classList.add('show');
        this.updateProgress();
        this.updateButtons();
        this.isMoving = false;
      }, 300);
      
      this.elements.bus.classList.remove('moving');
      this.elements.bus.classList.add('arrived');
      setTimeout(() => this.elements.bus.classList.remove('arrived'), 600);
      
    }, 2000);
  }

  goToSection(index) {
    if (!this.isMoving && index !== this.currentSection) this.moveToSection(index);
  }

  updateDisplay() {
    const section = this.sectionsData[this.currentSection];
    this.elements.cardTitle.textContent = section.title;
    this.elements.cardContent.innerHTML = section.content;
    this.elements.sectionNum.textContent = `Stop ${this.currentSection + 1}/10`;
  }

  updateProgress() {
    this.elements.progressFill.style.width = `${((this.currentSection + 1) / 10) * 100}%`;
    this.updateProgressDots();
  }

  updateProgressDots() {
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSection);
    });
  }

  updateButtons() {
    this.elements.prevBtn.classList.toggle('disabled', this.currentSection === 0);
    this.elements.nextBtn.classList.toggle('disabled', this.currentSection === 9);
  }
}

document.addEventListener('DOMContentLoaded', () => new JourneyPortfolio());

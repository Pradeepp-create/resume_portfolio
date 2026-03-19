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

    this.stopNames = ['Welcome', 'Objective', 'Education', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact', 'Tech Profile', 'Complete!'];

    // COMPLETE PROFESSIONAL CONTENT
    this.sectionsData = [
      { 
        title: "Welcome Aboard!", 
        content: `
          <h3>Pradeep M</h3>
          <p><strong>B.E (Hons) Electronics and Communication Engineering</strong></p>
          <p><strong>Location:</strong> Sriperumbudur (near toll plaza)</p>
          <p>🚀 Passionate about technology and innovation.</p>
          <p>Ready to drive impactful tech solutions! 💻</p>
        `
      },
      { 
        title: "Career Objective", 
        content: `
          <h3>Driven by Technology</h3>
          <ul>
            <li>🔥 Strong interest in cutting-edge technology</li>
            <li>⏰ Excellent time management skills</li>
            <li>🚀 Seeking growth opportunities in tech</li>
            <li>💻 Skilled in Python, Cloud Computing, Marketing, Website Building</li>
          </ul>
        `
      },
      { 
        title: "Education", 
        content: `
          <h3>St. Joseph College of Engineering</h3>
          <p><strong>B.E (Hons) ECE • 2022–2026</strong></p>
          <p><strong>CGPA: 8.5/10</strong></p>
          <p><strong>Specializations:</strong></p>
          <ul>
            <li>🐍 Python Programming</li>
            <li>☁️ Cloud Computing</li>
            <li>📈 Digital Marketing</li>
            <li>🌐 Website Building</li>
          </ul>
        `
      },
      { 
        title: "Core Skills", 
        content: `
          <h3>Technical Expertise</h3>
          <ul>
            <li><strong>Web Technologies:</strong><br>HTML, CSS, JavaScript</li>
            <li><strong>Programming:</strong><br>Python, Java, SQL</li>
            <li><strong>Tools:</strong><br>Git, GitHub, MATLAB</li>
            <li><strong>Soft Skills:</strong><br>Team Collaboration, Time Management, Creativity, Adaptability</li>
          </ul>
        `
      },
      { 
        title: "Experience", 
        content: `
          <h3>Professional Journey</h3>
          <ul>
            <li>
              ☁️ <strong>Cloud Computing Internship</strong><br>
              <em>Gateway Software Solutions</em><br>
              <small>July–August 2025</small>
            </li>
            <li>
              📈 <strong>Value Added Course</strong><br>
              <em>Best Route Consulting</em><br>
              <small>March 2025</small>
            </li>
          </ul>
        `
      },
      { 
        title: "Projects", 
        content: `
          <h3>Hands-On Projects</h3>
          <ul>
            <li>🗑️ <strong>Waste Segregation System</strong></li>
            <li>🔊 <strong>Digital Acoustic Signal Processing</strong></li>
            <li>🛒 <strong>E-commerce Website</strong></li>
          </ul>
        `
      },
      { 
        title: "Certificates", 
        content: `
          <h3>Certified Expertise</h3>
          <ul>
            <li>📊 Microsoft Office Productivity</li>
            <li>☁️ Cloud Computing Training</li>
            <li>🗣️ Non-verbal Communication</li>
            <li>💼 Interview Skills</li>
            <li>🤖 AI Tools for Designing</li>
          </ul>
        `
      },
      { 
        title: "Let's Connect", 
        content: `
          <h3>Get In Touch</h3>
          <p><strong>Email:</strong><br>
          <a href="mailto:pradeeptn22@gmail.com">pradeeptn22@gmail.com</a></p>
          <p><strong>Phone:</strong><br>+91 7550199164</p>
          <p><strong>📍 Sriperumbudur, Tamil Nadu</strong></p>
          <p>🔗 <strong>LinkedIn</strong> | <strong>GitHub</strong> (Coming Soon)</p>
        `
      },
      { 
        title: "Technical Profile", 
        content: `
          <h3>Complete Tech Stack</h3>
          <ul>
            <li><strong>Programming:</strong><br>Python, C, C++</li>
            <li><strong>Languages:</strong><br>Tamil, English</li>
            <li><strong>Tools:</strong><br>Excel, Word, PowerPoint</li>
          </ul>
        `
      },
      { 
        title: "Journey Complete!", 
        content: `
          <h3>Ready for Impact</h3>
          <blockquote>
            "Transformed from student to tech professional through relentless learning, 
            hands-on projects, and real-world experience. Eager to contribute innovative 
            solutions and grow with forward-thinking teams!"
          </blockquote>
          <p><strong>Thank you for joining my journey! 🚀</strong></p>
        `
      }
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
    
    // Fix first slide
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
      
      // Bus stop shelter
      const shelter = document.createElement('div');
      shelter.className = 'bus-stop-shelter';
      stop.appendChild(shelter);
      
      const roof = document.createElement('div');
      roof.className = 'stop-roof';
      shelter.appendChild(roof);
      
      const walls = document.createElement('div');
      walls.className = 'stop-walls';
      shelter.appendChild(walls);
      
      const sign = document.createElement('div');
      sign.className = 'stop-sign';
      shelter.appendChild(sign);
      
      // Label
      const label = document.createElement('div');
      label.className = 'stop-label';
      label.textContent = this.stopNames[index];
      stop.appendChild(label);
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
    
    this.elements.road.style.transform = `translateX(-${target * 10}%)`;
    this.elements.bus.style.left = `calc(15% + ${target * 10}% - 7%)`;
    this.elements.road.classList.add('moving');
    this.elements.bus.classList.add('moving');
    
    document.querySelectorAll('.stop-label').forEach(l => l.classList.remove('show'));
    document.querySelectorAll('.stop').forEach(s => s.classList.remove('active'));
    
    setTimeout(() => {
      this.currentSection = target;
      
      const newStop = document.querySelector(`[data-index="${target}"]`);
      newStop.classList.add('active');
      setTimeout(() => newStop.querySelector('.stop-label').classList.add('show'), 200);
      
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

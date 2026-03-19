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

    // STOP NAMES
    this.stopNames = [
      'Welcome', 'Objective', 'Education', 'Skills', 'Experience', 
      'Projects', 'Certificates', 'Contact', 'Tech Stack', 'Complete!'
    ];

    // ALL YOUR CONTENT - FULLY RESTORED
    this.sectionsData = [
      { 
        title: "Welcome Aboard!", 
        content: `
          <h3>Pradeep M</h3>
          <p><strong>B.E (Hons) Electronics & Communication Engineering</strong></p>
          <p><strong>Location:</strong> Sriperumbudur (near toll plaza)</p>
          <p>🚀 Passionate about technology and creating impactful solutions. 
          Ready to drive innovation in tech! 💻</p>`
      },
      { 
        title: "Career Objective", 
        content: `
          <h3>My Mission</h3>
          <ul>
            <li>🔥 Strong passion for cutting-edge technology</li>
            <li>⏰ Excellent time management skills</li>
            <li>🚀 Seeking growth opportunities in tech</li>
            <li>💻 Expert in Python, Cloud, Web Dev & Marketing</li>
          </ul>`
      },
      { 
        title: "Education", 
        content: `
          <h3>St. Joseph College of Engineering</h3>
          <p><strong>B.E (Hons) ECE • 2022–2026</strong></p>
          <p><strong>CGPA: 8.5/10</strong></p>
          <p>Specialized in: Python • Cloud Computing • Marketing • Website Building</p>`
      },
      { 
        title: "Core Skills", 
        content: `
          <h3>Technical Arsenal</h3>
          <ul>
            <li><strong>Web:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Tools:</strong> Git, GitHub, MATLAB</li>
            <li><strong>Programming:</strong> Python, Java, SQL</li>
            <li><strong>Soft Skills:</strong> Teamwork, Creativity, Adaptability</li>
          </ul>`
      },
      { 
        title: "Experience", 
        content: `
          <h3>Real-World Impact</h3>
          <ul>
            <li>☁️ <strong>Cloud Computing Internship</strong><br>Gateway Software Solutions (Jul-Aug 2025)</li>
            <li>📈 <strong>Value Added Course</strong><br>Best Route Consulting (Mar 2025)</li>
          </ul>`
      },
      { 
        title: "Projects", 
        content: `
          <h3>Hands-On Creations</h3>
          <ul>
            <li>🗑️ <strong>Waste Segregation System</strong></li>
            <li>🔊 <strong>Digital Acoustic Signal Processing</strong></li>
            <li>🛒 <strong>E-commerce Website</strong></li>
          </ul>`
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
          </ul>`
      },
      { 
        title: "Let's Connect", 
        content: `
          <h3>Get In Touch</h3>
          <p><strong>Email:</strong> <a href="mailto:pradeeptn22@gmail.com">pradeeptn22@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 7550129164</p>
          <p>📍 Sriperumbudur, Tamil Nadu</p>
          <p>🔗 LinkedIn | GitHub (Coming Soon)</p>`
      },
      { 
        title: "Technical Stack", 
        content: `
          <h3>Full Tech Profile</h3>
          <ul>
            <li><strong>Programming:</strong> Python, C, C++</li>
            <li><strong>Tools:</strong> Excel, Word, PowerPoint</li>
            <li><strong>Languages:</strong> Tamil, English</li>
          </ul>`
      },
      { 
        title: "Journey Complete! 🎉", 
        content: `
          <h3>Ready for the Future</h3>
          <blockquote>"From student to tech leader – every stop built my skills, 
          vision, and determination. Let's create something amazing together!"</blockquote>
          <p><strong>Thank you for joining my journey! 🚀</strong></p>`
      }
    ];

    this.init();
  }

  init() {
    this.createStopLabels();
    this.createProgressDots();
    this.updateDisplay();
    this.bindEvents();
    this.updateButtons();
  }

  createStopLabels() {
    document.querySelectorAll('.stop').forEach((stop, index) => {
      const label = document.createElement('div');
      label.className = 'stop-label';
      label.textContent = this.stopNames[index];
      stop.appendChild(label);
    });
  }

  createProgressDots() {
    const container = this.elements.progressDots;
    container.innerHTML = '';
    for (let i = 0; i < this.totalSections; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot';
      dot.addEventListener('click', () => this.goToSection(i));
      container.appendChild(dot);
    }
    this.updateProgressDots();
  }

  bindEvents() {
    this.elements.nextBtn.addEventListener('click', () => this.nextSection());
    this.elements.prevBtn.addEventListener('click', () => this.prevSection());
  }

  async nextSection() {
    if (this.currentSection < this.totalSections - 1 && !this.isMoving) {
      await this.moveToSection(this.currentSection + 1);
    }
  }

  async prevSection() {
    if (this.currentSection > 0 && !this.isMoving) {
      await this.moveToSection(this.currentSection - 1);
    }
  }

  async moveToSection(targetSection) {
    this.isMoving = true;
    
    // SMOOTH ROAD MOVEMENT
    this.elements.road.classList.add('moving');
    const roadPos = -(targetSection * 10);
    this.elements.road.style.transform = `translateX(${roadPos}%)`;
    
    // BUS MOVING ANIMATION
    this.elements.bus.classList.add('moving');
    
    // HIDE ALL STOP LABELS
    document.querySelectorAll('.stop-label').forEach(label => {
      label.classList.remove('show');
    });
    
    setTimeout(() => {
      // ARRIVAL SEQUENCE
      this.currentSection = targetSection;
      
      // Bus arrives
      this.elements.bus.classList.remove('moving');
      this.elements.bus.classList.add('arrived');
      
      // Activate stop + show label
      document.querySelectorAll('.stop').forEach((stop, i) => {
        stop.classList.toggle('active', i === targetSection);
        if (i === targetSection) {
          setTimeout(() => {
            stop.querySelector('.stop-label').classList.add('show');
          }, 200);
        }
      });
      
      // SMOOTH CARD TRANSITION
      this.elements.glassCard.classList.remove('show');
      setTimeout(() => {
        this.updateDisplay();
        this.elements.glassCard.classList.add('show');
      }, 300);
      
      this.updateProgress();
      this.updateButtons();
      this.isMoving = false;
      
      setTimeout(() => {
        this.elements.bus.classList.remove('arrived');
      }, 600);
      
    }, 2000); // 2 second journey
  }

  goToSection(sectionIndex) {
    if (!this.isMoving && sectionIndex !== this.currentSection) {
      this.moveToSection(sectionIndex);
    }
  }

  updateDisplay() {
    const section = this.sectionsData[this.currentSection];
    this.elements.cardTitle.textContent = section.title;
    this.elements.cardContent.innerHTML = section.content;
    this.elements.sectionNum.textContent = `Stop ${this.currentSection + 1}/${this.totalSections}`;
  }

  updateProgress() {
    const progress = ((this.currentSection + 1) / this.totalSections) * 100;
    this.elements.progressFill.style.width = progress + '%';
    this.updateProgressDots();
  }

  updateProgressDots() {
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSection);
    });
  }

  updateButtons() {
    this.elements.prevBtn.classList.toggle('disabled', this.currentSection === 0);
    this.elements.nextBtn.classList.toggle('disabled', this.currentSection === this.totalSections - 1);
  }
}

// START
document.addEventListener('DOMContentLoaded', () => {
  new JourneyPortfolio();
});

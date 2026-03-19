// script.js - EXACT BUSFOLIO CLONE
const sections = [
    { preview: "Pradeep M<br><span>B.E (Hons) ECE</span><br>Sriperumbudur<br><small>Tech journey begins 🚀</small>", 
      full: `<div style="text-align:center;padding:60px 40px"><h1 style="font-size:3.5rem;margin-bottom:20px">Pradeep M</h1><h2 style="opacity:0.8;margin-bottom:30px">B.E (Hons) Electronics and Communication Engineering</h2><p style="font-size:1.3rem;color:var(--accent)"><i class="fas fa-map-marker-alt"></i> Sriperumbudur (near toll plaza)</p><p style="font-size:1.4rem;margin-top:30px">Passionate tech enthusiast turning code into real-world solutions.</p><p>Ready to drive innovation with cutting-edge skills 🚀</p></div>` },
    { preview: "Career Objective<br><span>Tech Vision</span><br>Python • Cloud • Web<br><small>Driven by innovation</small>", 
      full: `<h2 style="margin-bottom:40px">Career Objective</h2><p>Tech-driven engineer passionate about innovation and problem-solving.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:40px"><div style="background:rgba(255,255,255,0.1);padding:30px;border-radius:20px"><h4>Core Strengths</h4><p>Python • Cloud Computing • Marketing • Website Building</p></div><div style="background:rgba(255,255,255,0.1);padding:30px;border-radius:20px"><h4>Soft Skills</h4><p>Time management • Team collaboration</p></div></div>` },
    // Add all 10 sections...
];

class Busfolio {
    constructor() {
        this.current = 0;
        this.total = 10;
        this.isMoving = false;
        this.init();
    }

    init() {
        this.createStops();
        this.bindEvents();
        this.updateView();
    }

    createStops() {
        const stops = document.getElementById('trackStops');
        for(let i = 0; i < this.total; i++) {
            const stop = document.createElement('div');
            stop.className = 'stop';
            stop.dataset.index = i;
            stops.appendChild(stop);
        }
        this.stops = document.querySelectorAll('.stop');
    }

    bindEvents() {
        document.getElementById('prevBtn')?.onclick = () => this.prev();
        document.getElementById('modalPrev')?.onclick = () => this.prev();
        document.getElementById('nextBtn')?.onclick = () => this.next();
        document.getElementById('modalNext')?.onclick = () => this.next();
        
        this.stops.forEach((stop, i) => stop.onclick = () => this.goTo(i));
        document.getElementById('themeToggle').onclick = () => this.toggleTheme();
        
        document.onkeydown = e => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        };
    }

    async goTo(index) {
        if (this.isMoving || index === this.current) return;
        
        this.isMoving = true;
        const busContainer = document.getElementById('busContainer');
        const direction = index > this.current ? 'right' : 'left';
        
        busContainer.style.transform = `translateX(${direction === 'right' ? '40px' : '-40px'})`;
        
        await new Promise(r => setTimeout(r, 2000));
        
        this.current = index;
        busContainer.style.transform = 'translateX(0)';
        
        this.updateView();
        this.showModal();
        
        setTimeout(() => this.isMoving = false, 500);
    }

    next() { if (this.current < this.total - 1) this.goTo(this.current + 1); }
    prev() { if (this.current > 0) this.goTo(this.current - 1); }

    updateView() {
        // Update track
        document.getElementById('trackProgress').style.height = `${((this.current + 1) / this.total) * 100}%`;
        this.stops.forEach((stop, i) => stop.classList.toggle('active', i === this.current));
        
        // Update preview
        document.querySelectorAll('.section-content').forEach((el, i) => 
            el.classList.toggle('active', i === this.current)
        );
        document.getElementById('contentPreview').dataset.section = this.current;
        
        // Update counter
        document.getElementById('sectionCounter').textContent = `${this.current + 1} / ${this.total}`;
    }

    showModal() {
        document.getElementById('modalContent').innerHTML = sections[this.current].full;
        document.getElementById('modalOverlay').classList.add('show');
    }

    toggleTheme() {
        document.body.classList.toggle('light');
        document.body.classList.toggle('dark');
        localStorage.theme = document.body.classList.contains('light') ? 'light' : 'dark';
    }
}

document.addEventListener('DOMContentLoaded', () => new Busfolio());

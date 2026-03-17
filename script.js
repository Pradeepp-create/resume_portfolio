const bus = document.getElementById("bus");
const path = document.getElementById("roadPath");
const stops = document.querySelectorAll(".stop");

let current = 0;

// STOP CONTENT
const data = [

{
title: "Pradeep . M",
desc: "B.E (Hons) in Electronics and Communication Engineering\n\nAddress: Sriperumbudur (near toll plaza)\n\nWelcome to my portfolio.\nI am passionate about building modern tech solutions and constantly improving my skills."
},

{
title: "Career Objective",
desc: "A highly motivated individual with strong interest in technology and innovation.\n\nSkilled in Python, Cloud Computing, Marketing, and Website Building.\n\nPossess good time management and problem-solving skills.\n\nSeeking opportunities to grow professionally and contribute effectively in a dynamic organization."
},

{
title: "Education",
desc: "B.E (Hons) in Electronics and Communication Engineering\n\nSt. Joseph College of Engineering\nNear Toll Plaza, Sriperumbudur\n(2022 - 2026)\n\nCGPA: 8.5\n\nSpecialized in:\nPython\nCloud Computing\nMarketing\nWebsite Building"
},

{
title: "Skills",
desc: "Web Technologies:\nHTML\nCSS\nJavaScript\n\nTools:\nGit\nGitHub\nMATLAB\n\nSoft Skills:\nTeam Collaboration\nTime Management\nCreativity\nAdaptability\n\nProgramming:\nPython\nJava\nSQL"
},

{
title: "Professional Experience",
desc: "Internship:\nCloud Computing - Gateway Software Solutions\n(July 2025 - Aug 2025)\n\nValue Added Course:\nBest Route Consulting\n(March 2025)"
},

{
title: "Projects",
desc: "(a) Waste Segregation based on Waste Types\n\n(b) Digital Acoustic Signal Processing for Intelligent Welding Monitoring\n\n(c) E-commerce Website"
},

{
title: "Certificates & Achievements",
desc: "(a) Digital Productivity Training on Microsoft Office\n\n(b) Cloud Computing - Gateway Software Solutions\n\n(c) Communication Skills - Non Verbal Communication\n\n(d) Employability Skills - Interview & Etiquettes\n\n(e) AI Fluency - AI Tools for Designing"
},

{
title: "Contact",
desc: "Email: pradeeptn22@gmail.com\n\nPhone: +91 7550199164\n\nLinkedIn: (add your link)\nGitHub: (add your link)"
},

{
title: "Technical Profile",
desc: "Programming Languages:\nPython, C, C++\n\nLanguages Known:\nTamil, English\n\nTools:\nExcel, Word, PowerPoint"
},

{
title: "Journey Complete 🎉",
desc: "Thank you for exploring my portfolio.\n\nThis journey represents my growth, skills, and passion for technology.\n\nLet’s connect and build something amazing 🚀"
}

];
// CREATE DOTS
const dotsContainer = document.getElementById("progressDots");

data.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  dot.addEventListener("click", () => {
    goToStop(i);
  });

  dotsContainer.appendChild(dot);
});

// MOVE BUS
function goToStop(index){

  current = index;

  const length = path.getTotalLength();
  const target = (index/(stops.length-1)) * length;

  let start = null;

  function animate(time){

    if(!start) start = time;
    const progress = time - start;

    const duration = 800; // speed
    const t = Math.min(progress / duration, 1);

    const point = path.getPointAtLength(target * t);

    const nextPoint = path.getPointAtLength(
      Math.min(target * t + 1, length)
    );

    const angle = Math.atan2(
      nextPoint.y - point.y,
      nextPoint.x - point.x
    ) * 180 / Math.PI;

    bus.style.transform =
    `translate(${point.x}px, ${point.y}px) translate(-50%,-75%) rotate(${angle}deg)`;

    if(t < 1){
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);

  // UI update
  stops.forEach(s => s.classList.remove("active"));
  stops[index].classList.add("active");

  document.getElementById("title").innerText = data[index].title;
  document.getElementById("desc").innerText = data[index].desc;

  // PROGRESS UPDATE
  const progress = (index / (stops.length - 1)) * 100;
  document.getElementById("progressFill").style.width = progress + "%";

  // UPDATE DOTS
  const dots = document.querySelectorAll(".dot");
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}
// NAV BUTTONS
function nextStop(){
  if(current < stops.length-1){
    goToStop(current+1);
  }
}

function prevStop(){
  if(current > 0){
    goToStop(current-1);
  }
}

// INIT POSITION
window.onload = () => {
  goToStop(0);
};

const bus = document.getElementById("bus");
const progress = document.getElementById("progress"); // (optional if unused)
const stops = document.querySelectorAll(".stop");

const title = document.getElementById("title");
const desc = document.getElementById("desc");

const path = document.getElementById("roadPath");
const pathLength = path.getTotalLength();

let current = 0;
let typingTimeout;

/* 🔥 YOUR FULL DATA (UNCHANGED) */
const data = [

`Pradeep . M
B.E (Hons) Electronics and Communication Engineering

Address: (Add your full address here)

Welcome! I am passionate about building modern websites and exploring technology.
This portfolio showcases my journey, skills, and achievements in a clean interactive way.`,

`Career Objective:

Strong interest in technology and software development.

Skilled in Python, Cloud Computing, Marketing, and Website Building.

Excellent time management and problem-solving skills.

Seeking opportunities to enhance my knowledge and contribute to real-world projects.`,

`Education:

B.E (Hons) in Electronics and Communication Engineering

St. Joseph College of Engineering
Near Toll Plaza, Sriperumbudur

Duration: 2022 – 2026  
CGPA: 8.5

Specialized in:
• Python  
• Cloud Computing  
• Marketing  
• Website Building`,

`Skills:

Web Technologies:
• HTML  
• CSS  
• JavaScript  

Tools:
• Git  
• GitHub  
• MATLAB  

Soft Skills:
• Team Collaboration  
• Time Management  
• Creativity  
• Adaptability  

Programming:
• Python  
• Java  
• SQL`,

`Professional Experience:

Internship:
Cloud Computing  
Gateway Software Solutions  
Duration: July 2025 – August 2025  

Value Added Course:
Best Route Consulting  
Duration: March 2025`,

`Projects:

1. Waste Segregation System  
   - Classifies waste based on types  

2. Digital Acoustic Signal Processing  
   - Intelligent welding monitoring system  

3. E-commerce Website  
   - Built using HTML, CSS, JavaScript`,

`Certificates & Achievements:

• Digital Productivity Training (Microsoft Office)  
• Cloud Computing Certification (Gateway Software Solutions)  
• Communication Skills Training (Non-verbal Communication)  
• Employability Skills (Interview Skills & Etiquettes)  
• AI Fluency Training (AI Tools for Designing)`,

`Contact:

Email: pradeeptn22@gmail.com  
Phone: +91 7550199164  

LinkedIn: (Add your link)  
GitHub: (Add your link)`,

`Additional Information:

Programming Languages:
• Python  
• C  
• C++  

Languages Known:
• Tamil  
• English  

Tools:
• Excel  
• Word  
• PowerPoint`,

`Journey Complete 🚀

Thank you for visiting my portfolio!

I am continuously learning and building new projects.
Excited for future opportunities and challenges ahead.`

];

/* ✨ TYPEWRITER EFFECT */
function typeText(text){
  clearTimeout(typingTimeout);
  desc.innerHTML = "";

  let i = 0;

  function typing(){
    if(i < text.length){
      desc.innerHTML += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typing, 8);
    }
  }

  typing();
}

/* 🚀 CURVED MOVEMENT */
function goToStop(i){
  if(i < 0 || i >= stops.length) return;

  current = i;

  // 🔥 convert index → path position
  let percent = i / (stops.length - 1);
  let point = path.getPointAtLength(percent * pathLength);
  let nextPoint = path.getPointAtLength((percent * pathLength) + 1);

  // 🔄 rotation angle
  let angle = Math.atan2(
    nextPoint.y - point.y,
    nextPoint.x - point.x
  ) * 180 / Math.PI;

  // 🚌 move + rotate
  bus.style.transform = `
    translate(${point.x}px, ${point.y}px)
    rotate(${angle}deg)
  `;

  // 🎯 active stop
  stops.forEach(s => s.classList.remove("active"));
  stops[i].classList.add("active");

  // 📝 content update
  title.innerText = stops[i].innerText;
  typeText(data[i]);
}

/* ⬅➡ NAVIGATION */
function nextStop(){
  goToStop(current + 1);
}

function prevStop(){
  goToStop(current - 1);
}

/* 🖱 CLICK SUPPORT */
stops.forEach((s, i)=>{
  s.addEventListener("click", () => goToStop(i));
});

/* 🎬 INIT */
window.onload = () => {
  goToStop(0);
};

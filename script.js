const bus = document.getElementById("bus");
const progress = document.getElementById("progress");
const stops = document.querySelectorAll(".stop");

const popup = document.getElementById("popup");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

let current = 0;

/* 🔥 YOUR FULL CONTENT */
const data = [

`Pradeep M
B.E (Hons) Electronics and Communication Engineering

Welcome! I'm passionate about building modern websites and exploring technology.
This portfolio shows my journey, skills and achievements.`,

`Career Objective:
Strong interest in technology and development.
Skilled in Python, Cloud Computing, Marketing, Website Building.
Good at time management and seeking opportunities to grow.`,

`Education:
B.E (Hons) ECE
St. Joseph College of Engineering
Near Toll Plaza, Sriperumbudur
2022 - 2026
CGPA: 8.5

Specialized in Python, Cloud Computing, Marketing, Website Building`,

`Skills:

Web Technologies:
HTML, CSS, JavaScript

Tools:
Git, GitHub, MATLAB, MSOffice

Soft Skills:
Team Collaboration, Time Management, Creativity, Adaptability

Programming:
Python, Java, SQL`,

`Experience:

Internship:
Cloud Computing - Gateway Software Solutions
(July 2025 - Aug 2025)

Value Added Course:
Best Route Consulting
(March 2025)`,

`Projects:

1. Waste Segregation System
2. Digital Acoustic Signal Processing for Welding Monitoring
3. E-commerce Website`,

`Certificates:

- Microsoft Office Digital Productivity
- Cloud Computing (Gateway)
- Non-Verbal Communication
- Interview Skills & Etiquettes
- AI Tools for Designing`,

`Contact:

Email: pradeeptn22@gmail.com
Phone: +91 7550129164
LinkedIn: https://www.linkedin.com/in/pradeep-m-354b1629b/
GitHub: https://github.com/Pradeepp-create`,

`Languages & Tools:

Programming:
Python, C, C++

Languages:
Tamil, English

Tools:
Excel, Word, PowerPoint`,

`Journey Complete 🚀

Thank you for visiting my portfolio!
More exciting things coming soon...`

];

/* MOVE FUNCTION */
function goToStop(i){
  let pos = stops[i].style.left;

  bus.style.left = pos;
  progress.style.width = pos;

  title.innerText = stops[i].innerText;
  desc.innerText = data[i];

  popup.style.display = "flex";

  current = i;
}

/* BUTTONS */
function nextStop(){
  if(current < stops.length - 1){
    goToStop(current + 1);
  }
}

function prevStop(){
  if(current > 0){
    goToStop(current - 1);
  }
}

/* CLICK STOPS */
stops.forEach((stop, index)=>{
  stop.addEventListener("click", ()=>{
    goToStop(index);
  });
});

/* CLOSE POPUP */
document.getElementById("close").onclick = ()=>{
  popup.style.display = "none";
};

window.onclick = (e)=>{
  if(e.target == popup) popup.style.display = "none";
};

const bus = document.getElementById("bus");
const progress = document.getElementById("progress");
const stops = document.querySelectorAll(".stop");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const popup = document.getElementById("popup");

let current = 0;

/* DATA */
const data = [
`Pradeep M
B.E (Hons) ECE

Welcome! Passionate about tech and building modern websites.
This is my journey 🚀`,

`Career Objective:
Strong interest in development.
Skilled in Python, Cloud, Marketing, Web Dev.
Good time management & seeking opportunities.`,

`Education:
St. Joseph College of Engineering
Sriperumbudur (2022–2026)
CGPA: 8.5`,

`Skills:
HTML, CSS, JS
Git, GitHub, MATLAB
Python, Java, SQL`,

`Experience:
Cloud Internship - Gateway Software
July–Aug 2025
Course - Best Route (March 2025)`,

`Projects:
Waste Segregation
Welding Monitoring
E-commerce Website`,

`Certificates:
Microsoft Office
Cloud Computing
Communication
Interview Skills
AI Tools`,

`Contact:
Email: pradeeptn22@gmail.com
Phone: +91 7550199164`,

`Languages:
Python, C, C++
Tamil, English`,

`Journey Complete 🚀`
];

/* MAIN FUNCTION */
function goToStop(index){
  if(index < 0 || index >= stops.length) return;

  current = index;

  let pos = stops[index].style.left;

  bus.style.left = pos;
  progress.style.width = pos;

  // highlight active stop
  stops.forEach(s => s.classList.remove("active"));
  stops[index].classList.add("active");

  // update content
  title.innerText = stops[index].innerText;
  desc.innerText = data[index];

  popup.classList.add("show");
}

/* BUTTONS */
function nextStop(){
  goToStop(current + 1);
}

function prevStop(){
  goToStop(current - 1);
}

/* CLICK STOPS */
stops.forEach((stop, i)=>{
  stop.addEventListener("click", ()=> goToStop(i));
});

/* INIT */
window.onload = () => {
  goToStop(0);
};

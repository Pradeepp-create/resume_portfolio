const road = document.getElementById("road");
const dotsContainer = document.getElementById("dots");
const progressBarFill = document.createElement("div");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const card = document.getElementById("card");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");

const wheelLeft = document.querySelector(".wheel-left");
const wheelRight = document.querySelector(".wheel-right");

// Sections data
const sections = [
  {
    id: "intro",
    title: "Intro",
    content: `
      <p>Pradeep M</p>
      <p>B.E (Hons) Electronics and Communication Engineering</p>
      <p>Location: Sriperumbudur (near toll plaza)</p>
      <p>Welcome! I'm passionate about technology and building things that make a difference.</p>
    `,
  },
  {
    id: "objective",
    title: "Career Objective",
    content: `
      <ul>
        <li>Strong interest in technology and continuous learning.</li>
        <li>Good time management and adaptability in fast‑changing environments.</li>
        <li>Seeking opportunities to grow and contribute in the tech industry.</li>
        <li>Skilled in Python, Cloud Computing, Marketing, and Website Building.</li>
      </ul>
    `,
  },
  {
    id: "education",
    title: "Education",
    content: `
      <p>B.E (Hons) Electronics and Communication Engineering</p>
      <p>St. Joseph College of Engineering (2022–2026)</p>
      <p>CGPA: 8.5</p>
      <p>Specialization: Python, Cloud Computing, Marketing, Website Building</attached>
    `,
  },
  {
    id: "skills",
    title: "Skills",
    content: `
      <ul>
        <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Tools:</strong> Git, GitHub, MATLAB</li>
        <li><strong>Soft Skills:</strong> Team Collaboration, Time Management, Creativity, Adaptability</li>
        <li><strong>Programming:</strong> Python, Java, SQL</li>
      </ul>
    `,
  },
  {
    id: "experience",
    title: "Experience",
    content: `
      <ul>
        <li><strong>Cloud Computing Internship</strong> – Gateway Software Solutions, July–Aug 2025</li>
        <li><strong>Value Added Course</strong> – Best Route Consulting, March 2025</li>
      </ul>
    `,
  },
  {
    id: "projects",
    title: "Projects",
    content: `
      <ul>
        <li>Waste Segregation System</li>
        <li>Digital Acoustic Signal Processing</li>
        <li>E‑commerce Website</li>
      </ul>
    `,
  },
  {
    id: "certificates",
    title: "Certificates",
    content: `
      <ul>
        <li>Microsoft Office Productivity</li>
        <li>Cloud Computing Training</li>
        <li>Non‑verbal Communication</li>
        <li>Interview Skills</li>
        <li>AI Tools for Designing</li>
      </ul>
    `,
  },
  {
    id: "contact",
    title

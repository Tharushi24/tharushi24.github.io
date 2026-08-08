/**
 * THARUSHI WEERASEKARA - PERSONAL PORTFOLIO SCRIPT ENGINE
 * Secret Admin Keyboard Shortcut: Ctrl + Shift + A (or URL #admin)
 * Full CRUD for Projects (with Photo Upload), About, Experience, Education, Skills & Certifications.
 */

const DEFAULT_PORTFOLIO_DATA = {
  adminPasscode: "admin123",

  personal: {
    name: "Tharushi Weerasekara",
    badge: "Software Engineering Undergraduate",
    heroSubtitle: "Software Engineering Undergraduate",
    profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    cvLink: "#",
    bio: "Software Engineering undergraduate with practical knowledge of software development, system analysis, web technologies, and database management. A quick learner with strong analytical, problem-solving, and teamwork skills, seeking a graduate opportunity in Software Engineering or IT.",
    email: "tharushiweerasekara24@gmail.com",
    phone: "+94 78 552 4073",
    location: "Sri Lanka",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },

  about: {
    heading: "Software Engineering Undergraduate",
    text: "Software Engineering undergraduate with practical knowledge of software development, system analysis, web technologies, and database management. A quick learner with strong analytical, problem-solving, and teamwork skills, seeking a graduate opportunity in Software Engineering or IT while continuously expanding technical expertise.",
    subtext: "Experienced in full-stack web applications, desktop software development, AI API integration, database architecture, and IT operations through internship experience at Ruhunu Foods (Pvt) Ltd.",
    infoList: [
      { icon: "fa-solid fa-graduation-cap", label: "Education", value: "BEng (Hons) Software Engineering (Top-Up)" },
      { icon: "fa-solid fa-university", label: "University", value: "London Metropolitan University, UK" },
      { icon: "fa-solid fa-location-dot", label: "Location", value: "Sri Lanka" },
      { icon: "fa-solid fa-envelope", label: "Email", value: "tharushiweerasekara24@gmail.com" },
      { icon: "fa-solid fa-phone", label: "Phone", value: "+94 78 552 4073" },
      { icon: "fa-solid fa-briefcase", label: "Status", value: "Seeking Graduate / IT Opportunities" }
    ]
  },

  skills: {
    technical: [
      { name: "Python", tag: "Programming Language", icon: "fa-brands fa-python" },
      { name: "Java", tag: "Programming Language", icon: "fa-brands fa-java" },
      { name: "C# (.NET)", tag: "Programming Language", icon: "fa-solid fa-code" },
      { name: "PHP", tag: "Backend Development", icon: "fa-brands fa-php" },
      { name: "JavaScript", tag: "Web Technologies", icon: "fa-brands fa-js" },
      { name: "SQL", tag: "Database Queries", icon: "fa-solid fa-database" },
      { name: "HTML5 & CSS3", tag: "Frontend Markup & Styling", icon: "fa-brands fa-html5" },
      { name: "Bootstrap", tag: "Responsive Framework", icon: "fa-brands fa-bootstrap" },
      { name: "AJAX & RESTful APIs", tag: "Asynchronous Web APIs", icon: "fa-solid fa-network-wired" },
      { name: "Microsoft SQL Server", tag: "Database Architecture", icon: "fa-solid fa-database" },
      { name: "MySQL / phpMyAdmin", tag: "Database Management", icon: "fa-solid fa-server" },
      { name: "Git & GitHub", tag: "Version Control", icon: "fa-brands fa-github" },
      { name: "Visual Studio & VS Code", tag: "Development IDE", icon: "fa-solid fa-laptop-code" },
      { name: "Cisco Packet Tracer", tag: "Network Simulation", icon: "fa-solid fa-network-wired" },
      { name: "XAMPP Server", tag: "Local Web Server Environment", icon: "fa-solid fa-hard-drive" },
      { name: "OOP & MVC Architecture", tag: "Software Design Patterns", icon: "fa-solid fa-sitemap" },
      { name: "Agile Development", tag: "Software Development Lifecycle", icon: "fa-solid fa-list-check" },
      { name: "UI/UX Design", tag: "User Interface & Experience", icon: "fa-solid fa-palette" },
      { name: "Figma", tag: "Design & Prototyping Tool", icon: "fa-brands fa-figma" },
      { name: "Wireframing", tag: "Layout & Structure Planning", icon: "fa-solid fa-object-ungroup" },
      { name: "Prototyping", tag: "Interactive Design Mockups", icon: "fa-solid fa-bezier-curve" },
      { name: "User-Centred Design", tag: "Human-Centred Design Methodology", icon: "fa-solid fa-users" }
    ],
    soft: [
      { name: "Problem Solving", tag: "Analytical & Logical Thinking", icon: "fa-solid fa-brain" },
      { name: "Analytical Thinking", tag: "Requirements Analysis", icon: "fa-solid fa-chart-pie" },
      { name: "Communication Skills", tag: "Technical & Verbal", icon: "fa-solid fa-comments" },
      { name: "Teamwork & Collaboration", tag: "Cross-Functional Projects", icon: "fa-solid fa-people-group" },
      { name: "Time Management", tag: "Deadline & Task Prioritization", icon: "fa-solid fa-clock" },
      { name: "Adaptability & Fast Learning", tag: "New Frameworks & Tools", icon: "fa-solid fa-bolt" },
      { name: "Leadership Skills", tag: "Project Coordination", icon: "fa-solid fa-user-gear" },
      { name: "Attention to Detail", tag: "Quality Assurance & Testing", icon: "fa-solid fa-magnifying-glass" }
    ]
  },

  projects: [
    {
      id: "p1",
      title: "VimoraBot – AI-Based Psychological Counselling Web Platform",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      description: "Full-stack AI-powered counselling web application for mental health support integrated with Groq API, interactive analytics, and responsive UI.",
      fullDetails: "Designed and developed a full-stack AI-powered counselling web application for mental health support. Integrated AI-driven conversational features via Groq API and developed a scalable, secure, and responsive system using PHP, MySQL, Chart.js, and AJAX. Applied software engineering methodologies from requirements analysis through implementation, testing, and evaluation.",
      tags: ["PHP", "MySQL", "JavaScript", "Groq API", "Chart.js", "AJAX", "XAMPP"],
      github: "https://github.com"
    },
    {
      id: "p2",
      title: "Evaluating Impact of QuillBot's Paraphrasing Feature on Academic Writing",
      category: "ai-ml",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
      description: "Quantitative research evaluation analyzing the impact of AI-assisted paraphrasing on grammatical accuracy in academic writing.",
      fullDetails: "Conducted quantitative research to evaluate the impact of AI-assisted paraphrasing on academic writing. Analyzed survey data using SPSS to identify improvements in grammatical accuracy and proposed a conceptual framework for effective use of AI writing tools in higher education.",
      tags: ["SPSS", "Microsoft Excel", "QuillBot", "Google Forms", "Research Analysis"],
      github: "#"
    },
    {
      id: "p3",
      title: "GreenLife Organic Store Management System",
      category: "systems",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      description: "Desktop-based retail store management application built with C# .NET Framework and SQL Server featuring Admin and Customer modules.",
      fullDetails: "Developed a desktop-based retail management system with Admin and Customer modules. Implemented product, order, inventory, and customer management with SQL Server integration. Built secure login, reporting dashboard, product search, and order tracking features.",
      tags: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "Visual Studio"],
      github: "https://github.com"
    },
    {
      id: "p4",
      title: "IslandLink Sales Distribution Network (ISDN)",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      description: "Centralized sales distribution management system with role-based access control, route tracking, and real-time inventory updates.",
      fullDetails: "Developed a centralized sales distribution management system with role-based access control. Implemented logistics, route management, delivery tracking, inventory monitoring, and reporting modules. Integrated SQL Server database with real-time inventory updates, dashboard reporting, and secure authentication.",
      tags: ["SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP"],
      github: "https://github.com"
    },
    {
      id: "p5",
      title: "The Silent Guardian – AI Agent Rescue Simulation",
      category: "systems",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      description: "Interactive AI agent rescue simulation built using Finite State Machine (FSM) for intelligent state-based decision making.",
      fullDetails: "Developed an AI agent simulation using Finite State Machine (FSM) for intelligent state-based decision-making. Implemented multi-agent interactions, dynamic environments, and multiple user-driven outcomes. Designed an interactive rescue simulation using HTML, CSS, and JavaScript with real-time event handling.",
      tags: ["JavaScript", "HTML", "CSS", "Finite State Machine (FSM)", "AI Agents"],
      github: "https://github.com"
    },
    {
      id: "p6",
      title: "Grifindo Lanka Toys – Leave Management System",
      category: "systems",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      description: "Desktop leave management system automating employee leave applications, entitlement tracking, admin approvals, and reporting.",
      fullDetails: "Developed a desktop-based application for Grifindo Lanka Toys to automate employee leave processes. The system allows employees to apply for annual, casual, or short leaves and track request statuses, while administrators can manage employee records, set leave entitlements, approve or reject applications, and generate analytical reports efficiently.",
      tags: ["C#", ".NET Framework", "Windows Forms", "Visual Studio", "SQL Server"],
      github: "https://github.com"
    },
    {
      id: "p7",
      title: "BlueScope Enterprise Network Architecture & Simulation",
      category: "systems",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      description: "Enterprise network design for Melbourne HQ & Darwin branch featuring VLSM subnetting, IPsec VPN, Wi-Fi, and IoT smart office integration.",
      fullDetails: "Designed and simulated a comprehensive enterprise network architecture for BlueScope's Melbourne head office and Darwin branch using Cisco Packet Tracer. Key implementations include VLSM departmental subnetting, secure site-to-site IPsec VPN connectivity between regional offices, enterprise Wi-Fi setup for conference rooms and customer service areas, and smart office IoT facility integration.",
      tags: ["Cisco Packet Tracer", "VLSM Subnetting", "IPsec VPN", "Wi-Fi WLAN", "IoT Integration"],
      github: "https://github.com"
    },
    {
      id: "p8",
      title: "Doctor Channelling System",
      category: "systems",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      description: "Java-based console application managing doctor appointments, patient records, scheduling, cancellations, and waiting list management via CLI.",
      fullDetails: "The Doctor Channelling System is a command-line application developed in Java to simulate the appointment management process in a healthcare environment. The system allows patients to register with their personal and medical information, search for available doctors, and book appointments based on available time slots.\n\nThe application supports doctor registration, including specialization, consultation fees, and available schedules. Patients can book, cancel, or request to reschedule appointments. When an appointment is cancelled, the system automatically allocates the available slot to the next patient in the waiting queue. Appointment records are stored during program execution to facilitate efficient management and future reference.\n\nThis project demonstrates object-oriented programming principles, data structures, user input validation, and console-based application development using Java.",
      tags: ["Java", "OOP", "CLI", "Console Application", "Data Structures", "Exception Handling"],
      github: "#"
    }
  ],

  experience: [
    {
      id: "exp1",
      role: "IT Intern",
      company: "Ruhunu Foods (Pvt) Ltd., Sri Lanka",
      period: "August, 2025 - February, 2026",
      duties: [
        "Supported the Sales Force Automation (SFA) system during upgrades and implementation.",
        "Assisted with ERP system operations, including inventory management and data handling.",
        "Participated in the setup and testing of a new ERP system for production operations.",
        "Performed data entry, documentation, and system record maintenance.",
        "Assisted with IT-related projects, system evaluations, and technical support activities."
      ]
    }
  ],

  education: [
    {
      id: "e1",
      degree: "BEng (Hons) Software Engineering (Top-Up)",
      institution: "London Metropolitan University, United Kingdom",
      period: "September, 2025 - Present",
      grade: "Grade: Pending",
      description: "Specializing in Advanced Software Engineering, Distributed Architectures, and Full-Stack Systems."
    },
    {
      id: "e2",
      degree: "Pearson BTEC Level 5 Higher National Diploma (HND) in Computing (Software Engineering)",
      institution: "ESOFT Metro Campus, Sri Lanka",
      period: "September, 2023 - September, 2025",
      grade: "Grade: Distinction ⭐",
      description: "Comprehensive software engineering curriculum covering Object-Oriented Programming, Database Management, and Full-Stack Web Development."
    }
  ],

  certificates: [
    {
      id: "c1",
      title: "Fundamentals of Database: What is SQL?",
      issuer: "Simplilearn SkillUp",
      date: "October 2025",
      credId: "Simplilearn Verified",
      icon: "fa-solid fa-database"
    },
    {
      id: "c2",
      title: "Project Management 101",
      issuer: "Simplilearn SkillUp",
      date: "October 2025",
      credId: "Simplilearn Verified",
      icon: "fa-solid fa-list-check"
    },
    {
      id: "c3",
      title: "Python for Beginners",
      issuer: "University of Moratuwa, Sri Lanka",
      date: "August 2025",
      credId: "UoM Verified",
      icon: "fa-brands fa-python"
    },
    {
      id: "c4",
      title: "Short Course in Human Resource Management",
      issuer: "The Open University of Sri Lanka",
      date: "February 2023",
      credId: "OUSL Verified",
      icon: "fa-solid fa-users"
    },
    {
      id: "c5",
      title: "Diploma in English - UK Awards",
      issuer: "AIBT Campus, Sri Lanka",
      date: "July 2021 – January 2022",
      credId: "Grade: Merit",
      icon: "fa-solid fa-certificate"
    },
    {
      id: "c6",
      title: "Pearson Assured Diploma in IT (International)",
      issuer: "ESOFT Metro Campus, Sri Lanka",
      date: "January 2018 – August 2018",
      credId: "Completed",
      icon: "fa-solid fa-award"
    }
  ]
};

let portfolioData = DEFAULT_PORTFOLIO_DATA;
let isAdminLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  initBackgroundCanvas();
  renderAllSections();
  initNavigation();
  initFiltersAndModals();
  initContactForm();
  initSecretAdminShortcut();
});

function loadStoredData() {
  const saved = localStorage.getItem("tharushi_portfolio_v3");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.projects) {
        DEFAULT_PORTFOLIO_DATA.projects.forEach(defProj => {
          if (!parsed.projects.some(p => p.id === defProj.id)) {
            parsed.projects.push(defProj);
          }
        });
      }
      portfolioData = parsed;
    } catch (e) {
      portfolioData = DEFAULT_PORTFOLIO_DATA;
    }
  }
}

/**
 * Compress an image data-URL to a smaller JPEG via canvas.
 * maxW: max width in pixels, quality: 0–1 JPEG quality
 */
function compressImageDataUrl(dataUrl, maxW = 800, quality = 0.80) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = img.width > maxW ? maxW / img.width : 1;
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl); // fallback: use original
    img.src = dataUrl;
  });
}

function saveData() {
  try {
    localStorage.setItem("tharushi_portfolio_v3", JSON.stringify(portfolioData));
  } catch (e) {
    if (e.name === "QuotaExceededError" || e.code === 22) {
      showToast("Storage full! Try using a smaller image (under 500 KB).", "danger");
    } else {
      showToast("Save failed: " + e.message, "danger");
    }
    console.error("saveData error:", e);
    return; // don't re-render on failed save
  }
  renderAllSections();
  if (isAdminLoggedIn) populateAdminLists();
}

function renderAllSections() {
  renderPersonal();
  renderAbout();
  renderWorkExperience();
  renderEducation();
  renderSkills();
  renderCertificates();
  renderProjects();
  renderContact();
}

function formatUrl(urlStr) {
  if (!urlStr) return "#";
  let trimmed = urlStr.trim();
  if (trimmed === "" || trimmed === "#") return "#";
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return "https://" + trimmed;
  }
  return trimmed;
}

function renderPersonal() {
  const { personal } = portfolioData;

  document.getElementById("hero-name").textContent = personal.name;
  document.getElementById("hero-badge-text").textContent = personal.badge;
  document.getElementById("hero-subtitle").textContent = personal.heroSubtitle || personal.badge;
  document.getElementById("hero-bio").textContent = personal.bio;
  document.getElementById("footer-name").textContent = personal.name;

  const photoUrl = personal.profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
  const aboutImg = document.getElementById("about-profile-img");
  if (aboutImg) aboutImg.src = photoUrl;

  if (personal.linkedin) {
    const lUrl = formatUrl(personal.linkedin);
    document.getElementById("hero-linkedin-link").href = lUrl;
    document.getElementById("footer-linkedin").href = lUrl;
  }
  if (personal.github) {
    const gUrl = formatUrl(personal.github);
    document.getElementById("hero-github-link").href = gUrl;
    document.getElementById("footer-github").href = gUrl;
  }
  if (personal.email) {
    document.getElementById("hero-email-link").href = `mailto:${personal.email}`;
    document.getElementById("footer-email").href = `mailto:${personal.email}`;
  }

  document.getElementById("download-cv-btn").onclick = () => {
    if (personal.cvLink && personal.cvLink !== "#") {
      const a = document.createElement("a");
      a.href = personal.cvLink;
      a.download = "Tharushi_Weerasekara_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast("Downloading Tharushi Weerasekara CV...", "success");
    } else {
      showToast("Downloading CV...", "info");
    }
  };
}

function renderAbout() {
  const { about } = portfolioData;

  document.getElementById("about-heading").textContent = about.heading;
  document.getElementById("about-text").textContent = about.text;
  document.getElementById("about-subtext").textContent = about.subtext;

  const infoContainer = document.getElementById("about-info-list");
  infoContainer.innerHTML = about.infoList.map(item => `
    <div class="info-item">
      <i class="${item.icon}"></i>
      <span><strong>${item.label}:</strong> ${item.value}</span>
    </div>
  `).join("");
}

function renderWorkExperience() {
  const container = document.getElementById("experience-container");
  const expList = portfolioData.experience || DEFAULT_PORTFOLIO_DATA.experience;

  container.innerHTML = expList.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-card">
        <span class="timeline-period">${exp.period}</span>
        <h3 class="timeline-title">${exp.role}</h3>
        <div class="timeline-institution"><i class="fa-solid fa-building"></i> ${exp.company}</div>
        <ul style="margin-left: 1.25rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
          ${exp.duties.map(d => `<li style="margin-bottom: 0.4rem;">${d}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("education-container");
  const eduList = portfolioData.education || DEFAULT_PORTFOLIO_DATA.education;

  container.innerHTML = eduList.map(edu => `
    <div class="edu-card glass-card">
      <div class="edu-header">
        <div class="edu-title">${edu.degree}</div>
        <span class="edu-grade">${edu.grade}</span>
      </div>
      <div class="edu-institution"><i class="fa-solid fa-university"></i> ${edu.institution}</div>
      <span class="timeline-period">${edu.period}</span>
      <p style="color:var(--text-muted);font-size:0.9rem;">${edu.description}</p>
    </div>
  `).join("");
}

function renderSkills() {
  const techGrid = document.getElementById("tech-skills-grid");
  const softGrid = document.getElementById("soft-skills-grid");

  const techList = portfolioData.skills?.technical || DEFAULT_PORTFOLIO_DATA.skills.technical;
  const softList = portfolioData.skills?.soft || DEFAULT_PORTFOLIO_DATA.skills.soft;

  techGrid.innerHTML = techList.map(skill => `
    <div class="skill-badge-card">
      <div class="skill-badge-icon"><i class="${skill.icon}"></i></div>
      <div class="skill-badge-info">
        <div class="skill-badge-name">${skill.name}</div>
        <div class="skill-badge-tag">${skill.tag}</div>
      </div>
    </div>
  `).join("");

  softGrid.innerHTML = softList.map(skill => `
    <div class="skill-badge-card">
      <div class="skill-badge-icon"><i class="${skill.icon}"></i></div>
      <div class="skill-badge-info">
        <div class="skill-badge-name">${skill.name}</div>
        <div class="skill-badge-tag">${skill.tag}</div>
      </div>
    </div>
  `).join("");
}

function renderCertificates() {
  const container = document.getElementById("certs-grid");
  const certList = portfolioData.certificates || DEFAULT_PORTFOLIO_DATA.certificates;

  container.innerHTML = certList.map(cert => `
    <div class="cert-card glass-card">
      <div class="cert-icon"><i class="${cert.icon || 'fa-solid fa-award'}"></i></div>
      <div class="cert-details">
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-meta">
          <span>${cert.date}</span>
          <span class="text-gradient"><strong>${cert.credId}</strong></span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-grid");
  const projectList = portfolioData.projects || DEFAULT_PORTFOLIO_DATA.projects;

  const filtered = filterCategory === "all"
    ? projectList
    : projectList.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(project => {
    const showGithub = project.category !== "ai-ml" && project.github && project.github !== "#";

    return `
    <div class="project-card glass-card">
      <div class="project-img-container">
        <img src="${project.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'}" alt="${project.title}" class="project-img" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'">
        <span class="project-badge">${project.category.toUpperCase()}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>

        <div class="project-tech-tags">
          ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>

        <div class="project-links">
          <button class="btn btn-primary btn-sm open-project-modal" data-id="${project.id}">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          ${showGithub ? `
          <a href="${formatUrl(project.github)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="GitHub Repository">
            <i class="fa-brands fa-github"></i> GitHub
          </a>` : ''}
        </div>
      </div>
    </div>
    `;
  }).join("");

  document.querySelectorAll(".open-project-modal").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.id));
  });
}

function openProjectModal(id) {
  const project = (portfolioData.projects || DEFAULT_PORTFOLIO_DATA.projects).find(p => p.id === id);
  if (!project) return;

  const showGithub = project.category !== "ai-ml" && project.github && project.github !== "#";

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <div style="border-radius:12px;overflow:hidden;margin-bottom:1.25rem;max-height:260px;">
      <img src="${project.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'}" style="width:100%;height:100%;object-fit:cover;" alt="${project.title}">
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
      <h2 style="font-size:1.4rem;font-weight:800;color:var(--text-main);">${project.title}</h2>
      <span class="project-badge">${project.category.toUpperCase()}</span>
    </div>

    <p style="color:var(--text-muted);font-size:0.95rem;margin-bottom:1.5rem;line-height:1.7;">
      ${project.fullDetails || project.description}
    </p>

    <h4 style="margin-bottom:0.6rem;color:var(--color-primary);">Technologies & Tools Used:</h4>
    <div class="project-tech-tags" style="margin-bottom:1.5rem;">
      ${project.tags.map(t => `<span class="tech-tag" style="font-size:0.85rem;">${t}</span>`).join("")}
    </div>

    ${showGithub ? `
    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
      <a href="${formatUrl(project.github)}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-github"></i> GitHub Code Repository</a>
    </div>` : ''}
  `;

  document.getElementById("project-modal").classList.add("active");
}

function renderContact() {
  const { personal } = portfolioData;
  const whatsappNumber = (personal.phone || "").replace(/\D/g, "");

  const detailsContainer = document.getElementById("contact-details-list");
  detailsContainer.innerHTML = `
    <div class="contact-detail-item">
      <div class="detail-icon"><i class="fa-solid fa-envelope"></i></div>
      <div>
        <div class="detail-label">Email</div>
        <div class="detail-value"><a href="mailto:${personal.email}" style="color:inherit;text-decoration:none;">${personal.email}</a></div>
      </div>
    </div>
    <div class="contact-detail-item">
      <div class="detail-icon"><i class="fa-solid fa-phone"></i></div>
      <div>
        <div class="detail-label">Phone</div>
        <div class="detail-value">${personal.phone}</div>
      </div>
    </div>
    <div class="contact-detail-item">
      <div class="detail-icon" style="background:linear-gradient(135deg,#25d366,#128c7e);"><i class="fa-brands fa-whatsapp"></i></div>
      <div>
        <div class="detail-label">WhatsApp</div>
        <div class="detail-value"><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">${personal.phone}</a></div>
      </div>
    </div>
    <div class="contact-detail-item">
      <div class="detail-icon"><i class="fa-solid fa-location-dot"></i></div>
      <div>
        <div class="detail-label">Location</div>
        <div class="detail-value">${personal.location}</div>
      </div>
    </div>
  `;

  const socialContainer = document.getElementById("contact-social-links");
  socialContainer.innerHTML = `
    <div class="contact-social-btns">
      <a href="${formatUrl(personal.github)}" target="_blank" rel="noopener" class="contact-social-btn">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="${formatUrl(personal.linkedin)}" target="_blank" rel="noopener" class="contact-social-btn">
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <a href="mailto:${personal.email}" class="contact-social-btn">
        <i class="fa-solid fa-envelope"></i> Email Me
      </a>
    </div>
  `;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
    submitBtn.disabled = true;

    const formData = {
      name: document.getElementById("form-name").value,
      email: document.getElementById("form-email").value,
      phone: document.getElementById("form-phone").value,
      subject: document.getElementById("form-subject").value,
      message: document.getElementById("form-message").value
    };

    fetch("https://formsubmit.co/ajax/tharushiweerasekara24@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        showToast("Message sent successfully to Tharushi!", "success");
        form.reset();
      })
      .catch(error => {
        showToast("Message sent successfully to Tharushi!", "success");
        form.reset();
      })
      .finally(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      });
  });
}

// ── Global opener helpers (called from populateAdminLists & event handlers) ──

function openExpEditor(exp) {
  exp = exp || null;
  document.getElementById("exp-edit-id").value = exp ? exp.id : "";
  document.getElementById("exp-edit-role").value = exp ? exp.role : "";
  document.getElementById("exp-edit-company").value = exp ? exp.company : "";
  document.getElementById("exp-edit-period").value = exp ? exp.period : "";
  document.getElementById("exp-edit-duties").value = exp ? (exp.duties || []).join("\n") : "";
  document.getElementById("exp-editor-title").innerHTML = exp
    ? '<i class="fa-solid fa-briefcase"></i> Edit Experience'
    : '<i class="fa-solid fa-briefcase"></i> Add New Experience';
  document.getElementById("exp-editor-modal").classList.add("active");
}

function openEduEditor(edu) {
  edu = edu || null;
  document.getElementById("edu-edit-id").value = edu ? edu.id : "";
  document.getElementById("edu-edit-degree").value = edu ? edu.degree : "";
  document.getElementById("edu-edit-institution").value = edu ? edu.institution : "";
  document.getElementById("edu-edit-period").value = edu ? edu.period : "";
  document.getElementById("edu-edit-grade").value = edu ? edu.grade : "";
  document.getElementById("edu-edit-description").value = edu ? edu.description : "";
  document.getElementById("edu-editor-title").innerHTML = edu
    ? '<i class="fa-solid fa-graduation-cap"></i> Edit Education'
    : '<i class="fa-solid fa-graduation-cap"></i> Add New Education';
  document.getElementById("edu-editor-modal").classList.add("active");
}

function openSkillEditor(skill, type) {
  skill = skill || null;
  type = type || "technical";
  document.getElementById("skill-edit-id").value = skill ? (skill._id || "") : "";
  document.getElementById("skill-edit-type").value = type;
  document.getElementById("skill-edit-category").value = type;
  document.getElementById("skill-edit-name").value = skill ? skill.name : "";
  document.getElementById("skill-edit-tag").value = skill ? skill.tag : "";
  document.getElementById("skill-edit-icon").value = skill ? skill.icon : "";
  document.getElementById("skill-editor-title").innerHTML = skill
    ? '<i class="fa-solid fa-code"></i> Edit Skill'
    : '<i class="fa-solid fa-code"></i> Add New Skill';
  document.getElementById("skill-editor-modal").classList.add("active");
}

function openCertEditor(cert) {
  cert = cert || null;
  document.getElementById("cert-edit-id").value = cert ? cert.id : "";
  document.getElementById("cert-edit-title").value = cert ? cert.title : "";
  document.getElementById("cert-edit-issuer").value = cert ? cert.issuer : "";
  document.getElementById("cert-edit-date").value = cert ? cert.date : "";
  document.getElementById("cert-edit-credid").value = cert ? cert.credId : "";
  document.getElementById("cert-edit-icon").value = cert ? (cert.icon || "") : "";
  document.getElementById("cert-editor-title").innerHTML = cert
    ? '<i class="fa-solid fa-certificate"></i> Edit Certification'
    : '<i class="fa-solid fa-certificate"></i> Add New Certification';
  document.getElementById("cert-editor-modal").classList.add("active");
}

function renderAdminSkillList(containerId, list, type) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (list || []).map((skill, idx) => `
    <div class="admin-item-card">
      <div style="display:flex;align-items:center;gap:0.6rem;">
        <i class="${skill.icon || 'fa-solid fa-star'}" style="color:var(--color-primary);width:18px;"></i>
        <div>
          <strong>${skill.name}</strong>
          <div style="font-size:0.78rem;color:var(--text-muted);">${skill.tag}</div>
        </div>
      </div>
      <div style="display:flex;gap:0.4rem;">
        <button class="btn btn-xs btn-primary edit-skill-btn" data-idx="${idx}" data-type="${type}"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn btn-xs btn-secondary text-danger del-skill-btn" data-idx="${idx}" data-type="${type}"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".edit-skill-btn").forEach(btn => {
    btn.onclick = () => {
      const skillType = btn.dataset.type;
      const skillIdx = parseInt(btn.dataset.idx);
      const skillList = skillType === "technical" ? portfolioData.skills.technical : portfolioData.skills.soft;
      openSkillEditor(skillList[skillIdx], skillType);
    };
  });

  el.querySelectorAll(".del-skill-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Delete this skill?")) {
        const skillType = btn.dataset.type;
        const skillIdx = parseInt(btn.dataset.idx);
        if (skillType === "technical") {
          portfolioData.skills.technical.splice(skillIdx, 1);
        } else {
          portfolioData.skills.soft.splice(skillIdx, 1);
        }
        saveData();
        showToast("Skill deleted", "info");
      }
    };
  });
}

function initSecretAdminShortcut() {
  const loginModal = document.getElementById("admin-login-modal");
  const loginForm = document.getElementById("admin-login-form");
  const editorModal = document.getElementById("editor-modal");
  const statusBar = document.getElementById("admin-status-bar");

  if (window.location.hash === "#admin") {
    loginModal.classList.add("active");
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      if (isAdminLoggedIn) {
        openAdminDrawer();
      } else {
        loginModal.classList.add("active");
      }
    }
  });

  document.getElementById("admin-login-close").onclick = () => loginModal.classList.remove("active");
  document.getElementById("editor-close").onclick = () => editorModal.classList.remove("active");

  loginForm.onsubmit = (e) => {
    e.preventDefault();
    const inputPass = document.getElementById("admin-passcode-input").value;
    const actualPass = portfolioData.adminPasscode || "admin123";

    if (inputPass === actualPass) {
      isAdminLoggedIn = true;
      loginModal.classList.remove("active");
      statusBar.classList.remove("hidden");
      showToast("Secret Admin Mode Unlocked!", "success");
      openAdminDrawer();
    } else {
      showToast("Incorrect Security Passcode!", "danger");
    }
  };

  document.getElementById("open-admin-panel-btn").onclick = () => openAdminDrawer();
  document.getElementById("admin-logout-btn").onclick = () => {
    isAdminLoggedIn = false;
    statusBar.classList.add("hidden");
    editorModal.classList.remove("active");
    showToast("Exited Secret Admin Mode", "info");
  };

  document.querySelectorAll(".admin-tab").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    };
  });

  document.getElementById("admin-profile-form").onsubmit = (e) => {
    e.preventDefault();

    portfolioData.personal.name = document.getElementById("edit-name").value;
    portfolioData.personal.badge = document.getElementById("edit-badge").value;
    portfolioData.personal.email = document.getElementById("edit-email").value;
    portfolioData.personal.phone = document.getElementById("edit-phone").value;
    portfolioData.personal.location = document.getElementById("edit-location").value;

    let ghInput = document.getElementById("edit-github").value.trim();
    if (ghInput && !ghInput.startsWith("http://") && !ghInput.startsWith("https://")) ghInput = "https://" + ghInput;
    portfolioData.personal.github = ghInput;

    let liInput = document.getElementById("edit-linkedin").value.trim();
    if (liInput && !liInput.startsWith("http://") && !liInput.startsWith("https://")) liInput = "https://" + liInput;
    portfolioData.personal.linkedin = liInput;

    portfolioData.personal.bio = document.getElementById("edit-bio").value;

    const photoFile = document.getElementById("edit-photo-file").files[0];
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        portfolioData.personal.profilePhoto = evt.target.result;
        saveData();
      };
      reader.readAsDataURL(photoFile);
    }

    const cvFile = document.getElementById("edit-cv-file").files[0];
    if (cvFile) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        portfolioData.personal.cvLink = evt.target.result;
        saveData();
      };
      reader.readAsDataURL(cvFile);
    }

    saveData();
    showToast("Profile & CV updated successfully!", "success");
    editorModal.classList.remove("active");
  };

  document.getElementById("admin-about-form").onsubmit = (e) => {
    e.preventDefault();
    portfolioData.about.heading = document.getElementById("edit-about-heading").value;
    portfolioData.about.text = document.getElementById("edit-about-text").value;
    portfolioData.about.subtext = document.getElementById("edit-about-subtext").value;

    saveData();
    showToast("About section updated!", "success");
    editorModal.classList.remove("active");
  };

  const projModal = document.getElementById("project-editor-modal");
  document.getElementById("project-editor-close").onclick = () => projModal.classList.remove("active");

  document.getElementById("add-project-btn").onclick = () => {
    document.getElementById("project-edit-id").value = "";
    document.getElementById("project-edit-title").value = "";
    document.getElementById("project-edit-category").value = "fullstack";
    document.getElementById("project-edit-github").value = "";
    document.getElementById("project-edit-desc").value = "";
    document.getElementById("project-edit-fulldetails").value = "";
    document.getElementById("project-edit-tags").value = "";
    document.getElementById("project-edit-img-file").value = "";
    document.getElementById("project-editor-title").textContent = "Add New Project";

    projModal.classList.add("active");
  };

  document.getElementById("project-edit-form").onsubmit = (e) => {
    e.preventDefault();

    try {
      const id = document.getElementById("project-edit-id").value || "p_" + Date.now();
      const title = document.getElementById("project-edit-title").value.trim();
      const category = document.getElementById("project-edit-category").value;
      const github = document.getElementById("project-edit-github").value.trim();
      const description = document.getElementById("project-edit-desc").value.trim();
      const fullDetails = document.getElementById("project-edit-fulldetails").value.trim() || description;
      const tagsStr = document.getElementById("project-edit-tags").value;
      const tags = tagsStr.split(",").map(t => t.trim()).filter(Boolean);

      if (!title || !description) {
        showToast("Please fill in Title and Short Summary!", "danger");
        return;
      }

      let existingImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80";
      const existing = (portfolioData.projects || []).find(p => p.id === id);
      if (existing && existing.image) existingImg = existing.image;

      const imgFileInput = document.getElementById("project-edit-img-file");
      const imgFile = imgFileInput && imgFileInput.files && imgFileInput.files[0];

      const saveProjectObj = (imageUri) => {
        const projObj = {
          id, title, category, github, description, fullDetails, tags, image: imageUri
        };

        const idx = (portfolioData.projects || []).findIndex(p => p.id === id);
        if (idx >= 0) {
          portfolioData.projects[idx] = projObj;
        } else {
          portfolioData.projects.push(projObj);
        }

        saveData();
        showToast("Project saved successfully!", "success");
        document.getElementById("project-editor-modal").classList.remove("active");
      };

      if (imgFile) {
        const reader = new FileReader();
        reader.onload = async (evt) => {
          if (evt.target && evt.target.result) {
            // Compress before saving to avoid localStorage quota errors
            const compressed = await compressImageDataUrl(evt.target.result);
            saveProjectObj(compressed);
          } else {
            showToast("Image could not be read. Saving without new photo.", "info");
            saveProjectObj(existingImg);
          }
        };
        reader.onerror = () => {
          showToast("Image upload failed. Saving without new photo.", "danger");
          saveProjectObj(existingImg);
        };
        reader.readAsDataURL(imgFile);
      } else {
        saveProjectObj(existingImg);
      }
    } catch (err) {
      showToast("Something went wrong saving the project. Try again.", "danger");
      console.error("Project save error:", err);
    }
  };

  // ── EXPERIENCE MODAL CRUD ──────────────────────────────────────────
  const expEditorModal = document.getElementById("exp-editor-modal");
  document.getElementById("exp-editor-close").onclick = () => expEditorModal.classList.remove("active");

  function openExpEditor(exp = null) {
    document.getElementById("exp-edit-id").value = exp ? exp.id : "";
    document.getElementById("exp-edit-role").value = exp ? exp.role : "";
    document.getElementById("exp-edit-company").value = exp ? exp.company : "";
    document.getElementById("exp-edit-period").value = exp ? exp.period : "";
    document.getElementById("exp-edit-duties").value = exp ? (exp.duties || []).join("\n") : "";
    document.getElementById("exp-editor-title").innerHTML = exp
      ? '<i class="fa-solid fa-briefcase"></i> Edit Experience'
      : '<i class="fa-solid fa-briefcase"></i> Add New Experience';
    expEditorModal.classList.add("active");
  }

  document.getElementById("add-exp-btn").onclick = () => openExpEditor();

  document.getElementById("exp-edit-form").onsubmit = (e) => {
    e.preventDefault();
    const id = document.getElementById("exp-edit-id").value || "exp_" + Date.now();
    const role = document.getElementById("exp-edit-role").value.trim();
    const company = document.getElementById("exp-edit-company").value.trim();
    const period = document.getElementById("exp-edit-period").value.trim();
    const dutiesRaw = document.getElementById("exp-edit-duties").value;
    const duties = dutiesRaw.split("\n").map(d => d.trim()).filter(Boolean);

    const expObj = { id, role, company, period, duties };
    const idx = (portfolioData.experience || []).findIndex(e => e.id === id);
    if (idx >= 0) {
      portfolioData.experience[idx] = expObj;
    } else {
      portfolioData.experience = portfolioData.experience || [];
      portfolioData.experience.push(expObj);
    }
    saveData();
    showToast(idx >= 0 ? "Experience updated!" : "Experience added!", "success");
    expEditorModal.classList.remove("active");
  };

  // ── EDUCATION MODAL CRUD ───────────────────────────────────────────
  const eduEditorModal = document.getElementById("edu-editor-modal");
  document.getElementById("edu-editor-close").onclick = () => eduEditorModal.classList.remove("active");

  function openEduEditor(edu = null) {
    document.getElementById("edu-edit-id").value = edu ? edu.id : "";
    document.getElementById("edu-edit-degree").value = edu ? edu.degree : "";
    document.getElementById("edu-edit-institution").value = edu ? edu.institution : "";
    document.getElementById("edu-edit-period").value = edu ? edu.period : "";
    document.getElementById("edu-edit-grade").value = edu ? edu.grade : "";
    document.getElementById("edu-edit-description").value = edu ? edu.description : "";
    document.getElementById("edu-editor-title").innerHTML = edu
      ? '<i class="fa-solid fa-graduation-cap"></i> Edit Education'
      : '<i class="fa-solid fa-graduation-cap"></i> Add New Education';
    eduEditorModal.classList.add("active");
  }

  document.getElementById("add-edu-btn").onclick = () => openEduEditor();

  document.getElementById("edu-edit-form").onsubmit = (e) => {
    e.preventDefault();
    const id = document.getElementById("edu-edit-id").value || "edu_" + Date.now();
    const degree = document.getElementById("edu-edit-degree").value.trim();
    const institution = document.getElementById("edu-edit-institution").value.trim();
    const period = document.getElementById("edu-edit-period").value.trim();
    const grade = document.getElementById("edu-edit-grade").value.trim();
    const description = document.getElementById("edu-edit-description").value.trim();

    const eduObj = { id, degree, institution, period, grade, description };
    const idx = (portfolioData.education || []).findIndex(e => e.id === id);
    if (idx >= 0) {
      portfolioData.education[idx] = eduObj;
    } else {
      portfolioData.education = portfolioData.education || [];
      portfolioData.education.push(eduObj);
    }
    saveData();
    showToast(idx >= 0 ? "Education updated!" : "Education added!", "success");
    eduEditorModal.classList.remove("active");
  };

  // ── SKILL MODAL CRUD ───────────────────────────────────────────────
  const skillEditorModal = document.getElementById("skill-editor-modal");
  document.getElementById("skill-editor-close").onclick = () => skillEditorModal.classList.remove("active");

  function openSkillEditor(skill = null, type = "technical") {
    document.getElementById("skill-edit-id").value = skill ? (skill._id || "") : "";
    document.getElementById("skill-edit-type").value = type;
    document.getElementById("skill-edit-category").value = type;
    document.getElementById("skill-edit-name").value = skill ? skill.name : "";
    document.getElementById("skill-edit-tag").value = skill ? skill.tag : "";
    document.getElementById("skill-edit-icon").value = skill ? skill.icon : "";
    document.getElementById("skill-editor-title").innerHTML = skill
      ? '<i class="fa-solid fa-code"></i> Edit Skill'
      : '<i class="fa-solid fa-code"></i> Add New Skill';
    skillEditorModal.classList.add("active");
  }

  document.getElementById("add-skill-btn").onclick = () => openSkillEditor();

  document.getElementById("skill-edit-form").onsubmit = (e) => {
    e.preventDefault();
    const _id = document.getElementById("skill-edit-id").value;
    const category = document.getElementById("skill-edit-category").value; // 'technical' or 'soft'
    const name = document.getElementById("skill-edit-name").value.trim();
    const tag = document.getElementById("skill-edit-tag").value.trim() || (category === "technical" ? "Technical Skill" : "Soft Skill");
    const icon = document.getElementById("skill-edit-icon").value.trim() || (category === "technical" ? "fa-solid fa-code" : "fa-solid fa-brain");

    const skillObj = { _id: _id || "skill_" + Date.now(), name, tag, icon };
    const list = category === "technical" ? portfolioData.skills.technical : portfolioData.skills.soft;
    const idx = _id ? list.findIndex(s => s._id === _id) : -1;
    if (idx >= 0) {
      list[idx] = skillObj;
    } else {
      list.push(skillObj);
    }
    saveData();
    showToast(idx >= 0 ? "Skill updated!" : "Skill added!", "success");
    skillEditorModal.classList.remove("active");
  };

  // ── CERTIFICATION MODAL CRUD ───────────────────────────────────────
  const certEditorModal = document.getElementById("cert-editor-modal");
  document.getElementById("cert-editor-close").onclick = () => certEditorModal.classList.remove("active");

  function openCertEditor(cert = null) {
    document.getElementById("cert-edit-id").value = cert ? cert.id : "";
    document.getElementById("cert-edit-title").value = cert ? cert.title : "";
    document.getElementById("cert-edit-issuer").value = cert ? cert.issuer : "";
    document.getElementById("cert-edit-date").value = cert ? cert.date : "";
    document.getElementById("cert-edit-credid").value = cert ? cert.credId : "";
    document.getElementById("cert-edit-icon").value = cert ? (cert.icon || "") : "";
    document.getElementById("cert-editor-title").innerHTML = cert
      ? '<i class="fa-solid fa-certificate"></i> Edit Certification'
      : '<i class="fa-solid fa-certificate"></i> Add New Certification';
    certEditorModal.classList.add("active");
  }

  document.getElementById("add-cert-btn").onclick = () => openCertEditor();

  document.getElementById("cert-edit-form").onsubmit = (e) => {
    e.preventDefault();
    const id = document.getElementById("cert-edit-id").value || "cert_" + Date.now();
    const title = document.getElementById("cert-edit-title").value.trim();
    const issuer = document.getElementById("cert-edit-issuer").value.trim();
    const date = document.getElementById("cert-edit-date").value.trim();
    const credId = document.getElementById("cert-edit-credid").value.trim();
    const icon = document.getElementById("cert-edit-icon").value.trim() || "fa-solid fa-award";

    const certObj = { id, title, issuer, date, credId, icon };
    const idx = (portfolioData.certificates || []).findIndex(c => c.id === id);
    if (idx >= 0) {
      portfolioData.certificates[idx] = certObj;
    } else {
      portfolioData.certificates = portfolioData.certificates || [];
      portfolioData.certificates.push(certObj);
    }
    saveData();
    showToast(idx >= 0 ? "Certification updated!" : "Certification added!", "success");
    certEditorModal.classList.remove("active");
  };

  document.getElementById("admin-passcode-form").onsubmit = (e) => {
    e.preventDefault();
    const newPass = document.getElementById("edit-passcode").value;
    if (newPass) {
      portfolioData.adminPasscode = newPass;
      saveData();
      showToast("Passcode updated successfully!", "success");
    }
  };

  document.getElementById("export-json-btn").onclick = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
    const a = document.createElement("a");
    a.href = dataStr;
    a.download = "tharushi_portfolio_backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  document.getElementById("reset-default-btn").onclick = () => {
    if (confirm("Reset portfolio to original CV default data?")) {
      localStorage.removeItem("tharushi_portfolio_v3");
      portfolioData = DEFAULT_PORTFOLIO_DATA;
      renderAllSections();
      showToast("Reset to default data", "info");
      editorModal.classList.remove("active");
    }
  };
}

function openAdminDrawer() {
  const p = portfolioData.personal;
  document.getElementById("edit-name").value = p.name || "";
  document.getElementById("edit-badge").value = p.badge || "";
  document.getElementById("edit-email").value = p.email || "";
  document.getElementById("edit-phone").value = p.phone || "";
  document.getElementById("edit-location").value = p.location || "";
  document.getElementById("edit-github").value = p.github || "";
  document.getElementById("edit-linkedin").value = p.linkedin || "";
  document.getElementById("edit-bio").value = p.bio || "";

  const ab = portfolioData.about;
  document.getElementById("edit-about-heading").value = ab.heading || "";
  document.getElementById("edit-about-text").value = ab.text || "";
  document.getElementById("edit-about-subtext").value = ab.subtext || "";

  populateAdminLists();

  document.getElementById("editor-modal").classList.add("active");
}

function populateAdminLists() {
  const projList = document.getElementById("admin-projects-list");
  projList.innerHTML = (portfolioData.projects || []).map(p => `
    <div class="admin-item-card">
      <div style="display:flex;align-items:center;gap:0.8rem;">
        <img src="${p.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;">
        <div>
          <strong>${p.title}</strong>
          <div style="font-size:0.75rem;color:var(--text-dim);">${p.category.toUpperCase()}</div>
        </div>
      </div>
      <div style="display:flex;gap:0.4rem;">
        <button class="btn btn-xs btn-primary edit-proj-btn" data-id="${p.id}"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn btn-xs btn-secondary text-danger del-proj-btn" data-id="${p.id}"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".edit-proj-btn").forEach(btn => {
    btn.onclick = () => {
      const proj = portfolioData.projects.find(p => p.id === btn.dataset.id);
      if (!proj) return;

      document.getElementById("project-edit-id").value = proj.id;
      document.getElementById("project-edit-title").value = proj.title;
      document.getElementById("project-edit-category").value = proj.category;
      document.getElementById("project-edit-github").value = proj.github || "";
      document.getElementById("project-edit-desc").value = proj.description;
      document.getElementById("project-edit-fulldetails").value = proj.fullDetails || proj.description;
      document.getElementById("project-edit-tags").value = (proj.tags || []).join(", ");
      document.getElementById("project-editor-title").textContent = "Edit Project";

      document.getElementById("project-editor-modal").classList.add("active");
    };
  });

  document.querySelectorAll(".del-proj-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Delete this project?")) {
        portfolioData.projects = portfolioData.projects.filter(p => p.id !== btn.dataset.id);
        saveData();
        showToast("Project deleted", "info");
      }
    };
  });

  // ── Experience list ────────────────────────────────────────────────
  const expList = document.getElementById("admin-exp-list");
  expList.innerHTML = (portfolioData.experience || []).map(exp => `
    <div class="admin-item-card">
      <div>
        <strong>${exp.role}</strong>
        <div style="font-size:0.8rem;color:var(--text-muted);">${exp.company} (${exp.period})</div>
      </div>
      <div style="display:flex;gap:0.4rem;">
        <button class="btn btn-xs btn-primary edit-exp-btn" data-id="${exp.id}"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn btn-xs btn-secondary text-danger del-exp-btn" data-id="${exp.id}"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".edit-exp-btn").forEach(btn => {
    btn.onclick = () => {
      const exp = portfolioData.experience.find(e => e.id === btn.dataset.id);
      if (exp) openExpEditor(exp);
    };
  });

  document.querySelectorAll(".del-exp-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Delete this experience item?")) {
        portfolioData.experience = portfolioData.experience.filter(e => e.id !== btn.dataset.id);
        saveData();
        showToast("Experience deleted", "info");
      }
    };
  });

  // ── Education list ─────────────────────────────────────────────────
  const eduList = document.getElementById("admin-edu-list");
  eduList.innerHTML = (portfolioData.education || []).map(edu => `
    <div class="admin-item-card">
      <div>
        <strong>${edu.degree}</strong>
        <div style="font-size:0.8rem;color:var(--text-muted);">${edu.institution} (${edu.period})</div>
      </div>
      <div style="display:flex;gap:0.4rem;">
        <button class="btn btn-xs btn-primary edit-edu-btn" data-id="${edu.id}"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn btn-xs btn-secondary text-danger del-edu-btn" data-id="${edu.id}"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".edit-edu-btn").forEach(btn => {
    btn.onclick = () => {
      const edu = portfolioData.education.find(e => e.id === btn.dataset.id);
      if (edu) openEduEditor(edu);
    };
  });

  document.querySelectorAll(".del-edu-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Delete this education item?")) {
        portfolioData.education = portfolioData.education.filter(e => e.id !== btn.dataset.id);
        saveData();
        showToast("Education deleted", "info");
      }
    };
  });

  // ── Skills lists ───────────────────────────────────────────────────
  function renderAdminSkillList(containerId, list, type) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = (list || []).map((skill, idx) => `
      <div class="admin-item-card">
        <div style="display:flex;align-items:center;gap:0.6rem;">
          <i class="${skill.icon || 'fa-solid fa-star'}" style="color:var(--color-primary);width:18px;"></i>
          <div>
            <strong>${skill.name}</strong>
            <div style="font-size:0.78rem;color:var(--text-muted);">${skill.tag}</div>
          </div>
        </div>
        <div style="display:flex;gap:0.4rem;">
          <button class="btn btn-xs btn-primary edit-skill-btn" data-idx="${idx}" data-type="${type}"><i class="fa-solid fa-pen"></i> Edit</button>
          <button class="btn btn-xs btn-secondary text-danger del-skill-btn" data-idx="${idx}" data-type="${type}"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </div>
    `).join("");

    el.querySelectorAll(".edit-skill-btn").forEach(btn => {
      btn.onclick = () => {
        const skillType = btn.dataset.type;
        const skillIdx = parseInt(btn.dataset.idx);
        const skillList = skillType === "technical" ? portfolioData.skills.technical : portfolioData.skills.soft;
        openSkillEditor(skillList[skillIdx], skillType);
      };
    });

    el.querySelectorAll(".del-skill-btn").forEach(btn => {
      btn.onclick = () => {
        if (confirm("Delete this skill?")) {
          const skillType = btn.dataset.type;
          const skillIdx = parseInt(btn.dataset.idx);
          if (skillType === "technical") {
            portfolioData.skills.technical.splice(skillIdx, 1);
          } else {
            portfolioData.skills.soft.splice(skillIdx, 1);
          }
          saveData();
          showToast("Skill deleted", "info");
        }
      };
    });
  }

  renderAdminSkillList("admin-tech-skills-list", portfolioData.skills.technical, "technical");
  renderAdminSkillList("admin-soft-skills-list", portfolioData.skills.soft, "soft");

  // ── Certifications list ────────────────────────────────────────────
  const certList = document.getElementById("admin-certs-list");
  certList.innerHTML = (portfolioData.certificates || []).map(c => `
    <div class="admin-item-card">
      <div>
        <strong>${c.title}</strong>
        <div style="font-size:0.8rem;color:var(--text-muted);">${c.issuer} (${c.date})</div>
      </div>
      <div style="display:flex;gap:0.4rem;">
        <button class="btn btn-xs btn-primary edit-cert-btn" data-id="${c.id}"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn btn-xs btn-secondary text-danger del-cert-btn" data-id="${c.id}"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".edit-cert-btn").forEach(btn => {
    btn.onclick = () => {
      const cert = portfolioData.certificates.find(c => c.id === btn.dataset.id);
      if (cert) openCertEditor(cert);
    };
  });

  document.querySelectorAll(".del-cert-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Delete this certification?")) {
        portfolioData.certificates = portfolioData.certificates.filter(c => c.id !== btn.dataset.id);
        saveData();
        showToast("Certification deleted", "info");
      }
    };
  });
}

function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 22), 55);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 240, 255, 0.35)";
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  mobileToggle.addEventListener("click", () => navMenu.classList.toggle("active"));

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("active"));
  });
}

function initFiltersAndModals() {
  document.querySelectorAll("#projects-tabs .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#projects-tabs .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  const projectModal = document.getElementById("project-modal");
  document.getElementById("modal-close").addEventListener("click", () => projectModal.classList.remove("active"));
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) projectModal.classList.remove("active");
  });
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

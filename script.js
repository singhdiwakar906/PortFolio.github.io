// ===== Portfolio JavaScript =====

// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme or system preference
function getTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return prefersDark.matches ? 'dark' : 'light';
}

// Apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
applyTheme(getTheme());

// Toggle theme
themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// Data for dynamic content
const experienceData = [
    {
        company: "To The New",
        project: "Astro Go",
        position: "Software Engineer",
        duration: "Sept 2025 – Present",
        location: "Dehradun",
        achievements: [
            { icon: "🚀", text: "Optimized Smart TV app homepage using React and Redux, improving performance by <strong>80%</strong>" },
            { icon: "📺", text: "Enhanced UX across Tizen, WebOS, and Vidaa platforms for low-end devices" }
        ],
        tech: ["React.js", "Redux", "JavaScript", "Tizen", "WebOS"]
    },
    {
        company: "Tech Superior Consulting",
        project: "Pluto Health",
        position: "Software Engineer",
        duration: "Aug 2024 – Sept 2025",
        location: "",
        achievements: [
            { icon: "🏥", text: "Built patient onboarding system, reducing registration time by <strong>40%</strong>" },
            { icon: "🤖", text: "Integrated AI-based disease predictions, improving diagnosis accuracy by <strong>25%</strong>" },
            { icon: "💊", text: "Implemented medication reminders & notifications for better patient adherence" }
        ],
        tech: ["React.js", "Next.js", "GoLang", "PostgreSQL"]
    },
    {
        company: "Tech Superior Consulting",
        project: "AIW",
        position: "Software Engineer",
        duration: "Dec 2023 – July 2024",
        location: "",
        achievements: [
            { icon: "🔐", text: "Automated account verification with OCR & Video KYC, reducing errors by <strong>60%</strong>" },
            { icon: "⚡", text: "Developed secure APIs, increasing verification speed by <strong>50%</strong>" },
            { icon: "📊", text: "Integrated Redis & BullMQ for optimized task processing" }
        ],
        tech: ["React.js", "Next.js", "Express.js", "Redis", "BullMQ"]
    },
    {
        company: "Tech Superior Consulting",
        project: "Delvium",
        position: "Software Engineer",
        duration: "June 2023 – Nov 2023",
        location: "",
        achievements: [
            { icon: "🔍", text: "Designed real-time background verification system for employment screening" },
            { icon: "🛡️", text: "Managed sensitive data with <strong>100%</strong> compliance" },
            { icon: "🚀", text: "Improved verification speed by <strong>35%</strong> through API optimizations" }
        ],
        tech: ["Vue.js", "FastAPI", "Python"]
    }
];

const skillsData = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React.js", progress: 95 },
            { name: "Next.js", progress: 90 },
            { name: "Vue.js", progress: 80 },
            { name: "TypeScript", progress: 85 },
            { name: "HTML/CSS", progress: 95 }
        ]
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", progress: 90 },
            { name: "Express.js", progress: 90 },
            { name: "GoLang", progress: 75 },
            { name: "FastAPI", progress: 80 }
        ]
    },
    {
        title: "Database",
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL", progress: 90 },
            { name: "MongoDB", progress: 85 },
            { name: "Redis", progress: 85 },
            { name: "Oracle", progress: 70 }
        ]
    },
    {
        title: "Tools",
        icon: "🛠️",
        tags: ["Git", "GitHub", "VS Code", "PyCharm", "DBeaver", "Postman", "Docker", "BullMQ"]
    }
];

const projectsData = [
    {
        title: "Chronos",
        description: "A scalable job scheduler with cron-based automation, real-time monitoring, and Dockerized scaling. Built with distributed architecture principles for handling high-throughput task processing.",
        tags: ["Backend", "System Design"],
        tech: ["Node.js", "Express.js", "PostgreSQL", "Redis", "BullMQ"],
        icon: "⏰",
        github: "https://github.com/singhdiwakar906"
    },
    {
        title: "Netflix Clone",
        description: "A full-stack OTT application featuring personalized watchlists, dynamic movie browsing, and user authentication. Built with scalability and efficient API design in mind.",
        tags: ["Full Stack", "OTT Platform"],
        tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
        icon: "🎬",
        github: "https://github.com/singhdiwakar906"
    }
];

// Typing effect for hero section
const roles = ["Software Engineer", "Full Stack Developer", "React Specialist", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedRole = document.getElementById('typed-role');

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typedRole.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedRole.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeRole, typeSpeed);
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCounter();
    });
}

// Render timeline
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = experienceData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-card">
                <div class="timeline-header">
                    <div class="timeline-company">
                        <h3>${exp.company}</h3>
                        <span class="project-name">${exp.project}</span>
                    </div>
                    <div class="timeline-meta">
                        <span class="position">${exp.position}</span>
                        <span class="duration">📅 ${exp.duration}</span>
                        ${exp.location ? `<span class="location">📍 ${exp.location}</span>` : ''}
                    </div>
                </div>
                <ul class="timeline-achievements">
                    ${exp.achievements.map(a => `
                        <li><span class="achievement-icon">${a.icon}</span>${a.text}</li>
                    `).join('')}
                </ul>
                <div class="timeline-tech">
                    ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render skills
function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    grid.innerHTML = skillsData.map(cat => `
        <div class="skill-category">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.title}</h3>
            ${cat.skills ? `
                <div class="skill-items">
                    ${cat.skills.map(s => `
                        <div class="skill-item">
                            <span class="skill-name">${s.name}</span>
                            <div class="skill-bar"><div class="skill-progress" style="--progress: ${s.progress}%"></div></div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="skill-tags">
                    ${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                </div>
            `}
        </div>
    `).join('');
}

// Render projects
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projectsData.map(proj => `
        <article class="project-card">
            <div class="project-image">
                <div class="project-placeholder">${proj.icon}</div>
                <div class="project-overlay">
                    <a href="${proj.github}" class="project-link" target="_blank" rel="noopener noreferrer">🔗</a>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-description">${proj.description}</p>
                <div class="project-tech">
                    ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${proj.github}" class="btn btn-sm" target="_blank" rel="noopener noreferrer">
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:dsbaneshi@gmail.com?subject=${subject}&body=${body}`;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Floating Particles =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 15;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#22c55e'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (4 + Math.random() * 6) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ===== Scroll Progress Bar =====
function createScrollProgress() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress-bar').style.width = scrollPercent + '%';
    });
}

// ===== Tilt Effect on Cards =====
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-category');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== Magnetic Button Effect =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== Parallax Effect on Hero =====
function initParallax() {
    const hero = document.querySelector('.hero');
    const codeWindow = document.querySelector('.code-window');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            if (codeWindow) {
                codeWindow.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        }
    });
}

// ===== Hide Scroll Indicator on Scroll =====
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ===== Reveal Animation on Scroll =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section-header, .about-content, .about-highlights .highlight, .contact-card, .contact-form');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        revealObserver.observe(el);
    });
}

// ===== Skill Bar Animation =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.getPropertyValue('--progress');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        bar.style.width = '0';
        skillObserver.observe(bar);
    });
}

// ===== Text Reveal Animation for Hero =====
function initHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
}

// ===== Initialize All Animations =====
document.addEventListener('DOMContentLoaded', () => {
    // Existing initializations
    typeRole();
    animateCounters();
    renderTimeline();
    renderSkills();
    renderProjects();

    // New animations (with slight delay for smoother load)
    setTimeout(() => {
        createParticles();
        createScrollProgress();
        initMagneticButtons();
        initParallax();
        initScrollIndicator();
        initScrollReveal();
        initHeroAnimation();
    }, 100);

    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Re-init animations after dynamic content loads
    setTimeout(() => {
        animateSkillBars();
    }, 500);
});

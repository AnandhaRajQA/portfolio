document.addEventListener('DOMContentLoaded', function() {
    // ===== Theme Toggle =====
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ===== Mobile Menu =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ===== Animated Typing Effect =====
    const typingText = document.querySelector('.typing-text');
    const words = ["QA Engineer", "Automation Expert", "Manual Tester"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }
    
    // Start typing effect after 1 second
    setTimeout(type, 1000);

    // ===== Animated Skill Bars =====
    function animateSkillBars() {
        const skills = document.querySelectorAll('.skill');
        
        skills.forEach(skill => {
            const percent = skill.getAttribute('data-percent');
            const progressBar = skill.querySelector('.skill-progress');
            
            progressBar.style.width = `${percent}%`;
        });
    }
    
    // Trigger animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // ===== Project Filtering =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ===== Contact Form Validation =====
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        formStatus.textContent = 'Sending your message...';
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(58, 134, 255, 0.1)';
        formStatus.style.color = 'var(--primary)';
        
        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.background = 'rgba(40, 167, 69, 0.1)';
            formStatus.style.color = 'var(--success)';
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 3000);
        }, 2000);
    });

// ===== Download CV Button =====
// ===== Download CV Button =====
const downloadCvBtn = document.getElementById('download-cv');

downloadCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = 'ANANDHARAJ_QA_CV.pdf';
    link.download = 'ANANDHARAJ_QA_CV.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download confirmation (optional)
    const toast = document.createElement('div');
    toast.textContent = 'Downloading CV...';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '10px 20px';
    toast.style.background = 'var(--primary)';
    toast.style.color = 'white';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
});
    // ===== Particles.js Background =====
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#3a86ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#3a86ff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // ===== Set Current Year in Footer =====
    document.getElementById('year').textContent = new Date().getFullYear();
});

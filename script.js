
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            
            const target = document.querySelector(href);
            if (target) {
                smoothScrollTo(target);
            }
            
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        } else {
            
            window.open(href, '_blank');
        }
    });
});


function smoothScrollTo(target) {
    const navHeight = document.querySelector('nav').offsetHeight; 
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight; 
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
        easing: 'ease-in-out' 
    });
}


function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        smoothScrollTo(aboutSection);
    }
}


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.hero-text .line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = 1;
            line.style.transform = 'translateY(0)';
        }, index * 1000); 
    });

    
    setTimeout(() => {
        document.querySelector('.hero-text p').classList.add('visible');
    }, 2000); 

    
    const rotatingText = document.querySelector('.rotating-text');
    const titles = [
        "Developer",
        "Engineering Manager",
        "Technology Manager",
        "Technology Researcher",
        "Cloud Architect",
        "Database Manager",
        "Analyst"
    ];

    let currentIndex = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 50; 
    let deletingSpeed = 30; 
    let cycleTime = 3000; 

    function type() {
        const currentTitle = titles[currentIndex];
        if (!isDeleting) {
            text = currentTitle.substring(0, text.length + 1);
            rotatingText.textContent = text;
            if (text === currentTitle) {
                setTimeout(() => {
                    isDeleting = true;
                    type(); 
                }, cycleTime / 3); 
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            text = currentTitle.substring(0, text.length - 1);
            rotatingText.textContent = text;
            if (text === '') {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % titles.length;
                setTimeout(type, cycleTime / 3); 
            } else {
                setTimeout(type, deletingSpeed);
            }
        }
    }
    type(); 
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) { 
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            navLinks.style.transform = 'translateY(0)';
            navLinks.style.opacity = '1';
        } else {
            navLinks.style.transform = 'translateY(-10px)';
            navLinks.style.opacity = '0';
        }
    });
}


window.addEventListener('scroll', () => {
    const hero = document.querySelector('#hero');
    if (hero) {
        hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`; 
    }

    
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
            backToTop.style.transform = 'translateY(0)';
            backToTop.style.opacity = '1';
        } else {
            backToTop.classList.remove('visible');
            backToTop.style.transform = 'translateY(10px)';
            backToTop.style.opacity = '0';
        }
    }
});


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out'; // Smoother transition
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
        }
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        const img = card.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
    });
});


particlesJS('particles-js-photo', {
    particles: {
        number: { value: 80 },
        color: { value: '#003399' },
        shape: { type: 'circle' },
        move: { enable: true, speed: 1.5 } 
    }
});


document.getElementById('backToTop').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        easing: 'ease-in-out' 
    });
});


const quotes = require('./quotes.js');

document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');
    if (quoteText) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = randomQuote;
    }
});
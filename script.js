
// Dynamic Typing Animation
const texts = ["Backend Developer", "Python Enthusiast", "API Architect", "Full-Stack Problem Solver"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-animation').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 150);
})();

// Scroll Fade-In Animation
const faders = document.querySelectorAll('.hidden');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('bi-brightness-high-fill');
        themeIcon.classList.add('bi-moon-stars-fill');
    } else {
        themeIcon.classList.remove('bi-moon-stars-fill');
        themeIcon.classList.add('bi-brightness-high-fill');
    }

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Apply saved theme on page load
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('bi-brightness-high-fill');
        themeIcon.classList.add('bi-moon-stars-fill');
    } else {
        themeIcon.classList.remove('bi-moon-stars-fill');
        themeIcon.classList.add('bi-brightness-high-fill');
    }

    // Hide loading animation after page load
    document.getElementById("loading").style.display = "none";
};

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
        } else if (link) {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .home__social', {});
sr.reveal('.home__img, .about__subtitle, .about__text,', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.hobby__data, .contact__input', { interval: 200 });

function toggleVideo() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('about-video');
    const btn = document.getElementById('toggle-video-btn');

    if (videoContainer && video && btn) {
        if (videoContainer.style.display === 'none') {
            videoContainer.style.display = 'block';
            video.play();
            btn.textContent = 'Hide Video';
        } else {
            videoContainer.style.display = 'none';
            video.pause();
            btn.textContent = 'Show Video';
        }
    }
}

// Get the education section and its list items
const educationSection = document.querySelector('.education');
const educationItems = document.querySelectorAll('.education__item');

// Function to show education items one by one
function showEducationItems() {
    educationItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 500); // Delay each item by 500 milliseconds
    });
}

// Automatically show education items when the education section is scrolled into view
function checkScroll() {
    const windowHeight = window.innerHeight;
    const sectionTop = educationSection.getBoundingClientRect().top;

    if (sectionTop < windowHeight * 0.75) {
        showEducationItems();
        window.removeEventListener('scroll', checkScroll); // Remove event listener after showing items
    }
}

// Add event listener to check for scroll and show education items
window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar .bar-fill');
    
    bars.forEach(fill => {
        fill.style.height = '100%'; // Set height to 100% to trigger the animation
    });
});

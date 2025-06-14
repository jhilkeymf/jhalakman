
// ===== Toggle Menu =====
const toggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav_menu');

if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// ===== Remove Menu on Link Click (Mobile) =====
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
);

// ===== Scroll Active Link =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav_menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav_menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

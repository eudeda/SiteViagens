const mobMenuBtn = document.querySelector('#mob-menu-btn');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const mobMenu = document.querySelector('#mob-menu');
const overlay = document.querySelector('#overlay');
const mobMenuLinks = document.querySelectorAll('.mob-menu-link');

const animateMenu = () => {
    line1.classList.toggle('active1');
    line2.classList.toggle('active2');
};

const closeMenu = () => {
    mobMenu.classList.remove('w-3/5');
    mobMenu.classList.add('w-0');
    overlay.classList.add('hidden');
    animateMenu();
};

mobMenuBtn.addEventListener('click', () => {
    animateMenu();
    mobMenu.classList.toggle('w-3/5');
    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', closeMenu);

mobMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
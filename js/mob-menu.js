const mobMenuBtn = document.querySelector('#mob-menu-btn');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

mobMenuBtn.addEventListener('click', () => {
    line1.classList.toggle('active1');
    line2.classList.toggle('active2');
})
const header = document.querySelector('#header');
const menuLogo = document.querySelector('#menu-logo');
const menuLink = document.querySelectorAll('.menu-link');
const menuBtn = document.querySelector('#menu-btn');
const mobMenuLines = document.querySelectorAll('.mob-menu-lines');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if(scrollY > 0) {
        header.classList.add('bg-white', 'shadow-[0_0px_8px_rgba(0,0,0,0.38)]');
        menuLogo.src = 'imgs/logotipo_p.webp'; 
        menuLink.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-black');
        });
        menuBtn.classList.remove('text-white', 'hover:bg-white');
        menuBtn.classList.remove('border-white');
        menuBtn.classList.add('border-black', 'hover:bg-black', 'hover:text-white');
        mobMenuLines.forEach(line => {
            line.classList.remove('bg-white');
            line.classList.add('bg-black');
        })
    } else {
        header.classList.remove('bg-white', 'shadow-[0_0px_8px_rgba(0,0,0,0.38)]');
        menuLogo.src = 'imgs/logotipo.webp';
        menuLink.forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-white');
        })
        menuBtn.classList.add('text-white', 'border-white', 'hover:bg-white');
        menuBtn.classList.remove('border-black', 'hover:bg-black', 'hover:text-white');
        mobMenuLines.forEach(line => {
            line.classList.remove('bg-black');
            line.classList.add('bg-white');
        })
    };
});
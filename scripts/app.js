/* Navbar Menu Link */

const currentPage = window.location.pathname;
const menuLink = document.getElementById('menuLink');

if (currentPage === '/pages/index.html') {
    menuLink.style.display = 'none';
} else {
    menuLink.style.display = 'block';
};

/* Homepage Menu Button */

const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e) => {
    window.location.href = '/pages/menu.html'
});


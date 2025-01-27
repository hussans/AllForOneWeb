/* Navbar Menu Link */

const currentPage = window.location.pathname;
const menuLink = document.getElementById('menuLink');

if (currentPage === '/pages/index.html') {
    menuLink.style.display = 'none';
} else {
    menuLink.style.display = 'block';
};

/* Homepage Menu Button */

const toMenuBtn = document.getElementById('toMenuBtn');

if (toMenuBtn) { 
    toMenuBtn.addEventListener('click', () => {
        window.location.href = '/pages/menu.html';
    });
}

/* Main Menu Buttons */

const sayHelloBtn = document.getElementById('sayHelloBtn');
const askQuestionBtn = document.getElementById('askQuestionBtn');
const addNumbersBtn = document.getElementById('addNumbersBtn');
const madlibBtn = document.getElementById('madlibBtn');
const oddEvenBtn = document.getElementById('oddEvenBtn');
const reverseItBtn = document.getElementById('reverseItBtn');
const reverseNumbersBtn = document.getElementById('reverseNumbersBtn');
const magicEightBallBtn = document.getElementById('magicEightBallBtn');
const guessItBtn = document.getElementById('guessItBtn');
const restaurantPickerBtn = document.getElementById('restaurantPickerBtn');

/* Say Hello Button */

if (sayHelloBtn) { 
    sayHelloBtn.addEventListener('click', () => {
        window.location.href = '/pages/sayhello.html';
    });
}

if (askQuestionBtn) { 
    askQuestionBtn.addEventListener('click', () => {
        window.location.href = '/pages/askquestions.html';
    });
}

if (addNumbersBtn) { 
    addNumbersBtn.addEventListener('click', () => {
        window.location.href = '/pages/addnumbers.html';
    });
}

if (madlibBtn) { 
    madlibBtn.addEventListener('click', () => {
        window.location.href = '#';
    });
}

if (oddEvenBtn) { 
    oddEvenBtn.addEventListener('click', () => {
        window.location.href = '/pages/oddeven.html';
    });
}

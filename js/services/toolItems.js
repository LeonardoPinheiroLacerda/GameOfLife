const BODY = document.body;
const TOOLS = document.querySelector('#tools');

var fadeOut;

BODY.addEventListener('mousemove', () => {
    TOOLS.classList.remove('opacity-0');
    clearTimeout(fadeOut);
    fadeOut = setTimeout(() => {
        TOOLS.classList.add('opacity-0');
    }, 2000);
});
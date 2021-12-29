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

function playPause() {
    const PLAY = document.querySelector("#play");
    const PAUSE = document.querySelector("#pause");
    if (interval == null) {
        interval = setInterval(next, 500);
        PLAY.classList.add("d-none");
        PAUSE.classList.remove("d-none");
    } else {
        clearInterval(interval);
        interval = null;
        PLAY.classList.remove("d-none");
        PAUSE.classList.add("d-none");
    }
}

function next() {
    preCycle();
    cycle();
    update();
}

function reset() {
    const URL = document.URL;
    const PARAMS = new URLSearchParams(URL.split('?')[1]);

    const COLUMNS = PARAMS.get('columns') || 75;
    const ROWS = PARAMS.get('rows') || 35;

    //Recria as celulas
    createCells(COLUMNS, ROWS);
    //Atualiza o que está sendo exibido na tela
    update();
    //Reseta variaveis
    generation = 0;
    population = 0;
}

function fullScreen() {
    const ENTER = document.querySelector("#full-screen-enter");
    const LEAVE = document.querySelector("#full-screen-leave");

    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        ENTER.classList.add("d-none");
        LEAVE.classList.remove("d-none");
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        ENTER.classList.remove("d-none");
        LEAVE.classList.add("d-none");
    }
}
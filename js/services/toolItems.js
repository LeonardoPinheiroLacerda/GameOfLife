const BODY = document.body;
const TOOLS = document.querySelector('#tools');

var fadeOut;

const velocities = [500, 400, 300, 200, 100];
var actualVelocity = 3;

const zoom = [20, 30, 40];
var actualZoom = 1;

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
        interval = setInterval(next, velocities[actualVelocity]);
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

function slower(){
    if(actualVelocity > 0) actualVelocity --;
    updateVelocity();   
}

function faster(){
    if(actualVelocity < velocities.length - 1) actualVelocity ++;
    updateVelocity();
}

function updateVelocity(){
    if (interval != null) {
        clearInterval(interval);
        interval = setInterval(next, velocities[actualVelocity]); 
    }
    showAlert();
}

function showAlert(){
    const TOASTS = document.querySelector('#toasts');
    const BODY = document.querySelector('#toast-body');

    BODY.innerHTML = "Every generation will last <b>" + velocities[actualVelocity] + " ms</b> when using the play option.";
    
    var toast = new bootstrap.Toast(TOASTS);
    toast.show();
}

function zoomin(){
    if(actualZoom < zoom.length -1) actualZoom ++;
    applyZoom();
}

function zoomout(){
    if(actualZoom > 0) actualZoom --;
    applyZoom();
}

function applyZoom(){
    const HTML = document.querySelector('html'); 
    HTML.style.setProperty('--cell-size', zoom[actualZoom] + "px");

    centerScroll();
}
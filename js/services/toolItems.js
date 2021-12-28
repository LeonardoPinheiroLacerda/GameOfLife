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

function playPause(){
    const BTN = document.querySelector("#play-btn");
    const PLAY = document.querySelector("#play");
    const PAUSE = document.querySelector("#pause");
    if(interval == null){
        interval = setInterval(next, 500);
        PLAY.classList.add("d-none");
        PAUSE.classList.remove("d-none");
    }else{
        clearInterval(interval);
        interval = null;
        PLAY.classList.remove("d-none");
        PAUSE.classList.add("d-none");
    }
}

function next(){
    preCycle();
    cycle();
    update();
}

function reset(){
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
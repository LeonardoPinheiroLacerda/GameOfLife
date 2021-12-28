function init(){
    const URL = document.URL;
    const PARAMS = new URLSearchParams(URL.split('?')[1]);

    const ITEMS = PARAMS.get('items') || 100;

    const HTML = document.querySelector('html');

    HTML.style.setProperty('--cells-columns-rows', ITEMS);

    construct(ITEMS);
    createCells(ITEMS);

    const CONTAINER = document.querySelector('.grid-container');
    CONTAINER.scrollTo(CONTAINER.scrollWidth / 2 , CONTAINER.scrollHeight / 2);
}
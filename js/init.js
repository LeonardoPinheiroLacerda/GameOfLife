function init(){
    const URL = document.URL;
    const PARAMS = new URLSearchParams(URL.split('?')[1]);

    const ITEMS = PARAMS.get('items') || 50;
    const SIZE = PARAMS.get('size') || 30;

    
    const HTML = document.querySelector('html');

    HTML.style.setProperty('--cells-columns-rows', ITEMS);
    HTML.style.setProperty('--cell-size', SIZE + "px");

    construct(ITEMS);
    createCells(ITEMS);

    const CONTAINER = document.querySelector('.grid-container');
    
    CONTAINER.scrollTop = (CONTAINER.scrollHeight - document.body.offsetHeight) / 2;
    CONTAINER.scrollLeft = (CONTAINER.scrollWidth - document.body.offsetWidth) / 2;
}
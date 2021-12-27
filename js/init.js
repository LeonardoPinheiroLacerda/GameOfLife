function init(){
    const URL = document.URL;
    const PARAMS = new URLSearchParams(URL.split('?')[1]);

    const ITEMS = PARAMS.get('items') || 40;

    const SIZE = PARAMS.get('size') || 600;

    const HTML = document.querySelector('html');

    HTML.style.setProperty('--cells-columns-rows', ITEMS);
    HTML.style.setProperty('--grid-size', SIZE + 'px');

    construct(ITEMS);
    createCells(ITEMS);
}
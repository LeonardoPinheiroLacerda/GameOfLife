function init(){
    const URL = document.URL;
    const PARAMS = new URLSearchParams(URL.split('?')[1]);

    const COLUMNS = PARAMS.get('columns') || 75;
    const ROWS = PARAMS.get('rows') || 35;
    const SIZE = PARAMS.get('size') || 30;
    
    const HTML = document.querySelector('html');

    HTML.style.setProperty('--cells-columns', COLUMNS);
    HTML.style.setProperty('--cell-size', SIZE + "px");

    construct(COLUMNS, ROWS);
    createCells(COLUMNS, ROWS);

    centerScroll();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {

        const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

        tooltipTriggerEl.addEventListener('shown.bs.tooltip', function () {
            setTimeout(() => {
                tooltip.hide();
            }, 2000);
        });

        return tooltip;
        
    });

    $('[data-bs-toggle="tooltip"]').on('click', function () {
        $(this).tooltip('hide')
    });
}

function centerScroll(){
    const CONTAINER = document.querySelector('.grid-container');
    
    CONTAINER.scrollTop = (CONTAINER.scrollHeight - document.body.offsetHeight) / 2;
    CONTAINER.scrollLeft = (CONTAINER.scrollWidth - document.body.offsetWidth) / 2;
}
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

        var flag = false;
        const hide = () => {
            flag = true;
            setTimeout(() => {
                if(flag){
                    tooltip.hide();
                }
            }, 2000);
        };

        tooltipTriggerEl.addEventListener('shown.bs.tooltip', hide);

        tooltipTriggerEl.addEventListener('mousemove', () => {
            tooltip.show();
            flag = false;
            tooltipTriggerEl.removeEventListener('shown.bs.tooltip', hide);
            tooltipTriggerEl.addEventListener('shown.bs.tooltip', hide);
        });

        return tooltip;
        
    });

}

function centerScroll(){
    const CONTAINER = document.querySelector('.grid-container');
    
    CONTAINER.scrollTop = (CONTAINER.scrollHeight - document.body.offsetHeight) / 2;
    CONTAINER.scrollLeft = (CONTAINER.scrollWidth - document.body.offsetWidth) / 2;
}
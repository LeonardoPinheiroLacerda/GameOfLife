function construct(cells){
    const GRID = document.querySelector('.grid-container');
    const ROWS = cells;
    const COLUMNS = cells;

    for(let i = 0; i < ROWS; i ++){
        for(let j = 0; j < COLUMNS; j ++){

            GRID.append(cell(i, j));

        }
    }

}

function cell(x, y){
    const CELL = document.createElement('div');
    CELL.classList.add('cell');
    CELL.id = x + '-' + y;

    CELL.addEventListener('click', (evt) => {
        const INDEXS = CELL.id.split('-');

        const X = INDEXS[0];
        const Y = INDEXS[1];

        cells[X][Y].toggle();

        update();
    });

    return CELL;
}
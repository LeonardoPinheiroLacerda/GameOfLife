function construct(COLUMNS, ROWS){
    const GRID = document.querySelector('.grid-container');

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

        if(cells[X][Y].state){
            cells[X][Y].off();
            population -= 1;
        }else{
            cells[X][Y].on();
            population += 1;
        }

        update();
    });

    return CELL;
}
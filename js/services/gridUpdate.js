var cells;

function createCells(items){
    const ROWS = items;
    const COLUMNS = items;
    
    cells = [];
    cells.length = ROWS;

    for(let i = 0; i < ROWS ; i ++){
        cells[i] = [];
        cells[i].lenght = COLUMNS;

        for(let j = 0; j < COLUMNS; j ++){
            cells[i][j] = new Cell(i + ":" + j);
        }

    }

}

function update(){
    for(let i = 0; i < cells.length; i ++){
        for(let j = 0; j < cells[i].length; j ++){

            const ID = `${i}-${j}`;

            if(cells[i][j].state == true){
                document.getElementById(ID).classList.add('active');
            }else{
                document.getElementById(ID).classList.remove('active');
            }

        }
    }
}
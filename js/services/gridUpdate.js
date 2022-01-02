var cells;

function createCells(COLUMNS, ROWS){  
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

    population = 0;
    const ROWS = cells.length;
    for(let i = 0; i < ROWS; i ++){
        const COLUMNS = cells[i].length
        for(let j = 0; j < COLUMNS; j ++){

            updateCells(i, j);

        }
    }
    updateInfo();
}

async function updateCells(x, y){
    const ID = `${x}-${y}`;

    if(cells[x][y].state == true){
        document.getElementById(ID).classList.add('active');
        population += 1;
    }else{
        document.getElementById(ID).classList.remove('active');
    }
}

function updateInfo(){
    const POPULATION = document.querySelector('#population');
    const GENERATION = document.querySelector('#generation');

    POPULATION.innerHTML = population;
    GENERATION.innerHTML = generation;
}
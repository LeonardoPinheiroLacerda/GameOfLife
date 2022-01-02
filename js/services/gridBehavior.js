var generation = 0;
var population = 0;

var toDie = [];
var toLive = [];

var interval = null;

function preCycle(){
    generation += 1;

    const ROWS = cells.length;
    for(let i = 0; i < ROWS; i ++){

        const COLUMNS = cells[i].length;

        for(let j = 0; j < COLUMNS; j ++){
            process(i, j);
        }
    }

}

async function process(x, y){
    const NEIGHBOURS = findNeighbours(x, y);

    const ALIVE = cells[x][y].state;

    if(ALIVE && NEIGHBOURS < 2 || ALIVE && NEIGHBOURS > 3){
        toDie.push(cells[x][y]);
    }else if(!ALIVE && NEIGHBOURS == 3){
        toLive.push(cells[x][y]);
    }
}

function cycle(){
    toLive.forEach(cell => cell.on());
    toDie.forEach(cell => cell.off());
    
    toLive = [];
    toDie = [];
}

function findNeighbours(x, y){
    let count = 0;

    count += isAlive(x - 1, y - 1);
    count += isAlive(x - 1, y);
    count += isAlive(x - 1, y + 1);
    count += isAlive(x, y - 1);
    count += isAlive(x, y + 1);
    count += isAlive(x + 1, y - 1);
    count += isAlive(x + 1, y);
    count += isAlive(x + 1, y + 1);

    return count;
}

function isAlive(x, y){
    try{
        return 0 + cells[x][y].state;        
    }catch(e){
       return 0;
    }
}
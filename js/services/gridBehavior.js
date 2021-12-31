var generation = 0;
var population = 0;

var toDie = [];
var toLive = [];

var interval = null;

function preCycle(){
    generation += 1;
    population = 0;

    const ROWS = cells.length;
    for(let i = 0; i < ROWS; i ++){

        const COLUMNS = cells[i].length;

        for(let j = 0; j < COLUMNS; j ++){

            const NEIGHBOURS = findNeighbours(i, j);

            const ALIVE = cells[i][j].state;

            population = ALIVE ? population += 1 : population;

            if(ALIVE && NEIGHBOURS < 2 || ALIVE && NEIGHBOURS > 3){
                toDie.push(cells[i][j]);
            }else if(!ALIVE && NEIGHBOURS == 3){
                toLive.push(cells[i][j]);
            }
        }
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
        if(cells[x][y].state){
            return 1;
        }
    }catch(e){
       
    }
    return 0;
}
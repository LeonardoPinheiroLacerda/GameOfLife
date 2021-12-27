class Cell {

    constructor(location){
        this.state = false;
        this.location = location
    }

    toggle(){
        this.state = !this.state;
    }

    on(){
        this.state = true;
    }

    off(){
        this.state = false;
    }
}
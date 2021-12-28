const CONTAINER = document.querySelector('.grid-container');

var pos = {
    x : 0,
    y : 0,
    left : 0,
    top : 0
}

CONTAINER.addEventListener('mousedown', (evt) => {
    pos.x = evt.clientX;
    pos.y = evt.clientY;

    pos.left = CONTAINER.scrollLeft;
    pos.top = CONTAINER.scrollTop;

    CONTAINER.addEventListener('mousemove', scroll);
});

CONTAINER.addEventListener('mouseup', (evt) => {
    CONTAINER.removeEventListener('mousemove', scroll);
})

function scroll(evt){
    const difX = evt.clientX - pos.x;
    const difY = evt.clientY - pos.y;

    CONTAINER.scrollTop = pos.top - difY;
    CONTAINER.scrollLeft = pos.left - difX;
}
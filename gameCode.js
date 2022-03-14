const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
//canvas dimensions
canvas.width = 1000;
canvas.height = 650;

//global variables
const cellSize = 50;
const baseDamage = 10;
const basePierce = 1;
const baseRange = 100;
const gameGrid = [];
const towers = [];

let money = 300;

const mouse = {
    x:10,
    y:10,
    width: 0.1,
    height: 0.1,
}
let canvasPosition = canvas.getBoundingClientRect();

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
});
canvas.addEventListener('mouseleave', function(){
    mouse.y = undefined;
    mouse.x = undefined;
})

const upgradesBar = {
    width: canvas.width - 2 * cellSize,
    height: cellSize * 2,
}
const towersBar = {
    width: cellSize * 2,
    height: canvas.height,
}

class Cell {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
        if (mouse.x && mouse.y && collision(this, mouse)){
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        
    }
}
function createGrid(){
    for(let y = 0; y < canvas.height - 2 * cellSize; y += cellSize){
        for (let x = 0; x < canvas.width - 2 * cellSize; x += cellSize){
            gameGrid.push(new Cell(x,y));
        }
    }
}
createGrid();
function handleGameGrid(){
    for(let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}

canvas.addEventListener('click', function(){
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    if (gridPositionY < cellSize) return;
    towers.push(new tower(gridPositionX, gridPositionY));
})

function handleTowers(){
    for (let i = 0; i < towers.length; i++){
        towers[i].draw();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,550,upgradesBar.width, upgradesBar.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(900,0,towersBar.width, towersBar.height);
    handleGameGrid();
    handleTowers();
    requestAnimationFrame(animate);
}
animate();

function collision(first, second){
    if (        !(first.x > second.x + second.width ||
                 first.x + first.width < second.x ||
                 first.y > second.y + second.height ||
                 first.y + first.height < second.y)
    ){
        return true;
    };
}

class tower {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.shooting = false;
        this.range = baseRange;
        this.damage = baseDamage;
        this.pierce = basePierce;
        this.projectiles = [];
        this.timer = 0;
        this.health = 100;
        this.cost = 150;
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
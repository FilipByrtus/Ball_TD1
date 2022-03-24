const turretModel = [];
turretModel [0] = '/images/towers/mage.png';
turretModel [1] = '/images/towers/canon.png';
class tower {
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.radius = cellSize/2;
        this.shooting = false;
        this.range = baseRange;
        this.damage = baseDamage;
        this.pierce = basePierce;
        this.projectiles = [];
        this.timer = 0;
        this.health = 100;
        this.cost = 150;
        this.type = 1;
        this.model = new Image();
        this.model.src = turretModel [this.type];
    }
    draw(){
        ctx.drawImage(this.model, this.x, this.y,cellSize,cellSize);
    }
}
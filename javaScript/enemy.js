const ballImage = [];
ballImage [0] = "/images/balls/redBall.png";
ballImage [1] = "/images/balls/blueBall.png";
ballImage [2] = "/images/balls/greenBall.png";
ballImage [3] = "/images/balls/yellowBall.png";
ballImage [4] = "/images/balls/pinkBall.png";
ballImage [5] = "/images/balls/leadBall.png";
ballImage [6] = "/images/balls/gayBall.png";
class enemy{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speed;
        this.health;
        this.radius = 12;
        this.layer = 6;
        this.color = new Image();
        this.color.src = ballImage[this.layer];
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
       // ctx.fill();
        ctx.drawImage(this.color,this.x - this.radius,this.y - this.radius,this.radius*2,this.radius*2);
    }
}
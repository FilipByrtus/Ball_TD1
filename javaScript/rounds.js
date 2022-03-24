function waveOfBalls(ammount, health, spacing){
    for(let i = 0; i < ammount; i++){
        enemys.push(new enemy(startPointX, startPointY, health));
    }
}
// Any global variables can be defined up here
let player;
let obstacles = [];
let obstacleCD = 0;
let WORLD_GRAVITY = 0.1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    player = new Player(width / 2, height / 2);
}

function draw() {
    // Update
    player.update();
    obstacleCD--;
    if (obstacleCD <= 0) {
        obstacles.push(new Obstacle(random(0, width), random(0, -30), random(3, 5)));
        obstacleCD = 5;
    }
    for (let i = obstacles.length - 1; i >= 0; i--) {
        if (obstacles[i].x < 0 || obstacles[i].x > width || obstacles[i].y > height) {
            obstacles.splice(i, 1);
        } else {
            obstacles[i].update();
        }
    }
    // Render
    background(0, 0, 0);
    player.render();
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].render();
    }
}

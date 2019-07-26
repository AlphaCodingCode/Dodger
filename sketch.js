// Any global variables can be defined up here
let player;
let obstacles = [];
let obstacleCD = 0;
let WORLD_GRAVITY = 0.1;
let GAMEOVER = false;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    player = new Player(width / 2, height / 2);
}

function draw() {
    if (!GAMEOVER) {
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
                obstacles[i].checkCollision(player.x, player.y, 15);
                if (obstacles[i].collided) {
                    player.doDmg(1);
                    obstacles.splice(i, 1);
                }
            }
        }
    // Render
        background(0, 0, 0);
        player.render();
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].render();
        }
    } else {
        fill(255, 255, 255);
        textSize(50);
        textAlign(CENTER);
        text("Game over\nClick to play again", width / 2, height / 2);
    }
}

function mouseClicked() {
    if (GAMEOVER) {
        player = new Player(width / 2, height / 2);
        obstacles = [];
        obstacleCD = 0;
        GAMEOVER = false;
    }
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 15;
        this.hp = 3;
    }

    doDmg(dmg) {
        this.hp = constrain(this.hp - dmg, 0, 1000);
        if (this.hp == 0) {
            GAMEOVER = true;
        }
    }

    update() {
        // update position based on key presses
        if (keys[UP_ARROW]) {
            this.y = constrain(this.y - this.speed, 0, height);
        }
        if (keys[DOWN_ARROW]) {
            this.y = constrain(this.y + this.speed, 0, height);
        }
        if (keys[LEFT_ARROW]) {
            this.x = constrain(this.x - this.speed, 0, width);
        }
        if (keys[RIGHT_ARROW]) {
            this.x = constrain(this.x + this.speed, 0, width);
        }
    }

    render() {
        fill(200, 50, 50);
        ellipse(this.x, this.y, 30, 30);
    }
}

class Obstacle {
    constructor(x, y, mass) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.velocity = {x : random(-4, 4), y : random(0, 1)};
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += (WORLD_GRAVITY * this.mass);
    }

    render() {
        fill(0, 200, 0);
        ellipse(this.x, this.y, this.mass * 10, this.mass * 10);
    }
}

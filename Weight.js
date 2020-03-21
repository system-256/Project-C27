class Weight {
    constructor() {
        this.body = Bodies.circle(200, 200, 50);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x, pos.y, 50, 50);
        push();
        pop();
    }
}
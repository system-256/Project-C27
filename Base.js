class Base {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, 200, 50, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, 200, 50);
        push();
        pop();
    }
}
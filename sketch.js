//Press F to lock the ball to the mouse
//Press Enter to stablize the ball


const { Bodies, World, Engine, Constraint } = Matter;
var engine, world;
var string, weight, base;

function setup() {
    createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;

    weight = new Weight();
    base = new Base(400, 25);
    var options = {
        'bodyA': weight.body,
        'bodyB': base.body,
        'stiffness': 0.5,
        'length': 375
    }
    string = Constraint.create(options);
    World.add(world, string);
}

function draw() {
    background("black");
    Engine.update(engine);
    if (keyDown("f")) {
        weight.body.position.y = mouseY;
        weight.body.position.x = mouseX;
    } else if (keyCode === ENTER) {
        weight.body.position.x = 400;
    }
    weight.display();
    base.display();
    stroke("white");
    strokeWeight(10);
    line(base.body.position.x, base.body.position.y, weight.body.position.x, weight.body.position.y);
    text("Press F to lock the ball to mouse", 500, 25);
    text("Press Enter to stablize the ball", 500, 50);
    //console.log(weight.body.position.y)
    drawSprites();
}
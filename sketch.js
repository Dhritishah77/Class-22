const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world, object
function setup(){
    createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    var b_options = {
        restitution : 0.5
    }

    ball = Bodies.circle(200,100,20, b_options);
    World.add(world, ball)

    var options = {
        isStatic : true
    }

    ground = Bodies.rectangle(200,400,400,20, options);
    World.add(world, ground)
    console.log(object);
}
function draw(){
    background(0);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    Engine.update(engine);
    //rect(200,200,50,50)
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipse(ball.position.x, ball.position.y, 20)
}
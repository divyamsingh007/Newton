const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1355, 630);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth / 2, 650, windowWidth, 50);
  roof = new Ground(700, 40, 500, 20);
  bob1 = new Bob(495, 500, 48);
  bob2 = new Bob(555, 500, 48);
  bob3 = new Bob(605, 490, 48);
  bob4 = new Bob(655, 480, 48);
  bob5 = new Bob(705, 470, 48);

  rope1 = new Rope(bob1.body, roof.body, -100 * 2, 10);
  rope2 = new Rope(bob2.body, roof.body, -50 * 2, 10);
  rope3 = new Rope(bob3.body, roof.body, -0 * 2, 10);
  rope4 = new Rope(bob4.body, roof.body, 50 * 2, 10);
  rope5 = new Rope(bob5.body, roof.body, 100 * 2, 10);
}

function draw() {
  background("#7878");
  Engine.update(engine);

  ground.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW) ) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x:-120,
      y:-50,
    });
  }
}

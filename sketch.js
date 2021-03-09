
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3, ground, paper


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(20,200,10,10);
	box2 = new Box(20,210,10,10);
	box3 = new Box(20,230,10,10);
	paper = new Paper(20,250,50,50);
	ground = new Ground(10,200,100,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();  
  drawSprites();
 
}




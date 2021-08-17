
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,650,1600,30)
	box= new Box(1200,605,200,50)
	box2= new Box(1100,530,50,200)
	box3= new Box(1300,530,50,200)
	paper = new Paper(100,350,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  box.display()
  box2.display()
  box3.display()
  paper.display()
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-105})
	}
}




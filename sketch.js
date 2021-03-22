
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;

var dustbin,binImg;


function preload()
{
	binImg = loadImage("images/dustbin.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 20);
  bin = createSprite(610,600,100,20);
    bin.addImage(binImg);
    bin.scale = 0.20;

  ground = new Ground(600, 680, 1200, 20);
  
  leftSide = new Dustbin(555, 620,10, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(665, 620, 10, 100);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background('white');
  
  
  Engine.update(engine);

  paper.display();

  ground.display();
  

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:0, y: -60})
  }
  if(keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:0, y: 60})
  }
  if(keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:-60, y: 0})
  }
  if(keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y: 0})
  }
}


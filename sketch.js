
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObject, paper;	
var bin, binImg;
var world;

function preload(){
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
		element: document.body, 
		engine: engine,
		options: {
		width: 0,
		height:0, 
		wireframes: false
		}
	});
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(400, 300, 55, 40);

	bin = createSprite(1200, 535, 240, 240);
	bin.addImage("bin", binImg);
	bin.scale = 0.85;

	
	Engine.run(engine);
	Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 
  groundObject.display();
  paper.display();
  dustbinObj.display();
 
	dustbinObj.depth = paper.depth;
	paper.depth = paper.depth+1;

  keyPressed();

	drawSprites();
}

function keyPressed(){
	if(keyDown("up")){
		Body.setVelocity( paper.body, {x: 15, y: -15});
	
	}
}


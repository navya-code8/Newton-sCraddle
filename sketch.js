
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var gameState = "play"

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (400,50, 720,50);
	bob1 = new Bob(200,600);
	bob2 = new Bob(300, 600);
	bob3 = new Bob(400,600);
	bob4 = new Bob(500,600);
	bob5 = new Bob(600, 600);

	rope1 = new Rope(bob1.body, roof.body, -100*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -100,0);
	rope3 = new Rope(bob3.body, roof.body,0,0);
	rope4 = new Rope(bob4.body, roof.body,100,0);
	rope5 = new Rope(bob5.body, roof.body, 100*2,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("silver");

  upArrowPressed()
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
  textSize(20)
  fill("pink")
  text("Drag the bob to give it some force. Press SPACE bar to try again.",120,60 )
}

function mouseDragged(){
	if (gameState === "play"){
	   Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
	}	

}

function mouseReleased(){

	gameState = "end"

}

function keyPressed(){

	if (keyCode === 32 ){
	  bob1.body.speed = 0;
 
	  console.log("display")
  
	 // Matter.Body.setPosition(bob1.body, {x:-100*2, y:0})
	  
	  
	  rope1.attach(bob1.body);
	  gameState = "play";
	  
  
	  
	  
	}
  
  }


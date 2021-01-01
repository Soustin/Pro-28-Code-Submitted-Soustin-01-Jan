
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700) 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	juno = new Juno(200, 560, 250, 250);
	tree = new Tree(800, 500, 300, 300);
  stone = new Stone(60, 145, 60, 60);
  stone2 = new Stone(70, 160, 80, 80);
	mango1 = new Mango(850, 450, 40, 40);
	mango2 = new Mango(750, 450, 40, 40);
	mango3 = new Mango(800, 450, 40, 40);
	mango4 = new Mango(770, 400, 40, 40);
	mango5 = new Mango(700, 460, 40, 40);
	mango6 = new Mango(900, 470, 40, 40);
	mango7 = new Mango(770, 480, 40, 40);
	mango8 = new Mango(830, 390, 40, 40);
	mango9 = new Mango(880, 420, 40, 40);
	slingshot = new Slingshot(stone.body, {x: 130, y: 455});
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  Engine.update(engine);

  Matter.Body.debug = stone.body;

  //mango1.depth = tree.depth;
  //mango1.depth = mango1.depth+1;

  juno.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  stone2.display();
  slingshot.display();

  Matter.Body.setStatic(stone2.body, true);

  detectcollision(stone,mango1);
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);

  drawSprites();
  detectcollision();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
  }

  function detectcollision(lstone, lmango){
    lmango = new Mango;
    lstone = new Stone;
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
      if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body, false);
      }
  }
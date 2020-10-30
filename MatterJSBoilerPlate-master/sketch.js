
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var mango1;
var ground;
var boy, boy_image;
var chain;
var stone;

function preload()
{ 
   boy_image = loadImage("Plucking mangoes/boy.png");	
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(150,620,20,20);
	boy.addImage(boy_image);
	boy.scale = 0.1;

	//Create the Bodies Here.
	ground = new Ground(400,690,2000,20);
	
	invisible = new Ground(645,510,350,10);

	tree = new Tree(500,340,50,50);

	mango1 = new Mango(550,450,20,20);
	mango2 = new Mango(600,410,20,20);
	mango3 = new Mango(690,400,20,20);
	mango4 = new Mango(740,450,20,40);

	stone = new Stone(150,200,2,20);

	chain = new Chain(stone.body, {x: 100, y:570});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  tree.display();

  ground.display();
  
  chain.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectCollision();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function detectCollision(){

	var pos = stone.body.position;
	var posM = mango1.body.position;
	console.log(pos);
	
	if(pos.y === 600 && pos.x === 800){
		Matter.Body.setStatic(invisible.body, false);

		
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 100,y: 570});
		chain.attach(stone.body);
	}
}





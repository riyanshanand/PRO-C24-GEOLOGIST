
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1590,20);
	rubber = new Rubber(720,290,50);
	rubber1 = new Rubber(80,290,50);
    stone = new Stone(400,500,80,80);
	hammer = new Hammer(400,250,175,50);
	sand = new Sand(150,500,8,8);
	sand1 = new Sand(160,500,8,8);
	sand2 = new Sand(170,500,8,8);
	sand3 = new Sand(200,500,8,8);
	sand4 = new Sand(210,500,8,8);
	sand5 = new Sand(220,500,8,8);
	sand6 = new Sand(280,500,8,8);
	sand7 = new Sand(470,500,8,8);
	sand8 = new Sand(480,500,8,8);
	sand9 = new Sand(490,500,8,8);
	sand10 = new Sand(520,500,8,8);
	sand11 = new Sand(530,500,8,8);
	sand12 = new Sand(540,500,8,8);
	sand13 = new Sand(600,500,8,8);
	iron = new Iron(80,500,80,80);

















	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  rubber.display();
  rubber1.display();
  stone.display();
  hammer.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  iron.display();















  
  drawSprites();
 
}




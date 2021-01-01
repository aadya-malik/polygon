
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobObject6,bobObject7,bobObject8,bobObject9;
var bobObject10,bobObject11,bobObject12,bobObject13,bobObject14;
var bobObject15,bobObject16,bobObject17,bobObject18;
var rope;
var polygon
var polygonImg

function preload()
{
	polygonImg= loadImage("polygon.png");
}

function setup() {
	createCanvas(2000, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1= new Ground(600,350,400,20);
	bobObject1= new Boxes(500,300);
	bobObject2= new Boxes(550,300);
	bobObject3=new Boxes(600,300);
	bobObject4= new Boxes(650,300);
	bobObject5 = new Boxes(700,300);
bobObject6= new Boxes(600,200);
	bobObject7= new Boxes(550,250);
	bobObject8=new Boxes(600,250);
	bobObject9= new Boxes(650,250);
	roof2= new Ground(1100,850,400,20);
	bobObject10= new Boxes(1000,800);
	bobObject11= new Boxes(1050,800);
	bobObject12=new Boxes(1100,800);
	bobObject13= new Boxes(1150,800);
	bobObject14 = new Boxes(1200,800);
bobObject15= new Boxes(1100,700);
	bobObject16= new Boxes(1050,750);
	bobObject17=new Boxes(1100,750);
	bobObject18= new Boxes(1150,750);
	polygon = Bodies.circle(200,500,20,{density:3,friction:0.3,restitution:0.8});
    World.add(world,polygon);
	//bobObject10 = new Boxes(500,250);
//polygon= new Polygon(300,300,90);
	rope= new Slingshot(polygon,{x:200,y:500});
	//rope2= new Rope(bobObject2.body,roof1.body,-50,0);
	//rope3= new Rope(bobObject3.body,roof1.body,0,0);
	//rope4= new Rope(bobObject4.body,roof1.body,50,0);
	//rope5= new Rope(bobObject5.body,roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  
  background("skyblue");
  roof1.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 
 bobObject7.display();
 bobObject8.display();
 bobObject9.display();
bobObject6.display();
 //rope1.display()
 //rope2.display()
 //rope3.display()
// rope4.display()
 //rope5.display()
 roof2.display();
 bobObject10.display();
 bobObject11.display();
 bobObject12.display();
 bobObject13.display();
 bobObject14.display();
 
 bobObject15.display();
 bobObject16.display();
 bobObject17.display();
bobObject18.display();
rope.display();
//polygon.display();

push ()
imageMode (CENTER);
image (polygonImg,polygon.position.x,polygon.position.y,80,80);
pop ()
}



function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   rope.fly();
}

function keyPressed(){
   if(keyCode === 32){
	   Matter.Body.setPosition(polygon,{x:100,y:200});
	   rope.attach(polygon);
   }
   }
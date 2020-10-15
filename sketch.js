const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4, pig1,pig2;
var log1,log2;
var bird;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(800,700,100,100);
    box2 = new Box(600,700,100,100);
    pig1 = new Pig(700,750);
    log1 = new Log(700,650,400,20,PI);
    box3 = new Box(800,600,100,100);
    box4 = new Box(600,600,100,100);
    pig2 = new Pig(700,570);
    log2 = new Log(700,450,400,20,PI);   
    box5 = new Box(700,449,100,100);
    log3 = new Log(615,440,215,20,-PI/6);  
    log4 = new Log(785,440,215,20,PI/6);   
    bird = new Bird(mouseX,mouseY,50,50);
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();    
    box4.display();    
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}
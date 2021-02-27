const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    sto = new Stone(700,320,70,70);
   // box = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
    Rub = new Rubber(810,350);

    
    
    ham = new Hammer(100,300);


}

function draw(){
    background("blue");
    Engine.update(engine);
    sto.display();

	//box.display();
    ground.display();
   
    Rub.display();

   
    ham.display();
}
const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World =Matter.World





var canvas, backgroundImage;


var drops,batman,thunderbolt,walkingFrame



function preload(){
    
 
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine=Engine.create()
  world= engine.world
 umbrella =new Umbrella(displayWidth/2,displayHeight/2)
}

function draw(){
    background(0)
    Engine.update(engine)
    umbrella.display()
}   


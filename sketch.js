const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

function preload(){

}
function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    testBL=new blackBalloon(300,0,50);

}
function draw(){
    background("pink");
    Engine.update(engine);
    

    drawWprites();
}
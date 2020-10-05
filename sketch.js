const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight = 300;
var division;
var particles = [];
var plinkos = [];
var divisions = [];
var ground ;
var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2 ,10,divisionHeight));
  }
  for (var j = 40; j<= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }
 
  for (var j = 40; j<= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }
  for (var j = 40; j<= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  }
 
  for (var j = 40; j<= width - 20; j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  }
 
  ground = new Ground (240,795,480,10)
}

function draw() {
  background(0); 
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  Engine.update(engine);
for (var k = 0; k < divisions.length ; k++){
  divisions[k].display();
}
for (var j = 0; j < particles.length; j++){
  particles[j].display();
}
for (var p = 0; p < plinkos.length; p++){
  plinkos[p].display();
}
  ground.display();
  drawSprites();
}
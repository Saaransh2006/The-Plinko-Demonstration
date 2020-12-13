//Creating the arrays.
var particles = [];
var plinkos = [];
var divisions = [];
//Declaring the variables.
var divisionHeight = 300;
var ground,stage,bgImg;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Funtion for preloading.
function preload() {
  //Loading image in the variable bgImg.
  bgImg = loadImage("bg.png");
}

//Function for setup.
function setup() {
  //Creating the canvas area.
  createCanvas(480,650);
  stage = 1;

  //Creating an engine in the variable 'engine'.
  engine = Engine.create();
  //Storing engine's world in the variable world.
  world = engine.world;

  //Creating the bodies.
  ground = new Ground(240,645,480,10);
  for(var i = 5; i <= width; i = i + 78.5) {
    divisions.push(new Division(i, 500, 8, divisionHeight));
  }
  for(var k = 40; k <= width; k = k + 50) {
    plinkos.push(new Plinko (k,75));
  }
  for(var k = 15; k <= width; k = k + 50) {
    plinkos.push(new Plinko (k,125));
  }
  for(var k = 40; k <= width; k = k + 50) {
    plinkos.push(new Plinko (k,175));
  }
  for(var k = 15; k <= width; k = k + 50) {
    plinkos.push(new Plinko (k,225));
  }

  //Running the previously created engine.
	Engine.run(engine);
}

//Draw loop function.
function draw() { 
  //Setting rectMode as CENTER.
  rectMode(CENTER);
  //Setting ellipseMode as RADIUS.
  ellipseMode(RADIUS);

  if(stage === 1) {
    //Setting bgImg as the background.
    background(bgImg);

    fill("white");
    textSize(25);
    textFont("courier new");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Hello and Welcome to",235,40);
    text("the virtual world of games!!",235,72);
    text("I am Mr.Computer and today we",235,104);
    text("will see a visual demostration",235,136);
    text("of a very famous game, 'plinko'",240,168);
    text("So, let's get started. Press",235,200);
    text("Enter to start the visual",235,232);
    text("demonstration.",235,264);

    //Changing stage's value to 2 when Enter key is pressed.
    if(keyDown(ENTER)) {
      stage = 2;
    }
  }

  else if(stage === 2) {
    //Setting background color as black.
    background("black"); 

    //Creating a new Particle after every 40 frames.
    if(frameCount % 40 === 0) {
      particles.push(new Particle(random(230,250),10,6));
    }

    //Displaying the bodies.
    ground.display();
    for(var i = 0; i < divisions.length; i++) {
      divisions[i].display();
    }
    for(var k = 0; k < plinkos.length; k++) {
      plinkos[k].display();
    }
    for(var j = 0; j < particles.length; j++) {
      particles[j].display();
    }
  }
}
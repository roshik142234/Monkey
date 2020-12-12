var bI;
var oI;
var oG;
var back, backI;
var score;
var ground
var target
var grav
function preload() {
  
  bI = loadImage("banana.png");
  oI = loadImage("stone.png");
  
  mRun = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backI = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(800, 700);
  
  grav = 5;
  
  ground = createSprite(400, 620, 800, 10);
  
  back = createSprite(300, 350, 10, 200);
  back.addAnimation("background", backI);
 
  m = createSprite(150, 600, 10, 10 );
  m.addAnimation("run", mRun);
  m.scale = 0.15;
 
  
  target = createSprite(400, 300, 800, 10);
  target.visible = false;
  
  
  score = 0;
  
  bG = Group();
  
}


function draw() {


  m.depth = m.depth+1;
  
  
  
  
  background("white");
  
 
  
  ground.visible = false;
  
  back.velocityX = -4;
  
  if(keyDown("space")) {
    m.velocity.y = -10;
  }
  

  
  // This doesn't work so I ahd to comment it out
  // if (bG.isTouching(m)) {
  //     score = score + 2
  // }
  
  
  
  switch(score){
    case 10: m.scale = 0.17; break;
    case 20: m.scale = 0.19; break;
    case 30: m.scale = 0.21; break;
    case 40: m.scale = 0.23; break;
    default: break;
  }
  
  
  m.collide(ground);
  m.collide(target, fall);
  m.overlap(bG, destroyB);
  
  
  bananaS();
  stoneS();
  
  
  drawSprites();
  
  text("Score: "+score, 600, 200);
  
}

function bananaS() {
  
  r = Math.round(random(500, 400 ))
  if (frameCount%100===0) {
    b = createSprite(800, r, 10, 10);  
    b.addImage("b", bI);
    b.scale = 0.1;   
    bG.add(b);
    b.setVelocity(-6, 0);
    b.lifetime = 100;

  } 
}

function stoneS() {
  if(frameCount%200===0) {
    rock = createSprite(800, 580, 10, 10);
    rock.addImage("stone", oI);
    rock.setVelocity(-5, 0)
    rock.scale = 0.3;
    
  }
}

function destroyB() {
  b.remove();
  score = score + 2;
}

function fall() {
  
  m.velocity.y = 5
}
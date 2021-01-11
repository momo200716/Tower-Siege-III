const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine , world;
var score = 0;
/*var me = []
me.push("two", "three", "four")
console.log(me)*/

var box1;
function setup() {
  createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(625,400,250,10);
  ground1 = new Ground(900, 260, 200, 10);
  box1 = new Box(650,380,30,30);
  box2 = new Box(682,380,30,30);
  box3 = new Box(714,380,30,30);
  box4 = new Box(628,380,30,30);
  box5 = new Box(596,380,30,30);
  box6 = new Box(628,355,30,30);
  box7 = new Box(682,355,30,30);
  box8 = new Box(650,355,30,30);
  box9 = new Box(564,380,30,30);
  box10 = new Box(596,355,30,30);
  box11 = new Box(564,355,30,30);
  box12 = new Box(534,380,30,30);
  box13 = new Box(596,320,30,30);
  box14 = new Box(650,320,30,30);
  box15 = new Box(628,320,30,30);
  box16 = new Box(628,310,30,30);
  box17 = new Box(860,240,30,30);
  box18 = new Box(830,240,30,30);
  box19 = new Box(890,240,30,30);
  box20 = new Box(920,240,30,30);
  box21 = new Box(950,240,30,30);
  box22 = new Box(860,220,30,30);
  box23 = new Box(920,220,30,30);
  box24 = new Box(890,220,30,30);
  box25 = new Box(890,200,30,30);

  ball = new Ball(200,300, 20);

  slingshot = new SlingShot(ball.body,{x:150, y:280});



}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box15.display();
  box14.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();



  ground.display();
  ground1.display();

  ball.display();

  slingshot.display();

  drawSprites();

 textSize(20)
  fill("black");
  text("Score:"+score,800,50);
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 && ball.body.speed<1){
     slingshot.attach(ball.body);
    //Matter.Body.setPosition(ball.body, {x:200 , y:50});

  }
}

async function gettime(){
  var data = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  var datajson = await data.json();
  console.log(datajson);
  var dtime = datajson.datetime;
  console.log(dtime);
  var time = dtime.slice(11,13);
  console.log(time);

  if(time > 06 && time < 17){
    background("black");
  }
  else{
    background(0,0,0);
  }

}





const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var backgrond;
var experimento0;
var despensaprian;
var despensasparavotantes;
var leonjuerte;
var despensadesoporte;
var despensadesoporte2;
var experimento1;
var soporte;
var experimento2;
var experimento3;
var experimento4;
var experimento5;
var atril;
var bandaPresidencial;
var peniabebe;

function preload() {
 backgrond=loadImage("sprites/bg.png");
}

function setup(){
   var canvas = createCanvas(1200,600);  
   engine = Engine.create();
   world = engine.world;
  pizou=new Flor(600,590,1200,20);
  experimento0=new Pejecerdos (600,550);
  despensaprian=new DespensasdelPAN (700,550,70,70);
  despensasparavotantes=new DespensasdelPAN(500,550,70,70)
  leonjuerte=new PonteNuevoPonteLeon (600,500,300,PI/2);
  despensadesoporte=new DespensasdelPAN(700,470,70,70);
  experimento1=new Pejecerdos (600,500)
  soporte=new DespensasdelPAN(500,470,70,70);
  experimento2=new Pejecerdos (500,450);
  experimento3=new Pejecerdos (700,450);
  experimento4=new Pejecerdos (470,550);
  experimento5=new Pejecerdos (730,550);
  atril=new Flor(100,550,250,100);
  peniabebe= new PartidoVerde(100,50);
  bandaPresidencial= new BandaPresidencial(peniabebe.body,{
    x:120,y:325
  });
  
  
}

function draw(){
  Engine.update(engine);
  background(backgrond);
  pizou.display();
 experimento0.display();
 despensaprian.display();
 despensasparavotantes.display();
 leonjuerte.display();
  despensadesoporte.display();
  experimento1.display();
  soporte.display();
  experimento2.display();
  experimento3.display();
  experimento4.display();
  experimento5.display();
  atril.display();
  bandaPresidencial.display();
  peniabebe.display();
}
function mouseDragged(){
  Matter.Body.setPosition(peniabebe.body,{
    x:mouseX,
    y:mouseY
  }          ) 

}
function mouseReleased(){
  bandaPresidencial.fly();
}
function keyPressed(){
  if(keyCode===32){
    bandaPresidencial.boomerang(
    peniabebe.body)
  }
}
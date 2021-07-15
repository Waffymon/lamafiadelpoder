class PartidoVerde extends DinosauriosdelPRI{
  constructor(x,y){
    super(x,y,50,50)
    this.image=loadImage("sprites/bird.png");
    this.ezmoque=loadImage("sprites/smoke.png")
this.trayectoria=[];
  }
  display(){
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>120){
      var pos=[this.body.position.x,this.body.position.y]
      this.trayectoria.push(pos)
    }
    for(var i=0;i<this.trayectoria.length;i++){
      image(this.ezmoque,this.trayectoria[i][0],this.trayectoria[i][1])
    }
    if(this.body.position.x<121){
      this.trayectoria=[];
    }
  }

}

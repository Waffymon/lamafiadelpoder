class BandaPresidencial{
  constructor (bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
    }
    
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    this.pointB=pointB;
    this.sling=Constraint.create(options);
     World.add(world, this.sling);
  }
  fly(){
    this.sling.bodyA=null;
  }
  boomerang(body){
  this.sling.bodyA=body;
}  
  
  display(){
    image(this.sling1,125,300);
    image(this.sling2,100,300);
    if(this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      var pointB=this.pointB;
      strokeWeight(5);
      line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
      line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3) 
      
    }
  }
}


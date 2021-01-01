class Polygon{

    constructor(x,y,r){
    this.x = x
    this.y= y
    this.r = r
   
    this.body = Bodies.circle(x,y,r);
    World.add(world,this.body);
    }   
    display(){

        ellipse(this.body.position.x,this.body.position.y,this.r);

    }
} 
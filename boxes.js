class Boxes
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			'restitution':1,
			'friction':0.4,
			'density':0.8

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y, 70,70, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			
			push ();
			
			
			rectMode(CENTER);

	
	

			rectMode(CENTER);
			strokeWeight(3);
			fill(255,0,255)
		
			rect(paperpos.x,paperpos.y,70,70);
			pop()
			
	}

}
class ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			"restitution":0,
			'friction': 0,
			'density': 1			
			}
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill(128,128,128)
			rect(0, 0, this.width, this.height);
			pop();
			
	}

}
class Paperclass {

    constructor(x,y)
    {
         var options=

        {
            restitution:0.3,
        friction:0.5,
        density:1.2
        
    }
this.body= Bodies.circle(x,y,30, options)
    this.radius=22;
    
World.add(world, this.body);
}
    display()
{var angle=this.body.angle
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(angle)
ellipseMode(RADIUS);
fill("green")
ellipse(0,0,this.radius,this.radius)
pop()

}

}
class Paper{
    constructor(x,y,r)
    {
        var option ={isStatic:false,
                     restitution:0.3,
                     friction:0.2,
                     density:1.2}
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,option)
        World.add(world,this.body)
    }
    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        fill("blue")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}
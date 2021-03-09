class Stone{

    constructor(x,y){
        var Options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.stone=Bodies.circle(x,y,40,Options)
        this.radius=20;
        this.image=loadImage("images/stone.png")
        World.add(world,this.stone)
    }
    display(){
        push()
        translate(this.stone.position.x,this.stone.position.y)
        angleMode(RADIANS)
        rotate(this.stone.angle)
        imageMode(CENTER)
        image(this.image,0,0,40,40)
        pop()
    }

}
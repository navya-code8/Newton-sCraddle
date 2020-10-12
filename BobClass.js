class Bob{

    constructor(x,y){
        
        this.body = Bodies.circle(x,y,50,  {isStatic: false, restitution:1, friction: 0, density: 0.8});
        this.diameter = 50;
        this.color = "pink";
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        ellipse(pos.x, pos.y, 100,100);

    }
}
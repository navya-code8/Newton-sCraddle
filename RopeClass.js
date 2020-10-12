class Rope{

    constructor(body1, body2, offsetX, offsetY){

        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: {x: offsetX, y: offsetY },
            //stifness: 0.08,
            //length: 10
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rope = Constraint.create(options);

        World.add(world,this.rope);
         
    }

    attach(body1){
      
        this.rope.bodyA = body1;
      }

    display(){

        var posA = this.rope.bodyA.position;
        var posB =  this.rope.bodyB.position;
        strokeWeight(2);
        line(posA.x, posA.y, posB.x + this.offsetX, posB.y+this.offsetY)

    }




}
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 2,
            stiffness: 0.004
        }
        
        this.bodyA = bodyA;
        this.pointB = pointB;

        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }

    fly(){
        this.stone.bodyA = null;
    }

    attach(body){
      this.stone.bodyA = body;
    }

    display(){

        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);  
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
            
    }
}
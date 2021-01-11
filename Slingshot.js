class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
       // this.sling1 = loadImage("sprites/sling1.png");
       // this.sling2 = loadImage("sprites/sling2.png");
       // this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
       // image(this.sling1,200,20);
       // image(this.sling2,175,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke(48,22,8);
          //  strokeWeight(2);
           
            if(pointA.x<220){
                strokeWeight(2);
               // line(pointA.x+30, pointA.y, pointB.x, pointB.y);
                line(pointA.x ,pointA.y, pointB.x+40, pointB.y);
               // image (this.sling3,pointA.x-20,pointA.y-10,15,20);
            }
            else{
                strokeWeight(3);
               // line(pointA.x-10, pointA.y, pointB.x, pointB.y);
                line(pointA.x-10,pointA.y, pointB.x+40, pointB.y);
               // image (this.sling3,pointA.x-20,pointA.y-10,15,20);
            }
           
        }
    }
    
}


/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.014,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
       // this.sling1 = loadImage("sprites/sling1.png");
       // this.sling2 = loadImage("sprites/sling2.png");
       // this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       // image(this.sling1,200,20);
       // image(this.sling2,175,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(2);
               // line(pointA.x+30, pointA.y, pointB.x, pointB.y);
                line(pointA.x ,pointA.y, pointB.x+40, pointB.y);
               // image (this.sling3,pointA.x-20,pointA.y-10,15,20);
            }
            else{
                strokeWeight(3);
               // line(pointA.x-10, pointA.y, pointB.x, pointB.y);
                line(pointA.x-10,pointA.y, pointB.x+40, pointB.y);
               // image (this.sling3,pointA.x-20,pointA.y-10,15,20);
            }
           
        }
    }
    
}*/
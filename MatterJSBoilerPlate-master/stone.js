class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            density: 1.3
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);

        this.image = loadImage("Plucking mangoes/stone.png");
        
    }

    display(){
       var pos = this.body.position;
     
       image(this.image,pos.x, pos.y, 70,75);
       
    }

}
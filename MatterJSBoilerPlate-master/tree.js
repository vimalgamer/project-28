class Tree{
     constructor(x,y,width,height){
         var options = {
             isStatic: true
         }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.image = loadImage("Plucking mangoes/tree.png");
         World.add(world,this.body);
     }

     display(){
        var pos = this.body.position;
      
        image(this.image,this.body.position.x, this.body.position.y, 300,350);
        
     }
}
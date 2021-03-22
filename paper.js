class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,

      }
      this.image = loadImage("images/crumpledpaper.png")
      
      this.body = Bodies.circle(x, y, radius, options);
      this.r = radius;
      this.x = x;
      this.y = y;
      
        
      World.add(world, this.body);
      }
    display(){
      var pos =this.body.position;
     push();
     
     translate(pos.x,pos.y);
      
      imageMode (CENTER)
     
      image(this.image,0,0,40,40);
      //this.image.scale = 100;
      pop();
      //circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };
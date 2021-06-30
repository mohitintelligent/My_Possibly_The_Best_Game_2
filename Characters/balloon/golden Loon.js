class goldenBalloon {
    constructor(x, y, radius) {
      var options = { 
        density: 0.2, 
        frictionAir: 0.005
      };

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.visiblity=255;
      this.score=20;

      this.image = loadImage("images/golden loon.png");

      World.add(world, this.body);

    }
  
    display() {

      push();

      translate(this.body.position.x, this.body.position.y);

      ellipseMode(CENTER);
      ellipse(0, 0, this.radius,this.radius);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)

      pop();

    }

      AddScore(){

        World.remove(world, this.body);
            
        push();
            
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            
        pop();
            
       }
}
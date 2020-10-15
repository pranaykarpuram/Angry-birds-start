class Log {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.3,
          'friction':1.2,
          'density':3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("darkBrown");
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };
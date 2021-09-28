class Log 
{
    constructor(x, y,height,angle)
    {
     var options =
      {
       'restitiution':0.8,
       'friction':1.3,
       'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      //to set angle of the body
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("lightbrown");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
}
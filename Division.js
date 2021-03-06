class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density: 500
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
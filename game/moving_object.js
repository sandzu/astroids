

class MovingObject {
  constructor(options = { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}){
    this.pos = options.pos;
    this.vel= options.vel;
    this.radius = options.radius;
    this.color= options.color;
  }

  draw(ctx){
    debugger
    ctx.fillStyle = this.color;
    ctx.beginPath();
    let x, y;
    [x,y]=this.pos;
    ctx.arc(
      x,
      y,
      this.radius,
      0 ,
      2* Math.PI,
      false);

    ctx.fill();
  }
}

module.exports = MovingObject;

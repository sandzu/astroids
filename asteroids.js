const MovingObject = require("./game/moving_object.js");
var canvas = document.getElementById('game-canvas');

if(canvas.getContext){

  var ctx = canvas.getContext('2d');
  const options ={
    pos: [10,10],
    vel: 2,
    radius: 10,
    color: "#00FF00"
  };
  const testObj = new MovingObject(options);
  // debugger
  testObj.draw(ctx);

} else{
  console.log('canvas.getContext failed');
}

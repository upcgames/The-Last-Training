//Constants
const log = console.log;
const canvas = new PIXI.Application();
const WIDTH = canvas.screen.width;
const HEIGHT = canvas.screen.height;

//Game
function keyboard(keyCode) {
  let key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener("keydown", key.downHandler.bind(key), false);
  window.addEventListener("keyup", key.upHandler.bind(key), false);
  return key;
}

//Keys Movement
let LEFT = keyboard(65),
  RIGHT = keyboard(68),
  UP = keyboard(87),
  DOWN = keyboard(83);

function gameStart() {
  document.body.appendChild(canvas.view);
  let barryAllen = new Speedster(
    canvas,
    "./assets/sprites/theFlash_sprite.png", //Sprite URL
    0, //x position
    0, //y position
    10 //amount of Speed Force (lulz :v)
  );
  canvas.ticker.add(() => {
    switch (true) {
      case RIGHT.isDown:
        barryAllen.move("RIGHT");
        break;
        case LEFT.isDown:
        barryAllen.move("LEFT");
        break;
        case UP.isDown:
        barryAllen.move("UP");
        break;
        case DOWN.isDown:
        barryAllen.move("DOWN");
        break;
    }
  });
}

//Main
gameStart();

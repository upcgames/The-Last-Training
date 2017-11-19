//Constants
const log = console.log;
const renderer = new PIXI.Application(660,660);
const screen = renderer.screen;
const canvas = renderer.view;
const stage = renderer.stage;
const ticker = renderer.ticker;
const WIDTH = screen.width;
const HEIGHT = screen.height;
const bump = new Bump();

//Keys Movement
let LEFT = util.keyboard(65),
  RIGHT = util.keyboard(68),
  UP = util.keyboard(87),
  DOWN = util.keyboard(83);

function gameStart() {
  document.body.appendChild(canvas);
  let ciudad = new Ciudad(stage);
  util.drawReference(stage,ciudad);
  let barryAllen = new Speedster(
    stage,
    "./assets/sprites/theFlash_sprite.png", //Sprite URL
    0, //x position
    0, //y position
    10 //amount of Speed Force (lulz :v)
  );
  ticker.add(() => {
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
log(WIDTH,HEIGHT);
//Main
gameStart();

class Game {
  keyboard(keyCode) {
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
  getRandBinary() {
    return Math.round(Math.random());
  }
  getRandNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  drawReference(stage, city) {
    const map = city.matrix;
    for (const i in map) {
      for (const j in map[i]) {
        if (map[i][j] == 1) {
          let graphics = new PIXI.Graphics();
          graphics.beginFill(0xeb4d83);
          graphics.drawRect(j * 60, i * 60, 60, 60);
          stage.addChild(graphics);
        }
        if (map[i][j] == "I" || map[i][j] == "F") {
          let graphics = new PIXI.Graphics();
          graphics.beginFill(0x45ff00);
          graphics.drawRect(j * 60, i * 60, 60, 60);
          stage.addChild(graphics);
        }
      }
    }
  }
}

const util = new Game();

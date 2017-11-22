class Game {
  constructor() {
    this.misions = [];
  }
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
        let graphics = new PIXI.Graphics();
        if (map[i][j] == 1) {
          graphics.beginFill(0xeb4d83);
          graphics.drawRect(j * DISPLAY, i * DISPLAY, DISPLAY, DISPLAY);
          stage.addChild(graphics);
        }
        if (map[i][j] == "F") {
          graphics.beginFill(0x45ff00);
          graphics.drawRect(j * DISPLAY, i * DISPLAY, DISPLAY, DISPLAY);
          stage.addChild(graphics);
        }
        if (typeof map[i][j] == "object") {
          graphics.beginFill(0xffffff);
          graphics.drawRect(j * DISPLAY, i * DISPLAY, DISPLAY, DISPLAY);
          stage.addChild(graphics);
        }
      }
    }
  }
  drawMissionsRef(stage, city) {
    const map = city.matrix;
    const bestNodes = Knapsack(city.misions, city.maxWeight).nodes;
    for (const i in map) {
      for (const j in map[i]) {
        let graphics = new PIXI.Graphics();
        if (typeof map[i][j] == "object" && bestNodes.includes(map[i][j].id)) {
          graphics.beginFill(0xffffff);
          graphics.drawRect(j * DISPLAY, i * DISPLAY, DISPLAY, DISPLAY);
          //graphics.drawCircle((j * DISPLAY)+(DISPLAY/2), i * DISPLAY, DISPLAY, DISPLAY);
          stage.addChild(graphics);
        }
      }
    }
  }
  drawBestPath(stage, city) {
    let matrix = city.matrix.slice(0);
    let misions = [
      {
        id: "Start",
        weight: null,
        val: null,
        i: 0,
        j: 0
      }
    ];
    misions = misions.concat(
      Knapsack(city.misions, city.maxWeight).nodesComplete
    );
    misions.push({
      id: "End",
      weight: null,
      val: null,
      i: matrix[0].length - 1,
      j: matrix.length - 1
    });

    for (const i in matrix) {
      for (const j in matrix[i]) {
        if (matrix[i][j] !== 1) {
          matrix[i][j] = 0;
        }
      }
    }

    log(matrix);
    log(misions);
    misions.forEach(start => {
      misions.forEach(node => {
        let finder = new PF.DijkstraFinder();
        let grid = new PF.Grid(matrix);
        let path = finder.findPath(start.i, start.j, node.i, node.j, grid);
        let graphics = new PIXI.Graphics();
        path.shift();
        path.pop();
        path.forEach(coord => {

          graphics.beginFill(0xffc400);
          graphics.alpha=0.2;
          if (typeof city.map[coord[1]][coord[0]] != "object") {
            graphics.drawRect(
              coord[0] * DISPLAY,
              coord[1] * DISPLAY,
              DISPLAY,
              DISPLAY
            );
            stage.addChild(graphics);
          }
        });
        log(path);
      });
    });
  }
}

const util = new Game();

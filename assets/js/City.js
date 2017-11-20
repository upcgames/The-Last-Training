class City extends PIXI.Sprite {
  constructor(stage = null) {
    super(PIXI.Texture.fromImage("./assets/sprites/city/background2.png"));
    this.width = WIDTH;
    this.height = HEIGHT;
    this.x = 0;
    this.y = 0;
    this.matrix = [];
    const map = this.matrix;
    for (let i = 0; i < HEIGHT / 60; i++) {
      map[i] = new Array(WIDTH / 60 + 1)
        .join("0")
        .split("")
        .map(parseFloat);
    }

    map[0][0] = "I";
    map[0][1] = 2;
    map[1][0] = 2;
    map[map[0].length - 1][map.length - 1] = "F";

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (
          map[i][j] != "I" &&
          map[i][j] != "F" &&
          map[i][j] != "1" &&
          map[i][j] != "2"
        ) {
          map[i][j] = 1;
          switch (true) {
            case i == 0 && j == map.length - 1:
              map[i + 1][j - 1] = 2;
              map[i][j - 1] = 2;
              map[i + 1][j] = 2;
              break;
            case i == map.length - 1 && j == 0:
              map[i - 1][j + 1] = 2;
              map[i][j + 1] = 2;
              map[i - 1][j] = 2;
              break;
            case i == 0 && j != map.length - 1:
              map[i + 1][j - 1] = 2;
              map[i + 1][j + 1] = 2;
              map[i][j - 1] = 2;
              map[i][j + 1] = 2;
              map[i + 1][j] = 2;
              break;
            case j == 0 && i != map.length - 1:
              map[i - 1][j + 1] = 2;
              map[i + 1][j + 1] = 2;
              map[i][j + 1] = 2;
              map[i - 1][j] = 2;
              map[i + 1][j] = 2;
              break;
            case i == map.length - 1:
              map[i - 1][j - 1] = 2;
              map[i - 1][j + 1] = 2;
              map[i][j - 1] = 2;
              map[i][j + 1] = 2;
              map[i - 1][j] = 2;
              break;
            case j == map.length - 1:
              map[i - 1][j - 1] = 2;
              map[i + 1][j - 1] = 2;
              map[i][j - 1] = 2;
              map[i - 1][j] = 2;
              map[i + 1][j] = 2;
              break;

            default:
              map[i - 1][j - 1] = 2;
              map[i - 1][j + 1] = 2;
              map[i + 1][j - 1] = 2;
              map[i + 1][j + 1] = 2;
              map[i][j - 1] = 2;
              map[i][j + 1] = 2;
              map[i - 1][j] = 2;
              map[i + 1][j] = 2;
              break;
          }
        }
      }
    }
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j] == 2) {
          map[i][j] = 0;
        }
      }
    }
    if (stage) {
      stage.addChild(this);
    }
    log(map);
  }
}

class City extends PIXI.Sprite {
  constructor(stage = null, dificult) {
    super(PIXI.Texture.fromImage("./assets/sprites/city/background2.png"));
    this.dificult = dificult;
    this.maxWeight = 10;
    this.misions = [];
    this.width = WIDTH;
    this.height = HEIGHT;
    this.x = 0;
    this.y = 0;
    this.matrix = [];
    this.map = [];
    const map = this.matrix;
    for (let i = 0; i < HEIGHT / DISPLAY; i++) {
      map[i] = new Array(WIDTH / DISPLAY + 1)
        .join("0")
        .split("")
        .map(parseFloat);
    }

    map[0][0] = "I";
    map[0][1] = 2;
    map[1][0] = 2;
    map[map.length - 1][map[0].length - 1] = "F";

    let index = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (
          map[i][j] != "I" &&
          map[i][j] != "F" &&
          map[i][j] != "1" &&
          map[i][j] != "2" &&
          typeof map[i][j] != "object"
        ) {
          if (index < 80 - DISPLAY) {
            if (util.getRandNumber(1, 4) == 4) {
              map[i][j] = {
                id: index,
                weight: util.getRandNumber(1, 3),
                val: (util.getRandNumber(1, 9- this.dificult + 6) ) * 10,
                i: j,
                j: i
              };
              index += 1;
            } else {
              map[i][j] = 1;
            }
          } else {
            map[i][j] = 1;
          }

          switch (true) {
            case i == 0 && j == map[i].length - 1:
              map[i + 1][j - 1] = 2;
              map[i][j - 1] = 2;
              map[i + 1][j] = 2;
              break;
            case i == map.length - 1 && j == 0:
              map[i - 1][j + 1] = 2;
              map[i][j + 1] = 2;
              map[i - 1][j] = 2;
              break;
            case i == 0 && j != map[i].length - 1:
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
            case j == map[i].length - 1:
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
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] == 2) {
          map[i][j] = 0;
        }
        if (typeof map[i][j] == "object") {
          this.misions.push(map[i][j]);
        }
      }
    }
    this.matrix.forEach((v, i) => {
      const val = typeof v === "object" ? Object.assign({}, v) : v;
      this.map.push(val);
    });
    if (stage) {
      stage.addChild(this);
    }
    log(this.misions);
  }
}

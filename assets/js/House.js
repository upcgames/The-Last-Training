class House extends PIXI.Sprite {
  constructor(stage = null, x, y) {
    let design = [
      "./assets/sprites/city/1.png",
      "./assets/sprites/city/2.png",
      "./assets/sprites/city/3.png",
      "./assets/sprites/city/4.png"
    ];
    let i = util.getRandNumber(0, 3);
    super(PIXI.Texture.fromImage(design[i]));
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    if (stage) {
      stage.addChild(this);
    }
  }
}

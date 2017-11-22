class Mision extends PIXI.Sprite {
  constructor(stage = null, x, y, weight, val) {
    let i = util.getRandNumber(0, 3);
    super(
      PIXI.Texture.fromImage("./assets/sprites/misions/" + weight + ".png")
    );
    this.width = DISPLAY;
    this.height = DISPLAY;
    this.x = x * DISPLAY;
    this.y = y * DISPLAY;
    let text = new PIXI.Text(val, {
      fontFamily: "Arial",
      fontSize: DISPLAY/2.6,
      fill: 0xffffff,
      align : 'center',
    });
    text.x = this.x+DISPLAY/3.5;
    text.y = this.y+DISPLAY/3;
    if (stage) {
      stage.addChild(this);
      stage.addChild(text);
    }
  }
}

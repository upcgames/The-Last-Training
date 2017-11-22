class Speedster extends PIXI.Sprite {
  constructor(stage = null, url, x, y, speed) {
    super(PIXI.Texture.fromImage(url));
    this.interactive = true;
    this.width = DISPLAY - 3;
    this.height = DISPLAY - 3;
    this.x = x;
    this.y = y;
    this.center = {
      x: (this.x + this.width) / 2,
      y: (this.y + this.height) / 2
    };
    this.speed = speed;
    if (stage) {
      stage.addChild(this);
    }
  }
  move(direction) {
    switch (direction) {
      case "RIGHT":
        if (this.x + this.width + this.speed <= WIDTH) {
          this.center.x += this.speed;
          this.x += this.speed;
        }
        break;
      case "LEFT":
        if (this.x - this.speed >= 0) {
          this.center.x -= this.speed;
          this.x -= this.speed;
        }
        break;
      case "UP":
        if (this.y - this.speed >= 0) {
          this.center.y -= this.speed;
          this.y -= this.speed;
        }
        break;
      case "DOWN":
        if (this.y + this.height + this.speed <= HEIGHT) {
          this.center.y += this.speed;
          this.y += this.speed;
        }
        break;
    }
  }
}

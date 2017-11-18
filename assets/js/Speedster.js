class Speedster extends PIXI.Sprite {
  constructor(canvas = null, url, x, y, speed) {
    super(PIXI.Texture.fromImage(url));
    this.width = 50;
    this.height = 50;
    this.x = x;
    this.y = y;
    this.center = {
      x: (this.x + this.width) / 2,
      y: (this.y + this.height) / 2
    };
    this.speed = speed;
    if (canvas) {
      canvas.stage.addChild(this);
    }
  }
  move(direction) {
    switch (direction) {
      case "RIGHT":
        if (this.x + this.width + this.speed > WIDTH) {
          this.center.x += 0;
          this.x += 0;
        } else {
          this.center.x += this.speed;
          this.x += this.speed;
        }
        break;
      case "LEFT":
        if (this.x - this.speed < 0) {
          this.center.x += 0;
          this.x += 0;
        } else {
          this.center.x -= this.speed;
          this.x -= this.speed;
        }
        break;
      case "UP":
        if (this.y - this.speed < 0) {
          this.center.y += 0;
          this.y += 0;
        } else {
          this.center.y -= this.speed;
          this.y -= this.speed;
        }
        break;
      case "DOWN":
        if (this.y + this.height + this.speed > HEIGHT) {
          this.center.y += 0;
          this.y += 0;
        } else {
          this.center.y += this.speed;
          this.y += this.speed;
        }
        break;
    }
    log(this.y, HEIGHT);
    log(this.center);
  }
}

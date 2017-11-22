//Constants
const log = console.log;
const menu = document.getElementById("Menu");
const btnPlay = document.getElementById("btnPlay");
const renderer = new PIXI.Application(1020, 540);
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

let canMove = "";

function gameStart() {
  document.body.appendChild(canvas);
  let housesArray = [];
  let city = new City(stage, 8);
  util.drawMissionsRef(stage, city);
  //util.drawReference(stage, city);
  util.drawBestPath(stage, city);
  
  log(city.map);
  for (const i in city.map) {
    for (const j in city.map[i]) {
      if (city.map[i][j] == 1) {
        let house = new House(stage, j, i);
        housesArray.push(house);
      }
      if (typeof city.map[i][j] == "object") {
        let mision = new Mision(
          stage,
          j,
          i,
          city.map[i][j].weight,
          city.map[i][j].val
        );
      }
    }
  }
  
  

  let barryAllen = new Speedster(
    stage,
    "./assets/sprites/theFlash_sprite.png", //Sprite URL
    0, //x position
    0, //y position
    5 //amount of Speed Force (lulz :v)
  );

  ticker.add(() => {
    housesArray.forEach(element => {
      bump.hit(barryAllen, element, true, false);
    });
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
let audio = new Audio("./assets/mp3/intro.mp3");
window.onload = () => {
  audio.play();
};
btnPlay.addEventListener("click", () => {
  menu.hidden = true;
  gameStart();
  audio.pause();
  audio.currentTime = 0;
});

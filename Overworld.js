class Overworld {
  /**
   *
   */
  constructor(config) {
    // super();
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    console.log("Overworld", this);
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(
        image, //image to draw pictures from
        0, //start x: top left x
        0 //start y: top left y
      );
      console.log("end image onload");
    };
    image.src = "./images/maps/DemoLower.png";

    // place some game objects
    const hero = new GameObject({
      x: 5,
      y: 6,
    });

    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: "./images/characters/people/npc1.png",
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 200);
  }
}

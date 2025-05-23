class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    this.shadow = new Image();
    this.shadow.src = "./images/characters/shadow.png";
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };
    this.useShadow = true;

    this.animations = config.animations || {
      idleDown: [[0, 0]],
      // walkDown: [
      //   [0,0],[1,0],[2,0],[3,0]
      // ],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = config.currentAnimationFrame || 0;
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;
    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}

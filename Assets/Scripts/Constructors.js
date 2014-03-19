"use strict";
function Brick() {
    this.x = BrickTools.getRandomXPosition();
    this.y = -10;
    this.color = BrickTools.getRandomColor();
    this.current = true;
    this.height = 10;
    this.width = 10;
}
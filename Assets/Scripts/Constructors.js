"use strict";
function Brick() {
    this.X = BrickTools.getRandomXPosition();
    this.y = 0;
    this.color = BrickTools.getRandomColor();
    this.locked = false;
};
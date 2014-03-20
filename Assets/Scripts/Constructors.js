"use strict";
function Brick() {
    this.x = BrickTools.getRandomXPosition();
    this.y = BrickTools.getStartPosition();
    this.color = BrickTools.getRandomColor();
    this.height = Constants.measurements.BrickHeight;
    this.width = Constants.measurements.BrickWidth;
}

function Placeholder(x,y) {
    this.occupied = false;
}
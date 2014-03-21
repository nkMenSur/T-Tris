"use strict";

doc.onkeydown = checkKeyDown;

function checkKeyDown(e) {
    e = e || window.e;
    var key = e.keyCode;
    var currentBrick = brickPool[brickAmount - 1];
    if (currentBrick.x < foregroundCanvas.width) {
        if ((key === Constants.keyCodes.SDown|| key === Constants.keyCodes.ArrowDown) && currentBrick.y < foregroundCanvas.height - Constants.measurements.BrickHeight) {
            currentBrick.y += Constants.measurements.BrickHeight;
            e.preventDefault();
        }

        if (key === Constants.keyCodes.DRight || key === Constants.keyCodes.ArrowRight) {
            if (currentBrick.x != foregroundCanvas.width - Constants.measurements.BrickWidth) {
                currentBrick.x += Constants.measurements.BrickWidth;
            }
            e.preventDefault();
        }

        if (key === Constants.keyCodes.ALeft || key === Constants.keyCodes.ArrowLeft) {
            if (currentBrick.x != 0) {
                currentBrick.x -= Constants.measurements.BrickWidth;
            } else {
                currentBrick.x == Constants.measurements.BrickWidth;
            }
            e.preventDefault();
        }
    }
}

function checkCollision(direction) {
    //TODO: collision detection
    //if (true) {
    //    return true;
    //}
    //if (true) {
    //    return true;
    //}
    //if (true) { 
    //}
    //return false;
}
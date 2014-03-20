"use strict";

doc.onkeydown = checkKeyDown;

function checkKeyDown(e) {
    e = e || window.e;
    var key = e.keyCode;
    var currentBrick = brickPool[brickAmount - 1];
    if (currentBrick.x < foregroundCanvas.width) {
        if (key === Constants.keyCodes.Down && currentBrick.y < foregroundCanvas.height - Constants.measurements.BrickHeight) {
            currentBrick.y += Constants.measurements.BrickHeight;
            e.preventDefault();
        }

        if (key === Constants.keyCodes.Right) {
            if (currentBrick.x != foregroundCanvas.width - Constants.measurements.BrickWidth*2) {
                currentBrick.x += Constants.measurements.BrickWidth;
            }
            e.preventDefault();
        }

        if (key === Constants.keyCodes.Left) {
            if (currentBrick.x != Constants.measurements.BrickWidth) {
                currentBrick.x -= Constants.measurements.BrickWidth;
            } else {
                currentBrick.x == Constants.measurements.BrickWidth;
            }
            e.preventDefault();
        }
    }
}
"use strict";

doc.onkeydown = checkKeyDown;

function checkKeyDown(e) {
    e = e || window.e;
    var key = e.keyCode;
    var currentBrick = brickPool[brickAmount - 1];

    if (currentBrick.x < TTrisCanvas.width) {
        if (key === Constants.keyCodes.Down && currentBrick.y < TTrisCanvas.height - 10) {
            currentBrick.y += 10;
            e.preventDefault();
        }

        if (key === Constants.keyCodes.Right) {
            if (currentBrick.x != TTrisCanvas.width -10) {
                currentBrick.x += 10;
            }
            e.preventDefault();
        }

        if (key === Constants.keyCodes.Left) {
            if (currentBrick.x == 0) {
                currentBrick.x == 0;
            } else {
                currentBrick.x -= 10;
            }
            e.preventDefault();
        }
    }

}

function directionSet(brick) {
    ///*directions: 1 = up, 2 = right, 3 = down, 4 = left*/
    //if (brick.goUp) { brick.direction = "up"; };
    //if (brick.goRight) { brick.direction = "up"; };
    //if (brick.goDown) { brick.direction = "up"; };
    //if (brick.goLeft) { brick.direction = "up"; };
};
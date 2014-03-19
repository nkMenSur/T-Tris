"use Strict";
var BrickTools = {
    getRandomColor: function () {
        var bgCanvasColor = '#bef093';
        while (true) {
            var rndmColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            if (rndmColor != bgCanvasColor) {
                return rndmColor;
            }
        }
    },
    getRandomXPosition: function () {
        return Math.floor(Math.random() * 40) * 10;
    }
}

function createBrick() {
    if (!brickCreationLocked) {
        brickPool[brickAmount] = new Brick();
        brickAmount++;
        brickCreationLocked = true;
    }
}

function naturalDown() {
    var currentBrick = brickPool[brickAmount-1];
    
    if (currentBrick != undefined && currentBrick.y < TTrisCanvas.height -10) {
        currentBrick.y += 10;
    } else if (currentBrick.y == TTrisCanvas.height - 10) {
        brickCreationLocked = false;
    }
}

function render() {
    var currentRect = brickPool[brickAmount - 1];
    TTrisCanvasContext.clearRect(0, 0, TTrisCanvas.width, TTrisCanvas.height);
    //TTrisCanvasContext.fillRect(currentRect.x, currentRect.y, currentRect.width, currentRect.height);
    for (var index in brickPool) {
        var brick = brickPool[index]

        TTrisCanvasContext.beginPath();
        TTrisCanvasContext.fillStyle = brick.color;
        TTrisCanvasContext.fillRect(brick.x, brick.y, brick.width, brick.height);
        TTrisCanvasContext.stroke();

    }
}
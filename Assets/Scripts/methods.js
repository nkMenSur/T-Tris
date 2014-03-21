"use Strict";
var BrickTools = {
    getRandomColor: function () {
        while (true) {
            var rndmColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            if (rndmColor != Constants.colors.BackgroundCanvasColor) {
                return rndmColor;
            }
        }
    },
    getRandomXPosition: function () {
        var delta = new Date();
        var xPos = Math.abs(Math.floor(Math.random() * (Constants.measurements.CanvasWidth + Constants.measurements.BrickWidth) / 10) * Constants.measurements.BrickWidth - Constants.measurements.BrickWidth);
        return xPos;
    },
    getStartPosition: function () {
        var yPos = Constants.measurements.BrickHeight * (-1);
        return yPos;
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
    if (new Date() - deltaTime >= Constants.times.MillisecondsPerTick) {
        var currentBrick = brickPool[brickAmount - 1];

        if (currentBrick != undefined && currentBrick.y < foregroundCanvas.height - currentBrick.height && !grid[currentBrick.x + '|' + (currentBrick.y + currentBrick.height)].occupied) {
            currentBrick.y += Constants.measurements.BrickHeight;
        } else if (currentBrick.y == foregroundCanvas.height - currentBrick.height || grid[currentBrick.x + '|' + (currentBrick.y + currentBrick.height)].occupied) {
            grid[currentBrick.x + '|' + currentBrick.y].occupied = true;
            brickCreationLocked = false;
        }
        deltaTime = new Date();
    }
}

function render() {
    var currentRect = brickPool[brickAmount - 1];

    foregroundCanvasContext.clearRect(0, 0, foregroundCanvas.width, foregroundCanvas.height);

    for (var currentBrickPosition in brickPool) {
        var brick = brickPool[currentBrickPosition]
        
        foregroundCanvasContext.beginPath();
        foregroundCanvasContext.fillStyle = brick.color;
        foregroundCanvasContext.fillRect(brick.x, brick.y, brick.width, brick.height);
        foregroundCanvasContext.stroke();
    }
}

function initCanvas() {
    canvasContainer = doc.getElementById('playground');

    backgroundCanvas = doc.createElement('canvas');
    backgroundCanvas.height = Constants.measurements.CanvasHeight;
    backgroundCanvas.width = Constants.measurements.CanvasWidth;
    backgroundCanvasContext = backgroundCanvas.getContext("2d");

    foregroundCanvas = doc.createElement('canvas');
    foregroundCanvas.height = Constants.measurements.CanvasHeight;
    foregroundCanvas.width = Constants.measurements.CanvasWidth;
    foregroundCanvasContext = foregroundCanvas.getContext("2d");

    canvasContainer.appendChild(backgroundCanvas);
    canvasContainer.appendChild(foregroundCanvas);
    
    for (var x = 0; x < backgroundCanvas.width; x += Constants.measurements.BrickWidth) {
        for (var y = 0; y < backgroundCanvas.height; y += Constants.measurements.BrickHeight) {
            grid[x + '|' + y] = new Placeholder();
        }
    }
    
    backgroundCanvasContext.beginPath();
    backgroundCanvasContext.fillStyle = Constants.colors.BackgroundCanvasColor;
    backgroundCanvasContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    backgroundCanvasContext.stroke();
}
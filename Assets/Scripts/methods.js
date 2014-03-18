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

function count() {
    if (tickCounter == Number.MAX_VALUE) {
        tickCounter = 0;
    }
    tickCounter++;
};

function createBrick() {
    var i = Object.keys(brickPool).length;
    brickPool[i] = new Brick();
};
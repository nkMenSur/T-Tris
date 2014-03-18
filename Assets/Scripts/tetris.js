"use strict";
var fps = null;
var canvasElement;
var TTrisCanvas;
var TTrisCanvasContext;
var tickCounter = 0;
var brickPool = {};

$(function () {
    canvasElement = $('#TTris');
    TTrisCanvas = document.getElementById('TTris');
    TTrisCanvas.height = 600;
    TTrisCanvas.width = 400;
    TTrisCanvasContext = TTrisCanvas.getContext("2d");
    fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer"));
    GameLoopManager.run(GameTick);
});

function GameTick(elapsed) {
    fps.update(elapsed);

    // --- Logic ---
    count();

    if (tickCounter % 60 == 0) {
        createBrick();
    }









    // --- Rendering ---
    TTrisCanvasContext.clearRect(0, 0, TTrisCanvas.width, TTrisCanvas.height);

}
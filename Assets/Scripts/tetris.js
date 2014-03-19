
$(function () {
    "use strict";
    deltaTime = 0;
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
    createBrick();

    if (new Date() - deltaTime >= 10) {
        deltaTime = new Date();
        console.log("tick");
        naturalDown();
    }
     
    render();
}
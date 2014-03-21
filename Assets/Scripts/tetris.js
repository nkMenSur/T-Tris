
$(function () {
    "use strict";
    deltaTime = 0;
    initCanvas();
    fps = new FPSMeter("fpsmeter", doc.getElementById("fpscontainer"));
    GameLoopManager.run(GameTick);
});

function GameTick(elapsed) {
    fps.update(elapsed);

    // --- Logic ---
    createBrick();
    naturalDown();

    // --- Rendering ---
    render();
}
var BrickPool = {};

jQuery(function ($, undefined) {

    "use strict"
    var pedal = 10;
    var brickCounter = 0;
    var brickHeight = 50;
    var brickWidth = 50;
    var win = window;
    var initialTime = Date.now();
    var creationInterval = 2000;
    win.addEventListener('keydown', changeSpeed, false);

    var animationFrame = win.requestAnimationFrame ||
                                win.mozRequestAnimationFrame ||
                                win.webkitRequestAnimationFrame ||
                                win.msRequestAnimationFrame;
    win.requestAnimationFrame = animationFrame;

    var backgroundCanvas = document.getElementById('background');
    var bgContext = backgroundCanvas.getContext('2d');


    function changeSpeed(e) {
        if (e.keyCode === 87) {
            //console.log('w');
            if (pedal > 1) {
                pedal--;
            }
        } else if (e.keyCode === 65) {
            console.log('a');
        } else if (e.keyCode === 83) {
            //console.log('s');
            pedal++;
        } else if (e.keyCode === 68) {
            console.log('d');
        }
    };
    
    function Brick(x, y, color) {
        this.x = x;
        this.y = 0;
        this.color = color;
        this.locked;
    };


    function createBrick() {
        
        var x = (Math.floor(Math.random() * 25) + 1) * 25;
        console.log(x);
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

        BrickPool[brickCounter] = new Brick(x, 0, color);
        brickCounter++;
    };

    var frameCounter = 0;

    (function startLoop() {
        frameCounter++
        if (frameCounter === Number.POSITIVE_INFINITY) {
            frameCounter = 0;
        }

        if (frameCounter % parseInt(pedal) === 0) {
            createBrick();
        }

        animationFrame(startLoop);

    })();

    
    //createBrick();
    






});
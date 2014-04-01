"use strict";

doc.onkeydown = checkKeyDown;

function checkKeyDown(e) {
  var e = e || window.e;
  
  var key = e.keyCode;
  
  var currentBrick = brickPool[brickAmount - 1];

  if (currentBrick.x < foregroundCanvas.width) {
    if ((key === Constants.keyCodes.SDown|| key === Constants.keyCodes.ArrowDown) && currentBrick.y < foregroundCanvas.height - Constants.measurements.BrickHeight && permissionToGoDown(currentBrick)) {
      currentBrick.y += Constants.measurements.BrickHeight;
      e.preventDefault();
    }

    if ((key === Constants.keyCodes.DRight || key === Constants.keyCodes.ArrowRight) && permissionToGoRight(currentBrick)) {
      if (currentBrick.x != foregroundCanvas.width - Constants.measurements.BrickWidth) {
        currentBrick.x += Constants.measurements.BrickWidth;
      }
      e.preventDefault();
    }

    if ((key === Constants.keyCodes.ALeft || key === Constants.keyCodes.ArrowLeft) && permissionToGoLeft(currentBrick)) {
      if (currentBrick.x != 0) {
        currentBrick.x -= Constants.measurements.BrickWidth;
      } else {
        currentBrick.x == Constants.measurements.BrickWidth;
      }
      e.preventDefault();
    }
  }
}

function permissionToGoLeft(currentBrick){
  if (grid[currentBrick.x - Constants.measurements.BrickWidth + '|' + currentBrick.y] != undefined) {
    if (!grid[currentBrick.x - Constants.measurements.BrickWidth + '|' + currentBrick.y].occupied ) {
      console.log('you may go left');
      return true;
    }else{
      return false;
      console.log('you shall not pass left!');
    }
  }else{
    return false;
    console.log('outer spacer left');
  }
}
function permissionToGoRight(currentBrick){
  if (grid[currentBrick.x + Constants.measurements.BrickWidth + '|' + currentBrick.y] != undefined) {
    if (!grid[currentBrick.x + Constants.measurements.BrickWidth + '|' + currentBrick.y].occupied ) {
      console.log('you may go right');
      return true;
    }else{
      console.log('you shall not pass right!');
      return false;
    }
  }else{
    console.log('outer space! right');
    return false;
  }
}
function permissionToGoDown(currentBrick){
  if (grid[currentBrick.x + '|' + (currentBrick.y + Constants.measurements.BrickHeight)] != undefined) {
    if (!grid[currentBrick.x + '|' + (currentBrick.y + Constants.measurements.BrickHeight)].occupied) {
      console.log('you may go down!');
      return true;
    }else{
      console.log('you shall not pass down!');
      return false;
    }
  }else{
    console.log('outer space! down');
    return false;
  }
}
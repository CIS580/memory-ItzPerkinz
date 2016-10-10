"use strict";

/* Classes */
const Game = require('./game');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);

// We have 9 pairs of possible cards that are about 212px square
var cards = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var board = [];
while(cards.length>0)
{
  var index = Math.floor(Math.random()*cards.length-1);
  board.push({card: cards[index], flip: false});
  cards.splice(index, 1);
}

// board[shuffled 0-8] now
/*
    0 0 1 1 2 2
    3 3 4 4 5 5
    6 6 7 7 8 8
*/



// TODO: Place the cards on the board in random order

canvas.onclick = function(event) {
  event.preventDefault();
  // TODO: determine which card was clicked on
  // TODO: determine what to do
}

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "#ff7777";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TODO: Render the board
  for (var y = 0; y < 3; y++) {
    for (var x = 0; x < 7; x++) {
      var i = y*6 + x;
      var card = board[i];
      if (card.flip)
      {
        //render animal
        ctx.drawImage(image,
          //source rect
          640 / card.card, 0, 212, 212
          //dest rect
          x*165+3, y*165+3, 160, 160
         )
      }
      else
      {
        //draw the back of the card
      }
      ctx.fillStyle = "#3333ff";
      // 1 pixel = 212 pixels
      // 214 = padding of 2 pixels
      ctx.fillRect(x*165+3, y*165+3, 160, 160);
    }
  }
}

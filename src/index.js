const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score = document.querySelector('#score').innerText; 
const timerDisplay = document.querySelector('#timer').innerText;

let time = 0;
let timer;
let lastHole = 0; 
let points = 0;
let difficulty = "hard";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setDelay(difficulty) {
  switch (difficulty) {
    case "easy":
      return 1500;
    case "normal":
      return 1000;
    case "hard":
      return randomInteger(600, 1200);
  }
}

function chooseHole(holes) {
  // * 1. generate a random integer from 0 to 8 and assign it to an index variable
  let index = Math.floor(Math.random() * (holes.length - 1)); 
  // * 2. get a random hole with the random index (e.g. const hole = holes[index])
  const hole = holes[index]
  // * 3. if hole === lastHole then call chooseHole(holes) again.
  if (hole === lastHole) {
    return chooseHole(holes);
  } 
  // * 4. if hole is not the same as the lastHole then keep track of 
  // * it (lastHole = hole) and return the hole
    lastHole = hole;
    return hole;
}

function gameOver() {
  if (time > 0) {
    let timeoutId = showUp();
    return timeoutId;
  }
  else {
    let gameStopped = stopGame();
    return gameStopped;
}
}

function showUp() {
  let delay = setDelay(difficulty); // TODO: Update so that it uses setDelay()
  const hole = chooseHole(holes);  // TODO: Update so that it use chooseHole()
  return showAndHide(hole, delay);
}

function showAndHide(hole, delay){
  toggleVisibility(hole);
  const timeoutID = setTimeout(() => {
    toggleVisibility(hole);
    gameOver();
  }, delay); 
  return timeoutID;
}

function toggleVisibility(hole){
  hole.classList.toggle("show");
  return hole;
}

/**
*
* This function increments the points global variable and updates the scoreboard.
* Use the `points` global variable that is already defined and increment it by 1.
* After the `points` variable is incremented proceed by updating the scoreboard
* that you defined in the `index.html` file. To update the scoreboard you can use 
* `score.textContent = points;`. Use the comments in the function as a guide 
* for your implementation:
*
*/
function updateScore() {
  // TODO: Write your code here

  return points;
}

/**
*
* This function clears the score by setting `points = 0`. It also updates
* the board using `score.textContent = points`. The function should return
* the points.
*
*/
function clearScore() {
  // TODO: Write your code here
  // points = 0;
  // score.textContent = points;
  return points;
}

/**
*
* Updates the control board with the timer if time > 0
*
*/
function updateTimer() {
  // TODO: Write your code here.
  // hint: this code is provided to you in the instructions.
  
  return time;
}

/**
*
* Starts the timer using setInterval. For each 1000ms (1 second)
* the updateTimer function get called. This function is already implemented
*
*/
function startTimer() {
  // TODO: Write your code here
  // timer = setInterval(updateTimer, 1000);
  return timer;
}

/**
*
* This is the event handler that gets called when a player
* clicks on a mole. The setEventListeners should use this event
* handler (e.g. mole.addEventListener('click', whack)) for each of
* the moles.
*
*/
function whack(event) {
  // TODO: Write your code here.
  // call updateScore()
  return points;
}

/**
*
* Adds the 'click' event listeners to the moles. See the instructions
* for an example on how to set event listeners using a for loop.
*/
function setEventListeners(){
  // TODO: Write your code here

  return moles;
}

/**
*
* This function sets the duration of the game. The time limit, in seconds,
* that a player has to click on the sprites.
*
*/
function setDuration(duration) {
  time = duration;
  return time;
}

/**
*
* This function is called when the game is stopped. It clears the
* timer using clearInterval. Returns "game stopped".
*
*/
function stopGame(){
  // stopAudio(song);  //optional
  clearInterval(timer);
  return "game stopped";
}

function startGame(){
  setDuration(10);
  showUp();
  return "game started";
}

startButton.addEventListener("click", startGame);


// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;

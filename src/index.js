const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score = document.querySelector('#score'); 
const timerDisplay = document.querySelector('#timer');

let time = 10;
let timer;
let lastHole = 0; 
let points = 0;
let difficulty = "normal";

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

function updateScore() {
  points++; 
  score.textContent = points;
  return points;
}

function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}

function updateTimer() {
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}

//handler 
function whack(event) {
  console.log("hit");
  updateScore();
  return points;
}

function setEventListeners(){
  moles.forEach((mole) => {
    mole.addEventListener('click', whack);
    console.log("attached");
  }
  )
  return moles;
}
setEventListeners();

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
  stopAudio(song); 
  clearInterval(timer);
  clearScore();
  return "game stopped";
}

function startGame(){
  setDuration(10);
  play();
  startTimer();
  showUp();
  return "game started";
}

startButton.addEventListener("click", startGame);

//audio
const song = new Audio("./assets/birdsong.mp3");

function playAudio(audioObject) {
  audioObject.play();
}

function loopAudio(audioObject) {
  audioObject.loop = true;
  playAudio(audioObject);
}

function stopAudio(audioObject) {
  audioObject.pause();
}

function play(){
  playAudio(song);
}

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

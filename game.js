let score = 0;
let gameActive = false;
let pointTimeout = [];
let gameInterval;
let clem = 0;

function getIntervalTime() {
  const baseInterval = 1000;
  const minimumInterval = 500;
  const intervalReduction = 30;

  console.log(
    Math.max(minimumInterval, baseInterval - score * intervalReduction)
  );
  return Math.max(minimumInterval, baseInterval - score * intervalReduction);
}

function startGame() {
  if (gameActive) return;

  gameActive = true;
  score = 0;
  updateScore();

  gameInterval = setInterval(placeRedDot, getIntervalTime());
}

function placeRedDot() {
  clem++;
  const redDot = document.createElement("div");
  redDot.id = `target-${clem}`;
  redDot.className = "red-dot";
  const maxX = window.innerWidth - 200;
  const maxY = window.innerHeight - 200;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  redDot.style.left = randomX + "px";
  redDot.style.top = randomY + "px";
  document
    .getElementsByTagName("body")[0]
    .appendChild(redDot)
    .addEventListener("click", dotClicked);

  pointTimeout = [
    ...pointTimeout,
    [
      setTimeout(() => {
        endGame();
      }, 2000),
      setTimeout(() => {
        document.getElementById(redDot.id).style.filter = "blur(5px)";
      }, 1000),
    ],
  ];
}

function dotClicked(e) {
  if (!gameActive) return;

  const clickedDotIndex = e.srcElement.id.split("target-")[1] - 1;
  clearTimeout(pointTimeout[clickedDotIndex][0]);
  clearTimeout(pointTimeout[clickedDotIndex][1]);
  score++;
  updateScore();

  clearInterval(gameInterval);
  gameInterval = setInterval(placeRedDot, getIntervalTime());

  document.getElementById(e.srcElement.id).remove();
}

function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = "Score: " + score;
}

function endGame() {
  gameActive = false;
  pointTimeout.forEach((timeout) => clearTimeout(timeout[0]));
  document.querySelectorAll(".red-dot").forEach((e) => e.remove());
  clearInterval(gameInterval);
  alert("Game Over! Your score was: " + score);
}

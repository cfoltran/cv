const game = (() => {
  let score = 0;
  let active = false;
  let targets = new Map();
  let interval = null;
  let targetId = 0;

  const BASE_INTERVAL = 1000;
  const MIN_INTERVAL = 500;
  const INTERVAL_STEP = 30;
  const TARGET_LIFETIME = 2000;
  const BLUR_DELAY = 1000;

  const getInterval = () =>
    Math.max(MIN_INTERVAL, BASE_INTERVAL - score * INTERVAL_STEP);

  const updateScore = () => {
    document.getElementById("score").textContent = `Score: ${score}`;
  };

  const createCrosshair = () => {
    if (document.getElementById("crosshair")) return;
    const crosshair = document.createElement("div");
    crosshair.id = "crosshair";
    document.body.appendChild(crosshair);
    document.body.classList.add("game-active");

    document.addEventListener("mousemove", (e) => {
      crosshair.style.left = `${e.clientX}px`;
      crosshair.style.top = `${e.clientY}px`;
    });
  };

  const removeCrosshair = () => {
    document.getElementById("crosshair")?.remove();
    document.body.classList.remove("game-active");
  };

  const spawnTarget = () => {
    const id = ++targetId;
    const el = document.createElement("div");
    el.id = `target-${id}`;
    el.className = "red-dot";

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;
    el.style.left = `${Math.floor(Math.random() * maxX)}px`;
    el.style.top = `${Math.floor(Math.random() * maxY)}px`;

    el.addEventListener("click", () => hitTarget(id));
    document.body.appendChild(el);

    const blurTimer = setTimeout(() => {
      el.style.filter = "blur(5px)";
    }, BLUR_DELAY);

    const deathTimer = setTimeout(() => endGame(), TARGET_LIFETIME);

    targets.set(id, { el, blurTimer, deathTimer });
  };

  const hitTarget = (id) => {
    if (!active) return;
    const target = targets.get(id);
    if (!target) return;

    clearTimeout(target.blurTimer);
    clearTimeout(target.deathTimer);
    target.el.remove();
    targets.delete(id);

    score++;
    updateScore();

    clearInterval(interval);
    interval = setInterval(spawnTarget, getInterval());
  };

  const endGame = () => {
    active = false;
    clearInterval(interval);

    for (const [, { el, blurTimer, deathTimer }] of targets) {
      clearTimeout(blurTimer);
      clearTimeout(deathTimer);
      el.remove();
    }
    targets.clear();
    removeCrosshair();

    alert(`Game Over! Score: ${score}`);
  };

  const start = () => {
    if (active) return;
    active = true;
    score = 0;
    targetId = 0;
    targets.clear();
    updateScore();
    createCrosshair();
    interval = setInterval(spawnTarget, getInterval());
  };

  return { start };
})();

function startGame() {
  game.start();
}

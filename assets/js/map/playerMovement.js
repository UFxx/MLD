const canvas = document.querySelector("#map-canvas");
const players = document.querySelectorAll(".player");

const playersStartPositions = [
  [
    { startPositionX: 27, startPositionY: 80 },
    { startPositionX: 25, startPositionY: 70 },
    { startPositionX: 18, startPositionY: 68 },
    { startPositionX: 21, startPositionY: 65 },
    { startPositionX: 35, startPositionY: 53 },
  ],
  [
    { startPositionX: 69, startPositionY: 20 },
    { startPositionX: 65, startPositionY: 15 },
    { startPositionX: 75, startPositionY: 22 },
    { startPositionX: 72, startPositionY: 25 },
    { startPositionX: 61, startPositionY: 37 },
  ],
];

const blueTeamPlayers = document.querySelectorAll(".player-blue-team");
blueTeamPlayers.forEach((player, i) => {
  player.style.left = playersStartPositions[0][i].startPositionX + "%";
  player.style.top = playersStartPositions[0][i].startPositionY + "%";
});

const redTeamPlayers = document.querySelectorAll(".player-red-team");
redTeamPlayers.forEach((player, i) => {
  player.style.left = playersStartPositions[1][i].startPositionX + "%";
  player.style.top = playersStartPositions[1][i].startPositionY + "%";
});

canvas.addEventListener("dragover", (e) => {
  e.preventDefault();
});

players.forEach((player) => {
  player.addEventListener("dragstart", () => {
    player.style.border = "2px solid white";
  });

  player.addEventListener("dragend", (e) => {
    const rect = canvas.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    const playerTeam = player.classList[1].split("-")[1];

    player.style.left = left - player.clientWidth / 1.6 + "px";
    player.style.top = top - player.clientHeight / 1.6 + "px";
    player.style.border = `2px solid ${playerTeam}`;
  });
});

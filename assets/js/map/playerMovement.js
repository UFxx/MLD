const canvas = document.querySelector("#map-canvas");
const players = document.querySelectorAll(".player");

const playersStartPositions = [
  [
    { startPositionX: 77, startPositionY: 90 },
    { startPositionX: 14, startPositionY: 15 },
    { startPositionX: 46, startPositionY: 48 },
    { startPositionX: 30, startPositionY: 54 },
    { startPositionX: 20, startPositionY: 18 },
  ],
  [
    { startPositionX: 90, startPositionY: 75 },
    { startPositionX: 25, startPositionY: 6 },
    { startPositionX: 51, startPositionY: 42 },
    { startPositionX: 65.5, startPositionY: 34 },
    { startPositionX: 22.5, startPositionY: 14 },
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

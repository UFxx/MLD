const canvas = document.querySelector("#map-canvas");
const players = document.querySelectorAll(".player");

const playersStartPositions = [
  [
    { startPositionX: 70, startPositionY: 79 },
    { startPositionX: 23, startPositionY: 24 },
    { startPositionX: 46, startPositionY: 48 },
    { startPositionX: 35.5, startPositionY: 53 },
    { startPositionX: 27, startPositionY: 25 },
  ],
  [
    { startPositionX: 78, startPositionY: 67 },
    { startPositionX: 31, startPositionY: 16 },
    { startPositionX: 51, startPositionY: 42 },
    { startPositionX: 61, startPositionY: 37 },
    { startPositionX: 29.5, startPositionY: 22.5 },
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

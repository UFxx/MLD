const canvas = document.querySelector('#map-canvas');
const players = document.querySelectorAll('.player-container');

let playersStartPositions;

console.log(window.innerWidth);

if (window.innerWidth === 1536) {
  playersStartPositions = [
    [
      { startPositionX: 220, startPositionY: 110 },
      { startPositionX: 1200, startPositionY: 650 },
      { startPositionX: 680, startPositionY: 360 },
      { startPositionX: 470, startPositionY: 400 },
      { startPositionX: 600, startPositionY: 330 }
    ],
    [
      { startPositionX: 350, startPositionY: 50 },
      { startPositionX: 1350, startPositionY: 550 },
      { startPositionX: 800, startPositionY: 300 },
      { startPositionX: 1000, startPositionY: 240 },
      { startPositionX: 750, startPositionY: 240 }
    ]
  ];
} else if (window.innerWidth === 1920) {
  playersStartPositions = [
    [
      { startPositionX: 270, startPositionY: 150 },
      { startPositionX: 1500, startPositionY: 850 },
      { startPositionX: 850, startPositionY: 450 },
      { startPositionX: 600, startPositionY: 550 },
      { startPositionX: 720, startPositionY: 430 }
    ],
    [
      { startPositionX: 500, startPositionY: 50 },
      { startPositionX: 1700, startPositionY: 700 },
      { startPositionX: 1000, startPositionY: 400 },
      { startPositionX: 1250, startPositionY: 320 },
      { startPositionX: 920, startPositionY: 320 }
    ]
  ];
}

export function setStartPositions() {
  const blueTeamPlayers = document.querySelectorAll('.player-blue-team');
  blueTeamPlayers.forEach((player, i) => {
    player.style.left = playersStartPositions[0][i].startPositionX + 'px';
    player.style.top = playersStartPositions[0][i].startPositionY + 'px';
  });

  const redTeamPlayers = document.querySelectorAll('.player-red-team');
  redTeamPlayers.forEach((player, i) => {
    player.style.left = playersStartPositions[1][i].startPositionX + 'px';
    player.style.top = playersStartPositions[1][i].startPositionY + 'px';
  });
}

canvas.addEventListener('dragover', (e) => {
  e.preventDefault();
});

let activePlayers;

players.forEach((player) => {
  player.addEventListener('dragstart', () => {
    activePlayers = document.querySelectorAll('.player__active');
    player.style.border = '2px solid white';

    if (activePlayers.length > 0) {
      activePlayers.forEach((activePlayer) => {
        activePlayer.dataset.startX = parseInt(activePlayer.style.left);
        activePlayer.dataset.startY = parseInt(activePlayer.style.top);
      });
    }
  });

  player.addEventListener('dragend', (e) => {
    const rect = canvas.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    const playerTeam = player.classList[1].split('-')[1];

    if (activePlayers.length > 0) {
      activePlayers.forEach((activePlayer) => {
        const deltaX = left - parseInt(player.dataset.startX);
        const deltaY = top - parseInt(player.dataset.startY);

        activePlayer.style.left =
          parseInt(activePlayer.dataset.startX) + deltaX + 'px';
        activePlayer.style.top =
          parseInt(activePlayer.dataset.startY) + deltaY + 'px';
      });
    } else {
      player.style.left = left - player.clientWidth / 1.6 + 'px';
      player.style.top = top - player.clientHeight / 1.6 + 'px';
      player.style.border = `2px solid ${playerTeam}`;
    }

    activePlayers.forEach((activePlayer) => {
      delete activePlayer.dataset.startX;
      delete activePlayer.dataset.startY;
    });
  });
});

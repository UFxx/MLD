const canvas = document.querySelector('#map-canvas');
const mapContainer = document.querySelector('.map-container');
const arrowMode = document.querySelector('#arrows-mode');

let startX;
let startY;
let selectionSquare;

canvas.addEventListener('mousedown', (e) => {
  if (e.altKey) {
    const selectionSquareWrapper = document.createElement('div');
    selectionSquareWrapper.classList.add('selection-square-wrapper');

    selectionSquare = document.createElement('div');
    selectionSquare.classList.add('selection-square');

    startX = e.clientX;
    startY = e.clientY;

    selectionSquare.style.left = startX + 'px';
    selectionSquare.style.top = startY + 'px';

    selectionSquareWrapper.appendChild(selectionSquare);
    mapContainer.appendChild(selectionSquareWrapper);

    const players = document.querySelectorAll('.player-container');

    const onMouseMove = (e) => {
      if (e.altKey) {
        const currentX = e.clientX;
        const currentY = e.clientY;

        const width = currentX - startX - 3;
        const height = currentY - startY - 3;

        players.forEach((player) => {
          const playerPositionX = parseInt(player.style.left);
          const playerPositionY = parseInt(player.style.top);

          const selectionLeftTop =
            currentX > playerPositionX &&
            currentY > playerPositionY &&
            startX < playerPositionX &&
            startY < playerPositionY;
          const selectionRightTop =
            currentX < playerPositionX &&
            currentY > playerPositionY &&
            startX > playerPositionX &&
            startY < playerPositionY;
          const selectionLeftBottom =
            currentX > playerPositionX &&
            currentY < playerPositionY &&
            startX < playerPositionX &&
            startY > playerPositionY;
          const selectionRightBottom =
            currentX < playerPositionX &&
            currentY < playerPositionY &&
            startX > playerPositionX &&
            startY > playerPositionY;

          if (
            selectionLeftTop ||
            selectionRightTop ||
            selectionLeftBottom ||
            selectionRightBottom
          ) {
            player.classList.add('player__active');
            player.style.border = '2px solid white';
          } else {
            player.classList.remove('player__active');
            player.style.border = `2px solid ${
              player.classList[1].split('-')[1]
            }`;
          }
        });

        if (width < 0) {
          selectionSquare.style.left = currentX + 'px';
          selectionSquare.style.width = -width + 'px';
        } else {
          selectionSquare.style.left = startX + 'px';
          selectionSquare.style.width = width + 'px';
        }

        if (height < 0) {
          selectionSquare.style.top = currentY + 'px';
          selectionSquare.style.height = -height + 'px';
        } else {
          selectionSquare.style.top = startY + 'px';
          selectionSquare.style.height = height + 'px';
        }
      }
    };

    const onMouseUp = () => {
      startX = 0;
      startY = 0;
      selectionSquareWrapper.remove();
      selectionSquare.remove();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
    };
    if (!arrowMode.checked) {
      selectionSquareWrapper.addEventListener('mousemove', onMouseMove);
      selectionSquareWrapper.addEventListener('mouseup', onMouseUp);
      selectionSquareWrapper.addEventListener('mouseleave', onMouseUp);
    }
  }
});

canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const players = document.querySelectorAll('.player-container');
  players.forEach((player) => {
    if (player.classList.contains('player__active')) {
      player.classList.remove('player__active');
      player.style.border = `2px solid ${player.classList[1].split('-')[1]}`;
    }
  });
});

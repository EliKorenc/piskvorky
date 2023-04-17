console.log('jéje');

// basic constats:
const circle = 'circle';
const cross = 'cross';

let currentPlayer = circle;

const currentPlayerElm = document.querySelector('.current-player');

//

const move = (event) => {
  // disabled overwriting o/x:
  event.target.disabled = true;
  // fun condition for choosing to move o/x markers into a square:
  if (currentPlayer === circle) {
    event.target.classList.add('square-circle');
  } else {
    event.target.classList.add('square-cross');
  }

  // fun condition to change the current player icon:
  if (currentPlayer === circle) {
    currentPlayer = cross;
  } else {
    currentPlayer = circle;
  }
  currentPlayerElm.classList.toggle('player-cross');
  currentPlayerElm.classList.toggle('player-circle');
};

// event listener:
document.querySelectorAll('.square').forEach((element) => {
  element.addEventListener('click', move);
});

// fun restart verification for the player:
const really = (event) => {
  if (confirm('Opravdu cheš začít znovu?')) {
    window.location.href = 'hra.html';
  } else {
    event.preventDefault();
  }
};

document.querySelector('.btn-restart').addEventListener('click', really);

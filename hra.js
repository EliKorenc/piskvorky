console.log('jéje');

const circle = 'circle';
const cross = 'cross';

let currentPlayer = circle;

const currentPlayerElm = document.querySelector('.current-player');

//

const move = (event) => {
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
document.querySelector('button:nth-child(1)').addEventListener('click', move);
document.querySelector('button:nth-child(2)').addEventListener('click', move);
document.querySelector('button:nth-child(3)').addEventListener('click', move);
document.querySelector('button:nth-child(4)').addEventListener('click', move);
document.querySelector('button:nth-child(5)').addEventListener('click', move);
document.querySelector('button:nth-child(6)').addEventListener('click', move);
document.querySelector('button:nth-child(7)').addEventListener('click', move);
document.querySelector('button:nth-child(8)').addEventListener('click', move);
document.querySelector('button:nth-child(9)').addEventListener('click', move);
document.querySelector('button:nth-child(10)').addEventListener('click', move);

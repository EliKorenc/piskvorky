import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4/dist/index.js';

console.log('jéje');

// basic constants:
const circle = 'circle';
const cross = 'cross';

let currentPlayer = circle;

const currentPlayerElm = document.querySelector('.current-player');

// whole move function:
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

  // fun to use .map to transform element of array to string for fun findWinner:
  const pole = document.querySelectorAll('button');
  const poleCtverecku = Array.from(pole);
  //console.log(pole);
  //console.log(poleCtverecku);

  const herniPole = poleCtverecku.map((ctverecek) => {
    if (ctverecek.classList.contains('square-circle')) {
      return 'o';
    } else if (ctverecek.classList.contains('square-cross')) {
      return 'x';
    }
    return '_';
  });
  //console.log(herniPole);

  // fun findWinner with alert for player:
  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload();
    }, 250);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert(`Hra skončila remízou.`);
      location.reload();
    }, 250);
  }
};

// event listener to all square:
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

//

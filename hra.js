console.log('jéje');

let currentPlayer = 'circle';

const circleLocation = (event) => {
  event.target.classList.add('square-circle');
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', circleLocation);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', circleLocation);

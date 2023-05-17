'use strict';
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let CurrentScore = 5;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number';
  } else if (guess == guessNumber) {
    document.querySelector('.message').textContent = 'You Win!!';
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.fontSize = '8rem';
    if (highScore < CurrentScore) {
      highScore = CurrentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > guessNumber) {
    if (CurrentScore > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      CurrentScore--;
      document.querySelector('.score').textContent = CurrentScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost!!';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < guessNumber) {
    if (CurrentScore > 0) {
      document.querySelector('.message').textContent = 'Too Low!';
      CurrentScore--;
      document.querySelector('.score').textContent = CurrentScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost!!';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start guessing...';
  CurrentScore = 5;
  document.querySelector('.score').textContent = CurrentScore;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '4em';
  document.querySelector('.guess').value = '';
});

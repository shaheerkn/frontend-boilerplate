const countdownEl = document.querySelector('.countdown');
const daysEl = countdownEl.querySelector('.countdown__item--days .h1');
const hoursEl = countdownEl.querySelector('.countdown__item--hours .h1');
const minutesEl = countdownEl.querySelector('.countdown__item--minutes .h1');
const secondsEl = countdownEl.querySelector('.countdown__item--seconds .h1');

// Format: year-month-day hour:minutes:seconds

let targetData = `2024-12-2 12:00:00`;

if (targetData) {
  const endDate = new Date(targetData);
  let secondsLeft = (endDate.getTime() - new Date().getTime()) / 1000;

  function updateCountdown() {
    secondsLeft -= 1;

    const days = Math.floor((secondsLeft / 86400) % 30);
    daysEl.textContent = days < 10 ? '0' + days : days;

    const hours = Math.floor((secondsLeft % 86400) / 3600);
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;

    const minutes = Math.floor((secondsLeft % 3600) / 60);
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;

    const seconds = Math.floor(secondsLeft % 60);
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;

    if (secondsLeft <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
    }
  }

  setInterval(updateCountdown, 1000);
}
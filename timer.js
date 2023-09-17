const bannerMinutesElement = document.getElementById('banner_minutes');
const bannerSecondsElement = document.getElementById('banner_seconds');

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function startBannerCountdown() {
  let minutes = parseInt(bannerMinutesElement.innerText);
  let seconds = parseInt(bannerSecondsElement.innerText);

  if (minutes === 0 && seconds === 0) {
    bannerMinutesElement.innerText = '00';
    bannerSecondsElement.innerText = '00';
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  bannerMinutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  bannerSecondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;

  setTimeout(startBannerCountdown, 1000);
}

function startFixedTimerCountdown() {
  let minutes = parseInt(minutesElement.innerText);
  let seconds = parseInt(secondsElement.innerText);

  if (minutes === 0 && seconds === 0) {
    minutesElement.innerText = '00';
    secondsElement.innerText = '00';
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;

  setTimeout(startFixedTimerCountdown, 1000);
}

startBannerCountdown();
startFixedTimerCountdown();
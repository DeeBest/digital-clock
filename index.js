const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

updateTime();

function updateTime() {
  let hoursText = document.getElementById('hours');
  hoursText.textContent = new Date().getHours();
  hoursText.textContent < 10
    ? (hoursText.textContent = '0' + hoursText.textContent)
    : (hoursText.textContent = hoursText.textContent);

  let minutesText = document.getElementById('minutes');
  minutesText.textContent = new Date().getMinutes();
  minutesText.textContent < 10
    ? (minutesText.textContent = '0' + minutesText.textContent)
    : (minutesText.textContent = minutesText.textContent);

  let secondsText = document.getElementById('seconds');
  secondsText.textContent = new Date().getSeconds();
  secondsText.textContent < 10
    ? (secondsText.textContent = '0' + secondsText.textContent)
    : (secondsText.textContent = secondsText.textContent);

  let amPm = document.getElementById('am-pm');

  if (hoursText.textContent >= 12) {
    amPm.textContent = 'PM';
    amPm.style.backgroundColor = 'black';
    amPm.style.color = 'white';
    amPm.style.opacity = '0.7';
  } else {
    amPm.textContent = 'AM';
    amPm.style.backgroundColor = 'white';
    amPm.style.color = 'black';
    amPm.style.opacity = '0.7';
  }
  setTimeout(() => {
    updateTime();
  }, 1000);
}

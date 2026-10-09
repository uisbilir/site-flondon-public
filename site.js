// Local clock only. No analytics, remote requests, cookies or storage.
const clock = document.querySelector('#local-time');
function updateClock() {
  if (clock) clock.textContent = new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());
}
updateClock();
setInterval(updateClock, 1000);

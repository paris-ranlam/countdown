document.addEventListener('DOMContentLoaded', function () {
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const currentTime = new Date();
    const newYear = new Date(currentTime.getFullYear() + 1, 0, 1);
    const timeRemaining = newYear - currentTime;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Update every second
  setInterval(updateCountdown, 1000);

  // Initial call to display countdown immediately
  updateCountdown();
});
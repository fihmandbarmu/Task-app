// QuestDo Main JavaScript Logic
let tasks = [];
let stickers = [];
let timerInterval = null;
let secondsLeft = 1800; // 30 Minutes

function startTimer() {
  timerInterval = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      showCompletionPrompt();
    }
  }, 1000);
}

function showCompletionPrompt() {
  document.getElementById('modal').classList.remove('hidden');
}

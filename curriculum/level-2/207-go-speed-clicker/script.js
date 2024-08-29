document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const timerDisplay = document.getElementById('timer');

    let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    let countdown = 30;
    let timerInterval;

    // Update display
    function updateDisplay() {
        clickCountDisplay.textContent = clickCount;
        timerDisplay.textContent = countdown;
    }

    // Start countdown timer
    function startTimer() {
        timerInterval = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                clearInterval(timerInterval);
                clickButton.disabled = true;
                countdown = 0;
            }
            updateDisplay();
        }, 1000);
    }

    // Initialize display
    updateDisplay();

    // Event listener for button clicks
    clickButton.addEventListener('click', () => {
        if (countdown > 0) {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            updateDisplay();
        }
    });

    // Start the countdown timer
    startTimer();
});

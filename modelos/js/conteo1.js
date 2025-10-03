//CONTEGGIO ALLA ROVESCIA 1

function startCountdown(target_1_Date) {
    const daysElement = document.getElementById('days-1');
    const hoursElement = document.getElementById('hours-1');
    const minutesElement = document.getElementById('minutes-1');
    const secondsElement = document.getElementById('seconds-1');

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = target_1_Date.getTime() - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-timer').innerHTML = "Countdown Finished!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown(); // Initial call to display immediately
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

// Example usage: Set a target date (e.g., December 31, 2025, 23:59:59)
const target_1_Date = new Date("January 01, 2026 00:00:00");
startCountdown(target_1_Date);


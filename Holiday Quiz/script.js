const holidays = [
    { name: "New Year’s Day", name: "New Year", clue: "Janauary 1" },
    { name: "Maundy Thursday", clue: "April 6" },
    { name: "Good Friday", clue: "April 7" },
    { name: "Araw ng Kagitingan", clue: "April 10 (Monday nearest April 9)" },
    { name: "Eid’l Fitr", name: "Eidl Fitr", clue: "April 21 (Friday)" },
    { name: "Labor Day", clue: "May 1 (Monday)" },
    { name: "Independence Day", clue: "June 12 (Monday)" },
    { name: "Eid’l Adha", name: "Eidl Adha", clue: "June 28 (Wednesday)" },
    { name: "National Heroes Day", clue: "August 28 (Monday)" },
    { name: "Bonifacio Day", clue: "November 27 (Monday nearest November 30)" },
    { name: "Christmas Day", clue: "December 25 (Monday)" },
    { name: "Rizal Day", clue: "December 30 (Saturday)" },
    { name: "EDSA People Power Revolution Anniversary", clue: "February 25 (Saturday)" },
    { name: "Black Saturday", clue: "April 8" },
    { name: "Ninoy Aquino Day", clue: "August 21 (Monday)" },
    { name: "All Saints Day", clue: "November 1 (Wednesday)" },
    { name: "Feast of the Immaculate Conception of Mary", clue: "December 8 (Friday)" },
    { name: "Last Day of the Year", clue: "December 31 (Sunday)" }
];

let currentHoliday = null;
let attempts = 0;
const maxAttempts = 3;

function displayClue() {
    const clueDisplay = document.getElementById("clue");
    if (currentHoliday) {
        const clue = currentHoliday.clue;
        clueDisplay.innerText = "Clue: " + clue;
    } else {
        clueDisplay.innerText = "No holiday to guess.";
    }
}

function newGame() {
    const randomIndex = Math.floor(Math.random() * holidays.length);
    currentHoliday = holidays[randomIndex];
    attempts = 0;
    displayClue();
    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = "Attempts: " + attempts;
    document.getElementById("guess").value = "";
    document.getElementById("checkButton").disabled = false;
}

function checkGuess() {
    const guess = document.getElementById("guess").value.trim();
    if (guess.toLowerCase() === currentHoliday.name.toLowerCase()) {
        document.getElementById("message").innerText = "CORRECT! You guessed the holiday!";
        document.getElementById("checkButton").disabled = true;
    } else {
        attempts++;
        document.getElementById("attempts").innerText = "Attempts: " + attempts;
        if (attempts >= maxAttempts) {
            document.getElementById("message").innerText = "WRONG!, you've used all your attempts. The holiday was: " + currentHoliday.name;
            document.getElementById("checkButton").disabled = true;
        }
    }
}



document.getElementById("newGameButton").addEventListener("click", newGame);
document.getElementById("checkButton").addEventListener("click", checkGuess);

window.addEventListener("load", newGame);

/* document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("autoplayAudio");
    audio.play();
}); */
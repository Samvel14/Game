let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;
function gelElement(id) {
    return document.getElementById(id)
}

function timer() {
    setTimeout(finish, seconds * 1000);
    gelElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        main();
        seconds--;
        gelElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        if (seconds === 8) {
            gelElement("time").style.color = "green";
        }
        if (seconds == 5) {
            gelElement("time").style.color = "red";
        }
    }, 1000);
}
function getRandomCountry() {
    return conutiies[Math.floor(Math.random(countries.length - 1) * 10)]
}

function main() {
    coun = getRandomCountry();
    getElement("flag").src = coun.flag;
}




function check() {
    let input;
    try {
        input = document.querySelector('input[name="option"]:checked').value
    } catch {
        return
    }
    if (input == "Հելիում") {
        correctAnswer++;
        gelElement("score").innerHTML = correctAnswer;

    } else {

        incorrectAnswer++;
    }
    clearInterval(checkInerval);
}
function finish() {
    clearInterval(checkInerval);
    let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    gelElement("alertaccuracy").innerHTML = ` qo ardyunqn  e ${percentage}%`;
}
let checkInerval = setInterval(check, 50);
timer();

}




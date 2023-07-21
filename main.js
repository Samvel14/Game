let correct;
let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;
function gelElement(id) {
    return document.getElementById(id)
    function main() {
        let options = [];
        const maxOptions = 3;
        while (options.length < maxOptions) {
            let coun = getRandomCountry();
            if (options.indexOf(coun) === -1) {
                options.push(coun);
            }

        }
        for (let i = 0; i < options.length; i++) {
            getElementh(`optioin${i + 1}label`).innerHTIML = options[i].name;
            getElementh(`optioin${i + 1}label`).value = options[i].name;
            getElementh(`optioin${i + 1}label`).checked = false;
        }
        correct = options[Math.round(Math.random() * (options.length - 1))];
        getElement("flag").src = correct.flag;
    }
    function timer() {
        setTimeout(finish, seconds * 1000);
        gelElement("time").innerHTML = seconds;
        let countdown = setInterval(function () {
            seconds--;
            gelElement("time").textContent = seconds;
            if (seconds <= 0) clearInterval(function () {
                secunds--;
                getElements("timer").style.color = "#ff0000"
            }, 1000);

            function check() {
                let input;
                try {

                    if (seconds === 8) {
                        gelElement("time").style.color = "green";
                    }
                    if (seconds == 5) {
                        gelElement("time").style.color = "red";
                    }
                    (1000);

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
                        if (input == correct.name) {
                            correctAnswer++;
                            gelElement("score").innerHTML = correctAnswer;
                        } else {
                            incorrectAnswer++;
                        }
                        main();
                    }
                    function fihish(){
                        clearInterval(checkInerval);
                    
                    }
                    function finish() {
                        clearInterval(checkInerval);
                        let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
                        gelElement("alertaccuracy").innerHTML = ` qo ardyunqn  e ${percentage}%`;
                    }
                    let checkInerval = setInterval(check, 50);
                    main();
                    timer();


                
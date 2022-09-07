//Create html structure of page
    //Create header with title and nav link for the scores.html page
    //Create opening page w/ div "data-state = visible" h2 and start button
    //Create 4 sections w/ div "class = questions" "id=question 1, 2, 3, 4" and nested h2 (Question)
    //Create question/answer objects and add answers in array (loop through them and textContent each one in a radio element or li element)
//Design layout w/ CSS
//When start button is pressed, hide opening page, make question 1 visible, and start the timer from 90 seconds using setInterval()
//Answering the question
    //When correct answer is selected, display a green message (maybe <p> tag) saying "Correct!"
        //Increment correct answer variable
    //When incorrect answer is selected, display a red message saying "Sorry, that is incorrect."
        //When incorrect answer is selected, decrement time by 30 seconds
    //After 1 second of selecting answer, hide question 1 page and make visible question 2 page
    //Continue same method as above until question 4 is answered
//After question 4 has been answered, display page with # of correct answers w/ a continue button
//After continue button is selected, go to page where user can add initials
    //Store initials and score in local storage
    //Maybe store in an array so multiple scores can be stored
//After initials are inputted and stored, go back to opening page
//Create High scores page in html
    //Create header w/ nav link to index.html page to return to quiz
    //Create an unorganized list w/ "id = high-scores"
    //getList() from local storage and place under ul in li elements
        //Both the initial and corresponding score
    //Sort array in order of highest number

var displayTimer = document.getElementById("timer");
var container = document.getElementById("container");
var openingPage = document.getElementById("opening-page");
var startBtn = document.getElementById("start-btn");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var outcomeMsg = document.getElementById("answer-outcome");
var finalScoreDisplay = document.getElementById("final-score-display");
var congratsMsg = document.getElementById("display-msg");
var initialsInput = document.getElementById("initials-input")
var correctAnswers = 0;
var secondsLeft = 90;
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
finalScoreDisplay.style.display = "none";

function displayQ1() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[0].topic;
    question1.appendChild(h1);
    question1.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px;")
    for (var i = 0; i < questions[0].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[0].choices[i];
        div.appendChild(button);
        button.setAttribute("style", "display: block; margin: 20px auto;");
        button.addEventListener("click", function(e) {
            if (e.target.textContent === questions[0].answer) {
                outcomeMsg.textContent = "Correct";
                outcomeMsg.setAttribute("style", "color: green; font-size: 20px; font-weight: 700;");
                correctAnswers++;
            } else {
                outcomeMsg.textContent = "Incorrect";
                outcomeMsg.setAttribute("style", "color: red; font-size: 20px; font-weight: 700;");
                secondsLeft = secondsLeft - 30;
            }
            question1.style.display = "none";
            question2.style.display = "block";
            displayQ2();
        }) 
    }
};

function displayQ2() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[1].topic;
    question2.appendChild(h1);
    question2.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px;")
    for (var i = 0; i < questions[1].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[1].choices[i];
        div.appendChild(button);
        button.setAttribute("style", "display: block; margin: 20px auto;");
        button.addEventListener("click", function(e) {
            if (e.target.textContent === questions[1].answer) {
                outcomeMsg.textContent = "Correct";
                outcomeMsg.setAttribute("style", "color: green; font-size: 20px; font-weight: 700;");
                correctAnswers++;
            } else {
                outcomeMsg.textContent = "Incorrect";
                outcomeMsg.setAttribute("style", "color: red; font-size: 20px; font-weight: 700;");
                secondsLeft = secondsLeft - 30;
            }
            question2.style.display = "none";
            question3.style.display = "block";
            displayQ3();
        })
    }
};

function displayQ3() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[2].topic;
    question3.appendChild(h1);
    question3.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px;")
    for (var i = 0; i < questions[2].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[2].choices[i];
        div.appendChild(button);
        button.setAttribute("style", "display: block; margin: 20px auto;");
        button.addEventListener("click", function(e) {
            if (e.target.textContent === questions[2].answer) {
                outcomeMsg.textContent = "Correct";
                outcomeMsg.setAttribute("style", "color: green; font-size: 20px; font-weight: 700;");
                correctAnswers++;
            } else {
                outcomeMsg.textContent = "Incorrect";
                outcomeMsg.setAttribute("style", "color: red; font-size: 20px; font-weight: 700;");
                secondsLeft = secondsLeft - 30;
            }
            question3.style.display = "none";
            question4.style.display = "block";
            displayQ4();
        })
    }
};

function displayQ4() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[3].topic;
    question4.appendChild(h1);
    question4.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px;")
    for (var i = 0; i < questions[3].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[3].choices[i];
        div.appendChild(button);
        button.setAttribute("style", "display: block; margin: 20px auto;");
        button.addEventListener("click", function(e) {
            if (e.target.textContent === questions[3].answer) {
                outcomeMsg.textContent = "Correct";
                outcomeMsg.setAttribute("style", "color: green; font-size: 20px; font-weight: 700;");
                correctAnswers++;
            } else {
                outcomeMsg.textContent = "Incorrect";
                outcomeMsg.setAttribute("style", "color: red; font-size: 20px; font-weight: 700;");
                secondsLeft = secondsLeft - 30;
            }
            question4.style.display = "none";
            finalScoreDisplay.style.display = "block";
            displayMsg();
        })
    }
};

function displayMsg() {
    congratsMsg.textContent = `Congratulations! You got ${correctAnswers} correct.`
    var p = document.createElement("p");
    p.setAttribute("style", "font-size: 16px; font-weight: 400;")
    p.textContent = `Input your initials below to be added to the scoreboard!`;
    congratsMsg.appendChild(p);    
};


startBtn.addEventListener("click", function() {
    secondsLeft = 90;
    displayTimer.textContent = `You have ${secondsLeft} seconds left!`
    var timer = setInterval(function() {
        secondsLeft--;
        displayTimer.textContent = `You have ${secondsLeft} seconds left!`
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
        if (finalScoreDisplay.style.display === "block") {
            clearInterval(timer);
            displayTimer.textContent = " "
        }
    }, 1000);
    openingPage.style.display = "none";
    displayQ1();
});

finalScoreDisplay.addEventListener("submit", function(){
var initials = initialsInput.value;
    if (initials !== "") {
        var userScore = JSON.parse(localStorage.getItem("score")) || [];
        var userInput = {
            score: correctAnswers,
            userInitials: initials,
        };
        userScore.push(userInput);
        localStorage.setItem("score", JSON.stringify(userScore));
    }
});
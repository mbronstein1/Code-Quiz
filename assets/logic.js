//(DONE) Create html structure of page
    //(DONE) Create header with title and nav link for the scores.html page
    //(DONE) Create opening page w/ div "data-state = visible" h2 and start button
    //(DONE) Create 4 sections w/ div "class = questions" "id=question 1, 2, 3, 4" and nested h2 (Question)
    //(DONE) Create question/answer objects and add answers in array (loop through them and textContent each one in a radio element or li element)
//(DONE) Design layout w/ CSS
//(DONE) When start button is pressed, hide opening page, make question 1 visible, and start the timer from 60 seconds using setInterval()
//(DONE) Answering the question
    //W(DONE) hen correct answer is selected, display a green message (maybe <p> tag) saying "Correct!"
        //(DONE) Increment correct answer variable
    //(DONE) When incorrect answer is selected, display a red message saying "Incorrect."
        //(DONE) When incorrect answer is selected, decrement time by 30 seconds
    //(DONE) After selecting answer, hide question 1 page and make visible question 2 page
    //(DONE) Continue same method as above until question 4 is answered
//(DONE) After question 4 has been answered, display page with # of correct answers w/ an input for initials
    //(DONE) Store initials and score in local storage
        //(DONE) Store in an array so multiple scores can be stored
//(DONE) After initials are inputted and stored, go to high scores page
//(DONE) Create High scores page in html
    //(DONE) Create header similar to index.html page with home page button to return to quiz
    //(DONE) Dynamically create <p> elements with textContent that is the value of initials and score stored in local storage
    //(DONE) getList() from local storage and place under heading elements in <p>
        //(DONE) Both the initial and corresponding score
    //Sort array in order of highest number (tried and couldn't figure it out)

//Create variables
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
var secondsLeft = 60;
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
finalScoreDisplay.style.display = "none";

//function to display question1 - reaching questions array from questions.js
function displayQ1() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[0].topic;
    question1.appendChild(h1);//Creating and appending h1 "Topic/Question" to html
    question1.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px; color: green")
    for (var i = 0; i < questions[0].choices.length; i++) {//Looping through the questions array
        var button = document.createElement("button");
        button.textContent = questions[0].choices[i];
        div.appendChild(button);//Creating and appending a button for each question in the q1 object within the questions array
        button.setAttribute("class", "quiz-buttons");
        button.addEventListener("click", function(e) {
            if (e.target.textContent === questions[0].answer) {//If textContent of targeted element equals the answer property within the object, then it is correct
                outcomeMsg.textContent = "Correct";
                outcomeMsg.setAttribute("style", "color: green; font-size: 20px; font-weight: 700;");
                correctAnswers++;
            } else { //Otherwise decrease time by 30 seconds
                outcomeMsg.textContent = "Incorrect";
                outcomeMsg.setAttribute("style", "color: red; font-size: 20px; font-weight: 700;");
                secondsLeft = secondsLeft - 30;
            }
            question1.style.display = "none";//Hide current question
            question2.style.display = "block";//Show next question
            displayQ2();//Execute next question function and repeat
        }) 
    }
};

function displayQ2() {
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    h1.textContent = questions[1].topic;
    question2.appendChild(h1);
    question2.appendChild(div);
    h1.setAttribute("style", "margin-bottom: 40px; color: green")
    for (var i = 0; i < questions[1].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[1].choices[i];
        div.appendChild(button);
        button.setAttribute("class", "quiz-buttons");
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
    h1.setAttribute("style", "margin-bottom: 40px; color: green")
    for (var i = 0; i < questions[2].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[2].choices[i];
        div.appendChild(button);
        button.setAttribute("class", "quiz-buttons");
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
    h1.setAttribute("style", "margin-bottom: 40px; color: green")
    for (var i = 0; i < questions[3].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[3].choices[i];
        div.appendChild(button);
        button.setAttribute("class", "quiz-buttons");
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
            finalScoreDisplay.style.display = "block";//Display finalScoreDisplay page
            displayMsg();
        })
    }
};

function displayMsg() {//Displays how many questions were answered correctly
    congratsMsg.textContent = `Congratulations! You got ${correctAnswers} correct.`
    var p = document.createElement("p");
    p.setAttribute("style", "font-size: 16px; font-weight: 400;")
    p.textContent = `Input your initials below to be added to the scoreboard!`;
    congratsMsg.appendChild(p);    
};


startBtn.addEventListener("click", function() {//Starts game by clicking button
    secondsLeft = 60;
    displayTimer.textContent = `You have ${secondsLeft} seconds left!`//Displays time left
    var timer = setInterval(function() {
        secondsLeft--;//decrements time
        displayTimer.textContent = `You have ${secondsLeft} seconds left!`
        if (secondsLeft <= 0) {//If timer is at or below zero, clear timer and all questions and go to last page
            clearInterval(timer);
            displayTimer.textContent = " ";
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            finalScoreDisplay.style.display = "block";
            displayMsg()
        }
        if (finalScoreDisplay.style.display === "block") {//If the final score page is displayed before the timer is over, clear interval and time display text
            clearInterval(timer);
            displayTimer.textContent = " ";
        }
    }, 1000);
    openingPage.style.display = "none";//hide opening page
    displayQ1();
});

finalScoreDisplay.addEventListener("submit", function(){
var initials = initialsInput.value;//storing the input value in a variable
    if (initials !== "") {
        var userScore = JSON.parse(localStorage.getItem("scores")) || [];//Either get stored items from local storage and convert to object or if there are no items, store empty array
        var userInput = {
            score: correctAnswers,
            userInitials: initials,
        };
        userScore.push(userInput);//Push items we just got from local storage into array
        localStorage.setItem("scores", JSON.stringify(userScore));//Return items to local storage in string-form
        initialsInput = "";//Clear input of any strings
    }
});
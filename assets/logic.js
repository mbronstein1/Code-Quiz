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
var outcomeMsg = document.querySelectorAll(".answer-outcome");
var correctAnswers = 0;
var secondsLeft = 90;

startBtn.addEventListener("click", function() {
    displayTimer.textContent = `You have ${secondsLeft} seconds left!`
    var timer = setInterval(function() {
        secondsLeft--;
        displayTimer.textContent = `You have ${secondsLeft} seconds left!`
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
    openingPage.style.display = "none";
    displayQ1();
})

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
                outcomeMsg[0].textContent = "Correct";
                outcomeMsg[0].setAttribute("style", "color: green");
                correctAnswers++;
            } else {
                outcomeMsg[0].textContent = "Incorrect";
                outcomeMsg[0].setAttribute("style", "color: red");
                secondsLeft = secondsLeft - 30;
            }
            question1.setAttribute("style", "display: none;")
        })
    }
}
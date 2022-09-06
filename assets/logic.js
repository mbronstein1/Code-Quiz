//Create html structure of page
    //Create header with title and nav link for the scores.html page
    //Create opening page w/ div "data-state = visible" h2 and start button
    //Create 4 sections w/ div "class = questions" "data-state = hidden" "id=question 1, 2, 3, 4" and nested h2 (Question) and 4 radio inputs
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
var scores = document.getElementById("scores");
var initials = document.getElementById("initials");

init();

var highScores = [];

function renderScores() {
    scores.textContent = "";
    initials.textContent = "";
    for (var i = 0; i < highScores.length; i++) {//Loop through each item in array
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        p1.textContent = highScores[i].userInitials;
        p2.textContent = highScores[i].score;
        p1.style.color = "green";
        p2.style.color = "green";
        initials.appendChild(p1);//Create and attach property values to the parents
        scores.appendChild(p2);
    }
};


//Trying (and failing) to sort by highest score
// highScores.sort(function (a, b) {
//     return b.price - a.price
// });


function init() {//Upon page loading, get items in local storage and execute rending them on the page
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        highScores = storedScores;
    }
    renderScores();
};

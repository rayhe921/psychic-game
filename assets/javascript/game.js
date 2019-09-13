
// variables

var winCount = 0;
var loseCount = 0;
var guessLeft = 5;
var guessWhat = [];
var random;

var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",

    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// random letter generator


function randomLetter() {
    random = letterArr[Math.floor(Math.random() * letterArr.length)];

    console.log(random);
}

randomLetter();

// reset game

var reset = function () {
    guessLeft = 5;
    guessWhat = [];
    document.getElementById("guessWhat").innerHTML = guessWhat;
    document.getElementById("guessLeft").innerHTML = guessLeft;
    randomLetter();
}


// User Input

document.onkeyup = function (event) {

    var myGuess = event.key;

    if (myGuess == random) {
        winCount++;
        guessWhat = [];
        document.getElementById('winCount').innerHTML = winCount;
        reset();
    }

    else {
        guessLeft--;
        document.getElementById('guessLeft').innerHTML = guessLeft;

        if (guessLeft === 0) {
            document.getElementById('loseCount').innerHTML = loseCount += 1;
            random;
            reset();

        }

    }

    if (guessWhat.indexOf(myGuess) >= 0) {
    }
    else {
        guessWhat.push(myGuess);
        document.getElementById('guessWhat').innerHTML = guessWhat;
        console.log(guessWhat);
    }
};
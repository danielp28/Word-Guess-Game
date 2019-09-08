
window.onload = function () {



    var words = ["ollie", "kickflip", "treflip", "shoveit", "bigspin", "bigflip",];
    var guessesRemaining = 7;
    var randomWord = words[Math.floor((Math.random() * words.length))];
    var underScoresSpaces = "";
    var letterGuess = [];
    var index = [];
    var trueFalse = false;
    var wins = 0

    underScores();

    document.onkeyup = function (event) {

        letterGuess.push(String.fromCharCode(event.keyCode));


        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letterGuess[letterGuess.length - 1]) {
                trueFalse = true;
                index.push(i);
                var splitWord = underScoresSpaces.split("");



                for (var j = 0; j < index.length; j++) {
                    splitWord[index[j]] = letterGuess[letterGuess.length - 1];
                    indexes = [];
                    underScoresSpaces = splitWord.join("");
                }
            }
        }
        if (trueFalse) {
            document.getElementById("random-word").innderHTML = underScoresSpaces;
            letterGuess.pop();
        } else {
            guessesRemaining--
            document.getElementById("letters-guessed").innerHTML = letterGuess;
            document.getElementById("remaining-guesses").innerHTML = guessesRemaining
        }
    
        trueFalse = false;
        checkWins();
    }
    

    function underScores() {
        for (var i = 0; i < randomWord.length; i++) {
            underScoresSpaces += "_";
        }
        document.getElementById("random-word").innerHTML = underScoresSpaces
    }

    function checkWins() {
        if (underScoresSpaces === randomWord) {
            wins++;
            document.getElementById("win-counter").innerHTML = wins;
            alert("You did it, refresh to play again");
        } else if (guessesRemaining === 0) {
            alert("Nice try, maybe next time");
            document.getElementById("random-word").innerHTML = randomWord;
        }
    }


















}

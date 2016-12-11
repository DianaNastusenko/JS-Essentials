function startGame(){
    var playAgain = confirm("Do you want play the game?");
        if (!playAgain) {
        console.log("Today you will not win the jackpot, but you could");
    }
    return playAgain;
}

function continueGame(){
    var play = confirm('Do you want to play the game again?');
    return play;
}

function generateNumberByComputer() {
    return Math.floor(Math.random()*5)
}

function askUserTheNumber() {
    var resultOfQuestion = prompt("Please, enter the number from 0 to 5");
    while (!resultOfQuestion)
        resultOfQuestion = prompt("Please, enter the number from 0 to 5");
    return resultOfQuestion;
}

function isEqual(numbByComputer, numbByUser) {
    if (numbByComputer == numbByUser) {
        alert("You are right, the number is " + numbByComputer);
        return true;
    } else {
        alert("Try again!");
        return false;
    }
}


function playGame(countOfGame,computerNumber){
    var price = 10 , userWin = 0;
    for (var i = 0; i < 3; i++) {
            userNumber = askUserTheNumber();
            var isWin = isEqual(computerNumber, userNumber);
            if (isWin) {
                if(countOfGame==1)
                    {
                        userWin+=price*countOfGame;
                    }
                else {
                    userWin+=price*countOfGame*3;
                }
                break;
            }
        price=Math.floor(price/2);
    }
    console.log("your win - "+ userWin+"$")
}

function main() {
    var playing = startGame();
    var countOfGame=1;
    while (playing) {
        var computerNumber = generateNumberByComputer();
        playGame(countOfGame,computerNumber)
        countOfGame++;
        playing=continueGame();
    }
    var countOfGame=1;
}

main();
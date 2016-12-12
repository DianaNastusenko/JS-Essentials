function generateNumberByComputer() {
    var generetedNumber = parseInt(Math.random() * 100);
    return generetedNumber;
}

function askUserTheNumber() {
    var resultOfQuestion = prompt("Please, enter the number");
    
    return resultOfQuestion;
}

function isEqual(numbByComputer, numbByUser) {
    if (numbByComputer == numbByUser) {
        alert("You are right, the number is " + numbByComputer);
        return true;
    } else if (numbByComputer > numbByUser) {
        alert("Our number is higher, try again");
        return false;
    } else if (numbByComputer < numbByUser) {
        alert("Our number is lower, try again");
        return false;
    }
}

function main() {
    while (1) {
        var computerNumber = generateNumberByComputer();
        var userNumber = askUserTheNumber();
        
        if (!userNumber) {
            return;
        }
        var bool = isEqual(computerNumber, userNumber);
        while (!bool) {
            userNumber = askUserTheNumber();
        if (!userNumber) {
            return;
        }
            bool = isEqual(computerNumber, userNumber);
        }
        var playAgain = prompt("Do you want play again? (1-yes; 0-no)");
        if (playAgain == 1) {
            continue;
        } else if (playAgain == 0) {
            return;
        } else {
            playAgain = prompt("Choose only 1 or 0!Play again? (1-yes; 0-no)")
        }
    }
}

main();
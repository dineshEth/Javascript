let randomNumber = Math.floor(Math.random()*100 +1);

let prevGuess = []

let newElement;
let play = true;

const userSubmit = document.querySelector('#submit');
const prevTrail =  document.querySelector("#prevGuess");
const remainingTrails =  document.querySelector('#remainingTrials')
const userInput = document.querySelector("#userNumber");


if(play) {
    userSubmit.addEventListener('click',() => {

        Validate(parseInt(userInput.value));
    });
}

function Validate(number) {
    if(number == ' ' || number == null || number == undefined || isNaN(number)) {
        alert("Enter a valid number");
    }
    else if(number < 0 || number > 100) {
        alert("Enter a numberbetween 1 to 100");
    }
    else{
        if(number < randomNumber) {
            displayMessage("Number is TOO small");
        }
        else if(number > randomNumber) {
            displayMessage("Number is TOO large");
        }
        checkNumber(number);
    }
}

function displayMessage(message) {
    let msg =  document.querySelector("#message");
    msg.innerHTML =  `${message}`;
}

function checkNumber(number) {
    if(number === randomNumber) {
        const element =  document.createElement("div");
        element.className = "description highlight";
        element.id= 'win';
        element.innerHTML = `You Guessed it Right!`
        container.appendChild(element);
        // alert("BOOM! You Won");
        endGame();
    }
    else{
        userInput.value = ""
        prevGuess.push(number);
        prevTrail.innerHTML += `${number}, `;
        remainingTrails.innerHTML = `${parseInt(remainingTrails.innerHTML) - 1}`;
        if(parseInt(remainingTrails.innerHTML) === 0){
            endGame();
        }
    }
}

function endGame() {
    displayMessage("GAMEOVER")
    play= false;
    document.querySelector("#userNumber").setAttribute('disabled','');
    const container = document.querySelector('#container');

    const element =  document.createElement("div");
    element.className = "description";
    element.id= 'lose';
    element.innerHTML = `The random number was ${randomNumber}`
    container.appendChild(element);

    
    newElement = document.createElement('div');
    newElement.className = "description button";
    newElement.id = "newGame"
    newElement.innerHTML = `New Game`
    container.appendChild(newElement);
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
            const win = document.getElementById('win');
            win.remove();
            play= true;
            prevTrail.innerHTML =''
            displayMessage("")
            let ele = document.getElementById('container');
            ele.removeChild(document.querySelector("#lose"));
            remainingTrails.innerHTML = `${10}`
            document.querySelector("#userNumber").removeAttribute('disabled');
            userSubmit.removeAttribute('disabled');
            prevGuess = [];  
            randomNumber = Math.floor(Math.random()*100 + 1);
            newGameButton.remove();
    });
}

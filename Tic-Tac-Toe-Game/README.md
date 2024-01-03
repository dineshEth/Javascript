<h1>Tic Tac Toe Game</h1>

<h1>Solution Code</h1>

```javascript

const boxes = document.querySelectorAll("#box");
const resetBox =  document.querySelector("#reset");
let winner = document.querySelector('.winner');

let player1 = true;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click',(e)=>{
        if(player1 === true){
            box.innerHTML = 'X'
            player1 = false;
        }
        else{
            box.innerHTML = 'O';
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    });
})

function checkWinner() {
    for(let pattern of winningPatterns ){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            console.log(pos1,pos2,pos3);
            if(pos1 == pos2 && pos2 == pos3){
                endGame(pos1);
            }
        }
    }
}

function endGame(winner){
    boxes.forEach((box) =>{
        box.disabled = true;
    })
    newGame(winner);
}

function newGame (win) {
    winner.innerHTML = `${win} Won`;
    resetBox.innerHTML = "Play Again"
}

resetBox.addEventListener('click', reset);
function reset(){
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerHTML = ''
    });
    winner.innerHTML = ""
    resetBox.innerHTML= "Reset"
}
```
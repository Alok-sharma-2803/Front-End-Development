let playerNumber = 1;
let turnCount = 1;
let buttons = document.querySelectorAll(".game_button");
let value_array = {}

for (let i = 0; i < buttons.length; i++){
    value_array[i + 1] = buttons[i].innerText
}

let win_array = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
console.dir(buttons);

function userGameButtonClick(eventVar) {
    if(eventVar.target.innerText === ""){
        if (playerNumber === 1){
            eventVar.target.innerText = "X";
            playerNumber++;
            turnCount++;
            eventVar.target.style.backgroundColor = "blue";
            eventVar.target.style.color = "white";
        } else if (playerNumber === 2) {
            eventVar.target.innerText = "O";
            playerNumber--;
            turnCount++;
            eventVar.target.style.backgroundColor = "red";
        }
    }
    let buttonNumber = Number(eventVar.target.id[eventVar.target.id.length - 1]);
    value_array[buttonNumber] = eventVar.target.innerText
}

function resetGame(){
    for (let i = 0; i < buttons.length; i++){
            document.querySelector(`#button_${i}`).innerText = "";
            buttons[i].style.backgroundColor = "white";
}}

function winner(numVar){
    win_array.forEach((a) => {
        if (a.includes(numVar)){
                let countOfMatches = 0;
                let value_temp = value_array[numVar];
                a.forEach((b) => {
                    if(value_array[b] !== "" && value_array[b] === value_temp){
                        countOfMatches++;
                    }
                })
                if (countOfMatches >= a.length){
                    alert(`${value_temp} wins!`)
                    return 1;
                }
            }
        })
    }

function gamePlay(eventVar){
    userGameButtonClick(eventVar);
    let buttonNumber = Number(eventVar.target.id[eventVar.target.id.length - 1]);
    let temp_var = winner(buttonNumber);
    if (temp_var === 1){
        resetGame();
    }

    // console.log(buttonNumber)
}

buttons.forEach((a) => {
    a.addEventListener('click', gamePlay, once = true);
})
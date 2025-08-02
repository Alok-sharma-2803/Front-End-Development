let gameBlocks = window.document.querySelectorAll("button")
let player_number = 1;
gameBlocks[0].setAttribute

function input_manager(event){
    let a = event.target;
    if (a.innerText != ""){
        alert("Select an empty block!");
    } else if (player_number === 1){
        a.innerText = "X";
        player_number++;
    } else if (player_number == 2){
        a.innerText = "O";
        player_number--;
    }
}

for (let i = 0; i < gameBlocks.length; i++){
    gameBlocks[i].addEventListener('click', input_manager)
}
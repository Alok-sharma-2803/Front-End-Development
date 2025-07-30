let gameBlocks = window.document.querySelectorAll("button")
let player_number = 1;

gameBlocks[0].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[0].innerText === ""){
        gameBlocks[0].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[0].innerText === ""){
        gameBlocks[0].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[0].innerText === "X" || gameBlocks[0].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})
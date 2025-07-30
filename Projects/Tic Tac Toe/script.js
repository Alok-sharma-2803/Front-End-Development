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

gameBlocks[1].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[1].innerText === ""){
        gameBlocks[1].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[1].innerText === ""){
        gameBlocks[1].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[1].innerText === "X" || gameBlocks[1].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[2].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[2].innerText === ""){
        gameBlocks[2].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[2].innerText === ""){
        gameBlocks[2].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[2].innerText === "X" || gameBlocks[2].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[3].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[3].innerText === ""){
        gameBlocks[3].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[3].innerText === ""){
        gameBlocks[3].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[3].innerText === "X" || gameBlocks[3].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[4].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[4].innerText === ""){
        gameBlocks[4].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[4].innerText === ""){
        gameBlocks[4].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[4].innerText === "X" || gameBlocks[4].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[5].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[5].innerText === ""){
        gameBlocks[5].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[5].innerText === ""){
        gameBlocks[5].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[5].innerText === "X" || gameBlocks[5].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[6].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[6].innerText === ""){
        gameBlocks[6].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[6].innerText === ""){
        gameBlocks[6].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[6].innerText === "X" || gameBlocks[6].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[7].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[7].innerText === ""){
        gameBlocks[7].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[7].innerText === ""){
        gameBlocks[7].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[7].innerText === "X" || gameBlocks[7].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})

gameBlocks[8].addEventListener("click", () => {
    if (player_number === 1 && gameBlocks[8].innerText === ""){
        gameBlocks[8].innerText = "X"
        console.log("Switched to X")
        player_number++;
    } else if (player_number === 2 && gameBlocks[8].innerText === ""){
        gameBlocks[8].innerText = "O"
        console.log("Switched to O")
        player_number--;
    } else if (gameBlocks[8].innerText === "X" || gameBlocks[8].innerText === "O"){
        alert("That block is already selected! Select an empty box!")
        console.log("Incorrect try!")
    } 
})
console.dir(gameBlocks)
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


//  let create func to initilise the game

function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    // ui update
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // remove green
        box.classList = `box box${index + 1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `current player - ${currentPlayer}`;
}

initGame();

// swap
function swap() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    //  ui update

    gameInfo.innerText = ` current player - ${currentPlayer}`;
}

// gameover
function checkGameOver() {
    let answer = "";

    winningPosition.forEach((positon) => {
        if ((gameGrid[positon[0]] !== "" || gameGrid[positon[1]] !== "" || gameGrid[positon[2]] !== "")
            && (gameGrid[positon[0]] === gameGrid[positon[1]]) && (gameGrid[positon[1]] === gameGrid[positon[2]])) {
            
            if (gameGrid[positon[0]] === "X")
                answer = "X";
            else {
                answer = "O";
            }

            // disable box [pointer]
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[positon[0]].classList.add("win");
            boxes[positon[1]].classList.add("win");
            boxes[positon[2]].classList.add("win");

        }
    });
    if (answer !== "") {
        gameInfo.innerText = `Winner player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    
    // when no winner
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if (box !== "")
            fillCount++;
    });

    if (fillCount === 9) {
        gameInfo.innerText = "game Tie ho GYa bhai";
        newGameBtn.classList.add("active");
    }



}




function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap kro player
        swap();
        // kon jeeta
        checkGameOver();
    }
}

// eventListner

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});


newGameBtn.addEventListener("click", initGame);


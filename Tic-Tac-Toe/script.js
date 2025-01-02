let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector(".message");

// Storing the data of winning patterns in Array.
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// Vailable is used to keep track of the winning patterns.
let turns = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turns) {
            box.innerText = "X";
            turns = false;
        }else{
            box.innerText = "O";
            turns = true;
        }
        box.disabled = true;

        checkNumber();
    });
});

// Validate the winning patterns.
const checkNumber = () => {
    for (let patterns of winningPatterns){
        let pattern1 = boxes[patterns[0]].innerText;
        let pattern2 = boxes[patterns[1]].innerText;
        let pattern3 = boxes[patterns[2]].innerText;
        
        if(pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if(pattern1 === pattern2 && pattern2 === pattern3){
                showWinner(pattern1);
                disabledBox();
            }
        }
    }
};

let showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
};

let disabledBox = () => {
    for(let box of boxes) {
    box.disabled = true;
    }
}

let enabledBox = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    }
}

let resetGame = () => {
    turns = true;
    enabledBox();
}

reset.addEventListener("click", () => {
    msg.innerText = "";
    resetGame();
})
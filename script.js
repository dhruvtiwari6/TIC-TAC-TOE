let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;



boxes.forEach(item => {
    item.textContent = "";
    item.addEventListener('click', () => {
        item.style.cssText = "transform: rotateY(180deg) ; transition: transform 1500ms";
        if (!isGameOver && item.innerHTML === "") {
            item.textContent = turn;
            checkWin();
            checkDraw();
            changeturn();
        }
    });
});


//access X box 
let accessX  = document.querySelector(".player1");
let accessO  = document.querySelector(".player2");

function changeturn() {
    if (turn === "X") {
        turn = "O";
        accessX.style.cssText = "background-color: white";
        accessO.style.cssText = "background-color: red";

    } else {
        turn = "X";
        accessX.style.cssText = "background-color: red";
        accessO.style.cssText = "background-color: white";
    }
}

function checkWin() {
    let win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < win_conditions.length; i++) {
        let v0 = boxes[win_conditions[i][0]].innerHTML;
        let v1 = boxes[win_conditions[i][1]].innerHTML;
        let v2 = boxes[win_conditions[i][2]].innerHTML;

        if (v0 != "" && v0 == v1 && v1 == v2) {
            isGameOver = true;
           let results =  document.querySelector(".results");
           results.textContent = turn + " wins";
           results.style.cssText = "color: yellow ; font-size: 48px ;";

            document.querySelector(".play_again").style.display = "inline";

            for(j = 0 ; j <3 ;j++) {
                boxes[win_conditions[i][j]].style.cssText = "background-color: rgb(235, 152, 93);";
            }
        }
    }
}

function checkDraw() {
    // You can implement this function to check for a draw
    if(!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if(e.innerHTML === "") {
                isDraw = false;
            }
        })
        if(isDraw) {
            document.querySelector(".results").textContent =  "Draw";
            document.querySelector(".play_again").style.display = "inline";
        }
    }
}

document.querySelector(".play_again").addEventListener("click" , ()=> {
    isGameOver = false;
    turn = "X";
    document.querySelector(".results").textContent =  "";
    document.querySelector(".play_again").style.display = "none";

    boxes.forEach(e => {
        e.textContent = "";
        e.style.removeProperty("background-color");
        e.style.removeProperty("transform");
        e.style.removeProperty("transistion");
        
    })
})

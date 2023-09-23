document.getElementById("refreshButton").addEventListener("click", () => {window.location.reload()})
document.getElementById("start").addEventListener("click", () => {
    var body = document.body;
    var newBackgroundImageURL = "snakeGame.png";
    body.style.backgroundImage = `url("${newBackgroundImageURL}")`;
    
    var container = document.getElementById("game-board")
    for (let i = 0; i < 400; i++) {
        var div = document.createElement("div")
        div.classList.add("box")
        container.appendChild(div)
    }
    var updateCell = (row, col, newClass) => {
        var cell;
        fomula = (row * 20) + col + 1;
        cell = document.querySelectorAll(`#game-board > div:nth-child(${fomula})`)[0];
        cell.classList = newClass;
    };
    
    var generateRandomPosition = (maxRow, maxCol) => {
        return {
            row: Math.floor(Math.random() * maxRow),
            col: Math.floor(Math.random() * maxCol),
        };
    };
    var playGame = () => {
        let col = 20;
        let row = 20;
        
        let kokaRow = Math.floor(Math.random() * row);
        let kokaCol = Math.floor(Math.random() * col);
        
        let ushqimRow, ushqimCol;
        
        ushqimRow = Math.floor(Math.random() * row);
        ushqimCol = Math.floor(Math.random() * col);
        
        if (kokaRow == ushqimRow && kokaCol == ushqimCol) {
            console.log("intersection....");
            return;
        }
        updateCell(ushqimRow, ushqimCol, "food");
        
        var tailLengthLimit = 2
        var tail = []

        var found = false;
        var int = setInterval(() => {

        tail.unshift({row: kokaRow, col: kokaCol})

        if (tail.length > tailLengthLimit) {
            var lastTail = tail.pop()
            updateCell(lastTail.row, lastTail.col, "box")
        }

            if (ushqimRow - kokaRow < 0) {
                updateCell(kokaRow, kokaCol, "tail");
                kokaRow--;
                updateCell(kokaRow, kokaCol, "snake");
            } else if (ushqimRow - kokaRow > 0) {
                updateCell(kokaRow, kokaCol, "tail");
                kokaRow++;
                updateCell(kokaRow, kokaCol, "snake");
            } else {
                if (ushqimCol - kokaCol < 0) {
                    updateCell(kokaRow, kokaCol, "tail");
                    kokaCol--;
                    updateCell(kokaRow, kokaCol, "snake");
                } else if (ushqimCol - kokaCol > 0) {
                    updateCell(kokaRow, kokaCol, "tail");
                    kokaCol++;
                    updateCell(kokaRow, kokaCol, "snake");
                } else {
                    updateCell(kokaRow, kokaCol, "snake");
                    tailLengthLimit++
                    found = true;
    }
}
if (found) {
    ushqimRow = Math.floor(Math.random() * row);
    ushqimCol = Math.floor(Math.random() * col);
    updateCell(ushqimRow, ushqimCol, "food");
    found = false;
}
}, speed);

var stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {
    clearInterval(int);
});
};
playGame();
});

var speed = 500;
var currentSpeed = 10;
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
var outputDiv = document.getElementById("output-speed");

increaseBtn.addEventListener("click", () => {
    speed -= 100;
    currentSpeed++;
    outputDiv.textContent = currentSpeed;
});

decreaseBtn.addEventListener("click", () => {
    speed += 100;
    currentSpeed--;
    outputDiv.textContent = currentSpeed;
});
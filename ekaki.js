let slider = document.getElementById('gridSize');

slider.addEventListener('input', () => {
    let sizeValue = parseInt(slider.value, 10);  // Convert string to integer
    defaultEkakiBoard(sizeValue);
});



function defaultEkakiBoard(size) {
 let ekakiBoard = document.querySelector("#ekakiBoard");
 let squares = ekakiBoard.querySelectorAll("div");
 squares.forEach((div) => div.remove());
ekakiBoard.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
ekakiBoard.style.gridTemplateRows = `repeat(${size} , 1fr)`;

for (let i = 0; i <size * size; i++) {
let square = document.createElement("div");
square.style.backgroundColor = "magenta";
square.classList.add("square");
square.addEventListener("mousedown", handleMouseDown);
square.addEventListener("mousemove", handleMouseMove);
square.addEventListener("mouseup", handleMouseUp);
square.addEventListener("mouseleave", handleMouseLeave);
ekakiBoard.insertAdjacentElement("beforeend", square); 
}
}

// connect resetBoard to reset button
function resetBoard() {
    let board = document.querySelector("#ekakiBoard");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "magenta"));
}

let isDragging = false;

function handleMouseDown(){
    isDragging = true;
        this.classList.add("active");
}

function handleMouseMove(){
    if (isDragging === true){
    this.classList.add("active");
    }
}

function handleMouseUp(){
    isDragging = false;
}

function handleMouseLeave(){
   
}

// add changecolor fuction

// add multiple colors to the board


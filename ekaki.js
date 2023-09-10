let slider = document.getElementById('gridSize');

slider.addEventListener('input', () => {
    let sizeValue = parseInt(slider.value, 10); 
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


function resetBoard() {
    let board = document.querySelector("#ekakiBoard");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => {
        div.style.backgroundColor = "magenta";
        div.classList.remove("active");
    });
}
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetBoard)

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

let colorpalette = document.getElementById("selectColorPalette");
colorpalette.addEventListener("change", handleColorPalette);


function handleColorPalette(){
    let colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.innerHTML = '';
    let selectedPaletteName = colorpalette.value;
    let selectedColors = palettes[selectedPaletteName];
    colorDisplay.style.gridTemplateColumns = "1fr 1fr";
    colorDisplay.style.gridTemplateRows = "1fr 1fr";
    for (let i = 0; i < selectedColors.length; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = selectedColors[i];
        square.classList.add("colorSquare"); 
        colorDisplay.appendChild(square);
    }
}


const palettes = {
    "hot flowers": ["#f9d5e5", "#eeac99", "#e06377", "#c83349"],
    "cold flowers": ["#5b9aa0", "#d6d4e0", "#b8a9c9", "#622569"],
    "funky flowers": ["##6b5b95", "#feb236", "#d64161", "#ff7b25"],
    "grassy flowers": ["#3e4444", "#82b74b", "#405d27", "#c1946a"],
    "kyukyurarin flowers": ["#d6cbd3", "#eca1a6","#bdcebe" ,"#ada397"],
}
// add changecolor fuction

// add multiple colors to the board


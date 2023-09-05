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
ekakiBoard.insertAdjacentElement("beforeend", square); 
}
}

// create a hover effect so when it is over a square a different color is showing and if the evenlister mousclick is clicked it changes the color


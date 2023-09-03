
function defaultEkakiBoard(size) {
 let ekakiBoard = document.querySelector("#ekakiBoard");
 let squares = ekakiBoard.querySelectorAll("div");
 squares.forEach((div) => div.remove());
ekakiBoard.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
ekakiBoard.style.gridTemplateRows = `repeat(${size} , 1fr)`;

for (let i = 0; i <256; i++) {
let square = document.createElement("div");
square.style.backgroundColor = "magenta";
ekakiBoard.insertAdjacentElement("beforeend", square); 
}
}

defaultEkakiBoard(16)

function changeSize(input){
    if (input >= 2 || input <= 100){
        defaultEkakiBoard(input);
    }
    else{
        console.log("wonder what happends...");
    }
}


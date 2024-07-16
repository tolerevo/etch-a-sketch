/* defining constants */
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.classList.add("button");
document.body.appendChild(clearButton);
const newBoardButton = document.createElement("button");
newBoardButton.textContent = "New Board";
newBoardButton.classList.add("button");
document.body.appendChild(newBoardButton);
const hoveredSquare = document.createElement("input");
hoveredSquare.type = "checkbox";
document.body.appendChild(hoveredSquare);
const hoveredSquareLabel = document.createElement("label");
hoveredSquareLabel.htmlFor = "hoveredSquare";
hoveredSquareLabel.textContent = "changing-color Mode";
document.body.appendChild(hoveredSquareLabel);

let squareCount = 16;

const changeColor = (event) => {
  if (hoveredSquare.checked === true) {
    event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  } else {
    event.target.classList.add("defaultColor")
  }
  event.target.classList.add("changed")
}

const clearBoard = () => {
  event.preventDefault();
  let squares = document.getElementsByClassName("square");
  for (i=0; i < squares.length; i++) {
    squares[i].classList.remove("defaultColor", "changed");
    squares[i].style.removeProperty("background-color");
  }
}

const newBoard = () => {
  event.preventDefault();
  let userResponse = window.prompt("How many squares would you like? Maximum 100.")
  if (userResponse > 100) {
    squareCount = 100;
  } else {
    squareCount = userResponse;
  }
  renderBoard();
}

clearButton.addEventListener('click', clearBoard);
newBoardButton.addEventListener("click", newBoard);

const removeSquares = () => {
  let squares = document.getElementsByClassName("square");
  squares = Array.from(squares);
  for (i = 0; i < squares.length; i++) {
    squares[i].remove();
  }
}

const renderBoard = ()=> {
  removeSquares();
  for (i=0 ; i < squareCount ** 2 ; i++) {
      let square = document.createElement('div');
      square.addEventListener('mouseover', changeColor);
      square.classList.add(`square`)
      square.classList.add(`square-${i}`)
      mainContainer.appendChild(square);
  }
  mainContainer.style.width = `${squareCount * 20}px`;
}

renderBoard();

/* defining constants */
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);
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

const renderBoard = ()=> {
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

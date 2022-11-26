const container = document.querySelector('.grid-container');
const newGrid = document.querySelector('.new-grid');

const initialSquares = 16; //16 * 16 = 256

function createBox() {
        const box = document.createElement('div');
        box.className = 'box';
        container.appendChild(box);
        box.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "purple";
        });
}

function createStartingGrid() {
    for(let i = 0; i < initialSquares * initialSquares; i++) {
        createBox();
    }
}

createStartingGrid();

function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createNewGrid() {
    let input = prompt("Number of squares per side: ");

    const maxWidth = container.offsetWidth;
    
    if(input > 100) {
        input = 100;
    } else while (input < 1) {
        alert("Cannot be less than 1!");
        input = prompt("Number of squares per side: ")
    }

    let squares = parseInt(input);

    let boxSize = (maxWidth / squares) + 'px';

    let boxQuantity = squares * squares;
    
    clearGrid();

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    for(let i = 0; i < boxQuantity; i++) {
        createBox();
    }

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.width = `${boxSize}`;
        box.style.height = `${boxSize}`;
    });

}


newGrid.addEventListener('click', function() {
    createNewGrid();
});



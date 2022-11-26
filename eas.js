const container = document.querySelector('.grid-container');
const newGrid = document.querySelector('.new-grid');

const cell = container.children;

const SIZE = 16; //16 * 16 = 256

function createGrid(numDivs) {
    for (let i = 0; i < numDivs * numDivs; i++) { 
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

function clear(elements) {
    elements.style.backgroundColor = "transparent";
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


createGrid(SIZE);

function createNewGrid() {
    let squares = prompt("Number of squares per side: ");

    let height = container.offsetHeight;

    if(squares > 100) {
        squares = 100;
    } else while (squares < 1) {
        alert("Cannot be less than 1!");
        squares = prompt("Number of squares per side: ")
    }

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    let squareSize = Math.round(height/squares);

    for(let i = 0; i < cell.length; i++)
    {
        cell[i].style.height = `${squareSize}px`;
        cell[i].style.width = `${squareSize}px`;
    }

    createGrid(squares);

}

container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "purple";
});

newGrid.addEventListener('click', function() {
    container.querySelectorAll('div').forEach(clear);
    createNewGrid();
});



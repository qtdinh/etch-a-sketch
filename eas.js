const container = document.querySelector('.grid-container');

const newGrid = document.querySelector('.new-grid');

const SIZE = 257; //16 * 16 = 256 + 1

function createGrid(numDivs) {
    for (let i = 1; i < numDivs; i++) { 
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid(SIZE);

function createNewGrid() {
    let squares = prompt("Number of squares per side: ");

    if(squares > 100) {
        squares = 100;
    }

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    let newSize = squares * squares + 1;
    createGrid(newSize);
}

container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "purple";
    console.log("mouse in");
});

newGrid.addEventListener('click', function() {
    createNewGrid();
});



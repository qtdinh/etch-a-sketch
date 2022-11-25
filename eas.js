const container = document.querySelector('.grid-container');

const newGrid = document.querySelector('.new-grid');

const SIZE = 257; //16 * 16 = 256 + 1

function createGrid(numDivs) {
    for (let i = 1; i < numDivs; i++) { 
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

function createNewGrid() {
    let newSize = prompt("");
}

createGrid(SIZE);


container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "purple";
    console.log("mouse in");
});





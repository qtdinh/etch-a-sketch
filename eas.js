const container = document.querySelector('.grid-container');

const etch = document.querySelector('.etch');

const SIZE = 256; //16 * 16 = 256

function createGrid(numDivs) {
    for (let i = 1; i < numDivs; i++) { 
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid(SIZE);

/*
etch.addEventListener("mouseout", event => {
    console.log("Mouse in");
    event.target.style.color = "purple";

});
*/


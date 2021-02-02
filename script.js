const container = document.getElementById("container");
const colors = ["black", "brown", "chocolate", "crimson",
    "darkred", "red", "coral", "darkOrange", 
    "purple", "darkviolet", "darkblue", "darkolivegreen",
    "darkgreen", "green", "darkcyan", "cyan"];
const colorChoices = document.querySelectorAll(".color");
const resetButton = document.getElementById("clear");
const slider = document.getElementById("myRange");

let penColor = "black"; 
let gridSide = 16;

// iterate through every single .button 
// add an id of the color and change the bg color to the color as well 
for (let i = 0; i < 16; i++) {
    colorChoices[i].style.backgroundColor = colors[i];
    colorChoices[i].id = colors[i];
}

// change grid side value depending on range input
slider.oninput = function() {
    deleteGrid(); // deletes the old grid 
    gridSide = slider.value; // registers new dimensions
    createGrid(); // creates the new grid 
}

colorChoices.forEach((color) => {
    color.addEventListener('click', () => {
        penColor = color.id;
    })
})

// deletes old grid 
function deleteGrid() {
    for (let i = 0; i < (gridSide ** 2); i++) {
        document.getElementById(`gridBlock${i}`).remove();
    }
}

// generates 16 grid blocks 
// need to create a gridBlock for each grid block 
function createGrid() {
    for (let i = 0; i < (gridSide ** 2); i++) {
        const gridBlock = document.createElement("div");
        gridBlock.setAttribute("id", `gridBlock${i}`)
        console.log(gridSide);
        gridBlock.style.cssText = `height: auto; width: auto; border: 0px solid black; box-sizing: border-box;`;
        // changes color when mouse enters
        gridBlock.addEventListener("mouseenter", () => {
            gridBlock.style.backgroundColor = penColor;
        })
    
        container.appendChild(gridBlock);

        container.style.cssText = `grid-template-columns: repeat(${gridSide}, ${480 / gridSide}px); grid-template-rows: repeat(${gridSide}, ${480 / gridSide});`;
    } 
}

// make backgroundColor white upon click "clearing" it
resetButton.addEventListener("click", () => {
    console.log("works");
    for (let i = 0; i < (gridSide ** 2); i++) {
        document.getElementById(`gridBlock${i}`).style.backgroundColor = "white";
    }
})

createGrid();


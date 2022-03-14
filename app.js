let gridLength = prompt("Enter the desired length of one side. Min: 4 Max: 100");
console.log(gridLength);

while (gridLength < 4 || gridLength > 100) {
    gridLength = prompt("invalid input. Min: 4 Max: 100");
    console.log(gridLength);
}

    //takes user input to create enough divs to populate the container
for (let i = 0; i < (gridLength * gridLength); i++){
    console.log("test");
    const container = document.getElementById("container");
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
}
    //sets the grid dimensions for the etch-a-sketch container
    container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;
    

    

    
    



reset();

//function holding the whole show together to be reset when you hit the reset button. might be a better way to structure this.
function reset (e) {

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
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    
    //adds the event that uses the paint function when a gridsquare is moused over
    gridSquare.addEventListener("mouseover", paintWhite);
    container.appendChild(gridSquare);
    
    const button = document.getElementById("reset");
    button.addEventListener("click", reset);
    button.addEventListener("click", clean)
   
    //adds a class that paints the moused over gridsquare white
    function paintWhite (e) {
        gridSquare.classList.add("white");

    }
    //cleans the board when you reset.
    function clean (e) {
        gridSquare.classList.remove("white");
    }
    
}
    //sets the grid dimensions for the etch-a-sketch container
    container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;

}




    
    



reset();

//function holding the whole show together to be reset when you hit the reset button. might be a better way to structure this.
function reset (e) {
//prompt for grid side length, soon to be fun slider bar
let gridLength = prompt("Enter the desired length of one side. Min: 4 Max: 100");
console.log(gridLength);
//basic validation
while (gridLength < 4 || gridLength > 100) {
    gridLength = prompt("invalid input. Min: 4 Max: 100");
    console.log(gridLength);
}

//sets the grid dimensions for the etch-a-sketch container
container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;

//sets classic as the default active color scheme
let classic = document.getElementById("classic");
let funky = document.getElementById("funky");
    classic.classList.add("active");
    funky.classList.add("inactive");
    classic.classList.remove("inactive");
    funky.classList.remove("active");

//edits button classes for funky and classic to make classic the active color scheme (ugly because .toggle was causing problems?)
    classic.addEventListener("click", function shiftClassic (e) {
    classic.classList.add("active");
    classic.classList.remove("inactive");
    funky.classList.remove("active");
    funky.classList.add("inactive");
});

//edits button classes for funky and classic to make funky the active color scheme (ugly because .toggle was causing problems?)
funky.addEventListener("click", function shiftFunky (e) {
    funky.classList.add("active");
    funky.classList.remove("inactive");
    classic.classList.remove("active");
    classic.classList.add("inactive");
});

    //takes user input to create enough divs to populate the container
for (let i = 0; i < (gridLength * gridLength); i++){
    console.log("test");
    const container = document.getElementById("container");
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    
    //adds the event that uses the paint function when a gridsquare is moused over
    gridSquare.addEventListener("mouseover", colorSelect);
    container.appendChild(gridSquare);
    
    //cleans the board and restarts the program from the grid creation
    const button = document.getElementById("reset");
    button.addEventListener("click", reset);
    button.addEventListener("click", clean);

    
   
    //adds a class that paints the moused over gridsquare white
    function paintWhite () {
        gridSquare.style.backgroundColor = "white";

    }
   
    //grabs a random number on each hover and concatenates it with a "#" to form a hexadecimal code to cause the div to appear a random color
    function paintRainbow () {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridSquare.style.backgroundColor = "#" + randomColor;
    }
    
    function colorSelect () {
        
        //if classic == true execute paint white
        //if funky == true execute paint rainbow         
            if (funky.classList.contains("active")) {
                paintRainbow();
            }
            else {
                paintWhite();
            }
    }
    //cleans the board when you reset.
    function clean () {
        gridSquare.style.backgroundColor = "black";
    }
    
}
    
        

}




    
    

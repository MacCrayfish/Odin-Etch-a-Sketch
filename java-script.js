const container = document.querySelector('#container');
let grid = document.createElement("div");


function newGrid(height, width){
    grid.classList.add('grid')
    container.appendChild(grid);
    let heightPrcnt = (960 / height);
    for(i = 0; i < width; i++){
    const column = document.createElement("div");
    column.classList.add("column");
    grid.appendChild(column);
        for(x = 0; x < height; x++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridSquare");
            gridDiv.style.width = "100%";
            gridDiv.style.height = heightPrcnt + "px";
            gridDiv.style.backgroundColor = "red";
            column.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover', () => {
                gridDiv.style.backgroundColor = "blue";
            });
        }
    }
}

function removeGrid(){
    container.removeChild(grid);
    grid = document.createElement("div");
}
newGrid(16, 16);

const btn = document.querySelector('#reset');
btn.addEventListener('mouseup', () => {
    removeGrid();
    let gridHeight = prompt("New Grid Height?(Max 100)");
    let gridWidth = prompt("New Grid Width?(Max 100)");
    if(gridHeight || gridWidth <= 100){
        gridHeight = 100
        gridWidth = 100
    }
    newGrid(gridHeight, gridWidth);
})


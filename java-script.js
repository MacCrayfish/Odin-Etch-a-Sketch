
const grid = document.querySelector('#grid');
let gridWidth = 16;
let gridHeight = 16;
let heightPrcnt = (960 / gridHeight);
for(i = 0; i < gridWidth; i++){
const column = document.createElement("div");
column.classList.add("column");
grid.appendChild(column);
    for(x = 0; x < gridHeight; x++){
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
const btn = document.querySelector('#reset');
btn.addEventListener('mouseup', () => {
   gridHeight = prompt("New Grid Height?");
   gridWidth = prompt("New Grid Width?");
})


let columns = 26;
let rows = 100;
const header = document.getElementById("header");
const serialNo = document.getElementById("serialNoContainer");
const cellBody = document.getElementById("cellBody");

let id;

function createHeaderCells() {

    for(let i=0; i<=columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.classList = "headerCell cell";
        if (!i==0){

            headerCell.innerText= String.fromCharCode(64 + i);
        }
        header.appendChild(headerCell);
    }
}

function serialNumberContainer() {
    for(let i=1; i<=rows; i++) {
        const serialNoCell = document.createElement("div");
        serialNoCell.classList= "cell";
        serialNoCell.innerText = i;
        serialNo.appendChild(serialNoCell); 
    }
}


function createRow(rowNumber) {
    const row = document.createElement("div");
    row.className = "row";
    for(let i=1; i<=columns; i++) {
        const cell = document.createElement("div");
        cell.className = "mainCell cell";
        cell.contentEditable = true;
        cell.id = String.fromCharCode(64 + i) + rowNumber;
        row.appendChild(cell);

        cell.addEventListener("focus", onCellFocus);
        cell.addEventListener("input", onFormChange);


        // id = cell.id;
    }
    cellBody.appendChild(row);
}



function buildCellBody() {
    for (let i=1; i<=rows; i++) {
        createRow(i);
    }
}

createHeaderCells();
serialNumberContainer();
buildCellBody();


// on click effects
const menuBtn = document.querySelectorAll(".menuBtn");

for(let i=0; i<menuBtn.length; i++) {

    menuBtn[i].addEventListener("click", onMenuBtnClick);
}

function onMenuBtnClick(event) {
    menuBtn.classList = "menuBtnActive";
}
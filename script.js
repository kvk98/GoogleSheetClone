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
            headerCell.setAttribute("data-column", String.fromCharCode(64 + i));
            headerCell.addEventListener("click", onHeaderCellClick);
        }
        header.appendChild(headerCell);
    }
}



function sortRows(column) {
    const rows = Array.from(cellBody.getElementsByClassName("row"));
    rows.sort((a, b) => {
        const cellA = a.querySelector(`[id^="${column}"]`).textContent;
        const cellB = b.querySelector(`[id^="${column}"]`).textContent;
        return cellA.localeCompare(cellB);
    });

    
    cellBody.innerHTML = '';

    
    for (const row of rows) {
        cellBody.appendChild(row);
    }
}


function onHeaderCellClick(event) {
    const column = event.target.getAttribute("data-column");
    sortRows(column);
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



const menuBtn = document.querySelectorAll(".menuBtn");

for(let i=0; i<menuBtn.length; i++) {

    menuBtn[i].addEventListener("click", onMenuBtnClick);
}

function onMenuBtnClick(event) {
    menuBtn.forEach((button) => button.classList.remove("menuBtnActive"));
    event.target.classList.add("menuBtnActive");
}





const cellData = {};

function evaluateFormula(formula) {
    
    const [operator, cellRange] = formula.substring(1).split('(');
    
    
    const cellReferences = cellRange.substring(0, cellRange.length - 1).split(':');

    
    if (operator === 'SUM') {
        let sum = 0;
        for (const cellRef of cellReferences) {
            const value = evaluateCellReference(cellRef);
            if (!isNaN(value)) {
                sum += value;
            }
        }
        return sum;
    }

    

    return null; 
}

function evaluateCellReference(cellRef) {
    const cellValue = cellData[cellRef];

    if (cellValue === undefined) {
        return 0; 
    }

    if (cellValue.startsWith('=')) {
        return evaluateFormula(cellValue);
    }

    return parseFloat(cellValue); 
}


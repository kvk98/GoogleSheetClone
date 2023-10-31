const header = document.getElementById("header");
const body = document.getElementById("body");

for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);
    
    const bold = document.createElement("b");
    bold.innerText = char;

    header.appendChild(bold);

}

// const body = document.getElementById("body");


function createAndAppendRow(rowNumber) {
    let div = document.createElement("div");
    let row1 = body.appendChild(div);
    row1.className = "row";
    

    for (let i = 64; i < 90; i++) {
        if (i === 64) {
            let b = document.createElement("b");
            b.innerText = rowNumber;
            row1.appendChild(b);
        }
        else {
            let cell = document.createElement("div");
            cell.contentEditable = true; 
            cell.id = `${String.fromCharCode(i)}${rowNumber};`
            cell.addEventListener("focus", onCellFocus);
            row1.appendChild(cell);
        }
    }

    body.appendChild(row1);
}

for (let i = 0; i < 100; i++) {
    createAndAppendRow(i+1);    
}

function onCellFocus(e) {
    console.log(e.target.id);
}
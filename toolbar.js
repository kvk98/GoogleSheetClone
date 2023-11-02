const cellId = document.getElementById("cellId");
let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: 'Monospace';
    fontSize : 16,
    color: "#000",
    textAlign: "left",
    backgroundColor: "#fff",
    isBold : false,
    isItalic: false,
    isUnderlined: false

}

function onCellFocus(event) {
    const elementId = event.target.id;
    cellId.innerText = elementId;
    activeElement = event.target;
}

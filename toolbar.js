const cellId = document.getElementById("cellId");
const form = document.getElementById("tools");
let activeElement = null;

const state = {};

const defaultProperties = {
    copy : false,
    cut : false,
    paste: false,
    fontFamily: "'Times New Roman', Times, serif",
    fontSize : 14,
    isBold : false,
    isItalic: false,
    isUnderlined: false,
    textAlign: "left",
    color: "#000",
    backgroundColor: "#ffffff"
}

function onCellFocus(event) {
    const elementId = event.target.id;
    cellId.innerText = elementId;
    activeElement = event.target;

    if (state[elementId]) {
        resetTools(state[elementId]);
    }
    else {
        resetTools(defaultProperties);
    }
}

function onFormChange(){
    console.log("vamshi's form changed");
    if(!activeElement) {
        alert("please select");
        form.reset();
        return;
    }

    let currentState = {
        copy :form.copy.checked,
        cut :form.cut.checked,
        paste:form.paste.checked,
        fontFamily:form.fontFamily.value,
        fontSize :form.fontSize.value,
        isBold :form.bold.checked,
        isItalic:form.italic.checked,
        isUnderlined:form.underline.checked,
        textAlign:form.textAlign.value,
        color: form.fontColor.value,
        backgroundColor:form.fill.value
    }
    applyStylesToCell(currentState);

    state[activeElement.id] = currentState;
}

function applyStylesToCell(styleObject) {
    activeElement.style.copy = styleObject.copy  ;
    activeElement.style.cut = styleObject.cut  ;
    activeElement.style.paste = styleObject.paste  ;
    activeElement.style.fontFamily = styleObject.fontFamily  ;
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    if (styleObject.isBold) {
        activeElement.style.fontWeight = "bold";
    }
    if (styleObject.isItalic) {
        activeElement.style.fontStyle = "italic";
    }
    if (styleObject.isUnderlined) {
        activeElement.style.textDecoration = "underline"  ;
    }
    activeElement.style.textAlign = styleObject.textAlign  ;
    activeElement.style.color = styleObject.color  ;
    activeElement.style.backgroundColor = styleObject.backgroundColor  ;
}

function resetTools(toolsState) {
    form.copy.checked = toolsState.copy,
    form.cut.checked = toolsState.cut,
    form.paste.checked = toolsState.paste,
    form.fontFamily.value = toolsState.fontFamily,
    form.fontSize.value = toolsState.fontSize,
    form.bold.checked = toolsState.isBold,
    form.italic.checked = toolsState.isItalic,
    form.underline.checked = toolsState.isUnderlined,
    form.textAlign.value = toolsState.textAlign
    form.fontColor.value = toolsState.color,
    form.fill.value = toolsState.backgroundColor
}
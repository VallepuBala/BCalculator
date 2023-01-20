let currentDisplay = "";

function addToDisplay(value) {
    currentDisplay += value;
    document.getElementById("display").value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "";
    document.getElementById("display").value = currentDisplay;
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.getElementById("display").value = currentDisplay;
}

function calculate() {
    currentDisplay = eval(currentDisplay);
    document.getElementById("display").value = currentDisplay;
}



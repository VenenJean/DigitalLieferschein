function restrictPieDate() {
    const dateInput = document.getElementById("pie-date");
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0];

    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);

    const nextWeek = newDate.toISOString().split("T")[0];

    dateInput.min = today;
    dateInput.max = nextWeek;
}

function printDocument() {
    const form = document.getElementById('lieferschein-form');

    if (form.checkValidity()) {
        window.print();
    } else {
        form.reportValidity();
    }
}

function updateAmount() {
    const packageInput = document.getElementById("package-count");
    const selectElement = document.getElementById("equipment");

    const displaySpan = document.createElement("span");
    displaySpan.id = "package-display";
    selectElement.parentNode.insertBefore(displaySpan, selectElement);

    function updateDisplay() {
        displaySpan.textContent = packageInput.value + " x ";
    }

    updateDisplay();

    packageInput.addEventListener("input", updateDisplay);
}

document.addEventListener("DOMContentLoaded", function () {
    populateSelectMenus();
    updateAmount();
    restrictPieDate();
});

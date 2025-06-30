function constructAddress() {
    const recipientLocationEl = document.getElementById("locations");
    const selectedLocation = recipientLocationEl.options[recipientLocationEl.selectedIndex]?.text || "";

    const recipientText = document.getElementById("recipient").value.trim() || "";
    const address = document.getElementById("recipient-address");

    const finalOutput = `${selectedLocation}<br>z.H. ${recipientText}<br>${address.innerHTML}`;

    document.getElementById("recipient-address").innerHTML = finalOutput;
}

function cleanTextarea(textarea) {
    const cleaned = textarea.value
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== '')
        .join("\n")
        .replace(/\s{2,}/g, ' ');

    textarea.value = cleaned;
}

function resetLocation() {
    // resetting the location & thus the address
    const locationSelect = document.getElementById("locations");
    locationSelect.selectedIndex = locationSelect.selectedIndex;

    const changeEvent = new Event('change', { bubbles: true });
    locationSelect.dispatchEvent(changeEvent);
}

function printDocument() {
    const form = document.getElementById('lieferschein-form');
    cleanTextarea(document.getElementById("positionen"));

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    constructAddress();
    alert("Bitte im Druckdialog die Anzahl der Kopien auf 2 setzen!");
    window.print();
    resetLocation();
}

document.addEventListener('input', function (e) {
    if (e.target.classList.contains('auto-resize')) {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    populateLocations();
});

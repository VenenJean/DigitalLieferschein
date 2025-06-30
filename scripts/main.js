function constructAddress() {
    const recipientLocationEl = document.getElementById("locations");
    const selectedLocation = recipientLocationEl.options[recipientLocationEl.selectedIndex]?.text || "";

    const recipientText = document.getElementById("recipient").value.trim() || "";
    const address = document.getElementById("recipient-address");

    const finalOutput = `${selectedLocation}<br>z.H. ${recipientText}<br>${address.innerHTML}`;

    document.getElementById("recipient-address").innerHTML = finalOutput;
}

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
    window.print();
    resetLocation();
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('auto-resize')) {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
        }
    });

    populateLocations();
    restrictPieDate();
});

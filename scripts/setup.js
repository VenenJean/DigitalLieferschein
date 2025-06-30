function setup() {
    // setting the location
    const locationSelect = document.getElementById("locations");
    locationSelect.selectedIndex = 7;
    triggerEvent(locationSelect, "change");

    // settings the recipient & sender
    document.getElementById("recipient").value = "Max Mustermann";
    document.getElementById("sender").value = "Hans Müller";

    // setting the shipping content
    const positionen = document.getElementById("positionen");
    positionen.value = "2 x Access Points\n1 x SSD LITE-ON\n1 x USB Stick 64 GB";
    triggerEvent(positionen, "input");
};

function triggerEvent(object, event) {
    object.dispatchEvent(new Event(event, { bubbles: true }));
}
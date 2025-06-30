window.onload = async (event) => {
    // manully delegating task for other js to run first
    await new Promise(r => setTimeout(r, 500));
    return;
    // setting the location
    const locationSelect = document.getElementById("locations");
    locationSelect.selectedIndex = 7;

    const changeEvent = new Event('change', { bubbles: true });
    locationSelect.dispatchEvent(changeEvent);

    // settings the recipient & sender
    document.getElementById("recipient").value = "Marcus Agethen";
    document.getElementById("sender").value = "Thomas Wolfers";

    // setting the shipping content
    document.getElementById("positionen").value = "2 x Access Points\n1 x SSD LITE-ON\n1 x USB Stick 64 GB";
    document.getElementById("positionen").dispatchEvent(new Event('input'));

    document.getElementById("print-btn").click();
};

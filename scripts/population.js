function populateSelectMenu({
    selectId,
    dataArray,
    valueFn = item => item.toLowerCase(),
    textFn = item => item,
    onChange = null
}) {
    const selectEl = document.getElementById(selectId);
    selectEl.innerHTML = ""; // Clear existing options

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Auswählen";
    selectEl.appendChild(defaultOption);

    dataArray.forEach(item => {
        const option = document.createElement("option");
        option.value = valueFn(item);
        option.textContent = textFn(item);
        selectEl.appendChild(option);
    });

    if (onChange) {
        selectEl.addEventListener("change", event => {
            const selectedValue = event.target.value;
            const selectedItem = dataArray.find(d => valueFn(d) === selectedValue);
            onChange(selectedItem);
        });
    }
}


function populateLocations(defaultArray = locations) {
    populateSelectMenu({
        selectId: "locations",
        dataArray: defaultArray,
        valueFn: location => location.id,
        textFn: location => location.name,
        onChange: location => {

            if (location) {
                const locAddr = locations.find(loc => loc.id == location.id).address;

                const addrEl = document.getElementById("recipient-address");
                addrEl.innerHTML = `
                    ${locAddr.street} ${locAddr.house_number} <br>
                    ${locAddr.postal_code} ${locAddr.city} <br>
                    ${locAddr.country}
                `;
                addrEl.contentEditable = location.name === "Home Office";
            } else {
                addressEl.innerHTML = "KEINE ADDRESSE";
            }
        }
    });
}

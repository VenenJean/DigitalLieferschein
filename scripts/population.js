function populateSelect({
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

function populateSelectWithOptGroup({
    selectId,
    groupedData,
    valueFn = item => item.id,
    textFn = item => item.name,
    onChange = null
}) {
    const selectEl = document.getElementById(selectId);
    selectEl.innerHTML = ""; // Clear existing options

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Auswählen";
    selectEl.appendChild(defaultOption);

    for (const [groupLabel, items] of Object.entries(groupedData)) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = groupLabel;

        items.forEach(item => {
            const option = document.createElement("option");
            option.value = valueFn(item);
            option.textContent = textFn(item);
            optgroup.appendChild(option);
        });

        selectEl.appendChild(optgroup);
    }

    if (onChange) {
        selectEl.addEventListener("change", event => {
            const selectedValue = event.target.value;
            let selectedItem = null;

            for (const items of Object.values(groupedData)) {
                selectedItem = items.find(d => valueFn(d) === selectedValue);
                if (selectedItem) break;
            }

            onChange(selectedItem);
        });
    }
}

function populateLocations(defaultArray = locations) {
    populateSelectWithOptGroup({
        selectId: "locations",
        groupedData: defaultArray,
        valueFn: item => item.id,
        textFn: item => item.name,
        onChange: location => {
            if (location) {
                const allLocations = Object.values(defaultArray).flat(); // Flatten all groups into one array
                const locAddr = allLocations.find(loc => loc.id == location.id).address;

                const addrEl = document.getElementById("recipient-address");
                addrEl.innerHTML = `
                    ${locAddr.street} ${locAddr.house_number} <br>
                    ${locAddr.postal_code} ${locAddr.city} <br>
                    ${locAddr.country}
                `;

                addrEl.contentEditable = location.name === "Home Office";
            } else {
                const addrEl = document.getElementById("recipient-address");
                addrEl.innerHTML = "KEINE ADDRESSE";
            }
        }
    });
}

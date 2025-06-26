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


function populateRecipient(defaultArray = users) {
    populateSelectMenu({
        selectId: "recipient",
        dataArray: defaultArray,
        valueFn: user => user.id,
        textFn: user => `${user.firstname} ${user.lastname}`,
        onChange: user => {
            const addressEl = document.getElementById("recipient-address");

            if (user && user.location_id) {
                const userLocation = locations.find(location => location.id == user.location_id);
                const addr = userLocation.address;

                addressEl.innerHTML = `
                    ${addr.street} ${addr.house_number} <br>
                    D-${addr.postal_code} ${addr.city} <br>
                    ${addr.country}
                `;

                const filteredUsers = users.filter(u => u.id !== user.id);
                const senderSelect = document.getElementById("sender");
                const selectedSenderValue = senderSelect.value;

                populateSender(filteredUsers);

                if (Array.from(senderSelect.options).some(opt => opt.value === selectedSenderValue)) {
                    senderSelect.value = selectedSenderValue;
                }
            } else {
                addressEl.innerHTML = "KEINE ADDRESSE";
            }
        }
    });
}



function populateSender(defaultArray = users) {
    populateSelectMenu({
        selectId: "sender",
        dataArray: defaultArray,
        valueFn: user => user.id,
        textFn: user => `${user.firstname} ${user.lastname}`,
        onChange: user => {
            if (user) {
                const filteredUsers = users.filter(u => u.id !== user.id);
                const recipientSelect = document.getElementById("recipient");
                const selectedRecipientValue = recipientSelect.value;

                populateRecipient(filteredUsers);

                if (Array.from(recipientSelect.options).some(opt => opt.value === selectedRecipientValue)) {
                    recipientSelect.value = selectedRecipientValue;
                }
            }
        }
    });
}



function populateEquipment() {
    populateSelectMenu({
        selectId: "equipment",
        dataArray: equipment,
        valueFn: item => item.toLowerCase(),
        textFn: item => item
    });
}


function populateSelectMenus() {
    populateSender();
    populateRecipient();
    populateEquipment();
}


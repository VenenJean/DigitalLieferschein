const equipment = ["Headset", "Headphones", "Smartphone", "Laptop", "Mouse", "Keyboard", "Monitor", "USB-C Kabel", "Access Point"];

const users = [
    { id: "1", firstname: "Venen", lastname: "Jean", location_id: 1 },
    { id: "2", firstname: "Anna", lastname: "Müller", location_id: 2 },
    { id: "3", firstname: "Lena", lastname: "Schmidt", location_id: 3 },
    { id: "4", firstname: "Jonas", lastname: "Fischer", location_id: 4 },
    { id: "5", firstname: "Mira", lastname: "Weber", location_id: 5 },
    { id: "6", firstname: "Tobias", lastname: "Krüger", location_id: 6 },
    { id: "7", firstname: "Laura", lastname: "Becker", location_id: 7 },
    { id: "8", firstname: "Nico", lastname: "Wolf", location_id: 8 },
    { id: "9", firstname: "Emily", lastname: "Zimmermann", location_id: 9 },
    { id: "10", firstname: "Felix", lastname: "Neumann", location_id: 10 },
    { id: "11", firstname: "Sophie", lastname: "Schwarz", location_id: 11 },
    { id: "12", firstname: "Leon", lastname: "Richter", location_id: 12 },
    { id: "13", firstname: "Clara", lastname: "Hartmann", location_id: 13 },
    { id: "14", firstname: "Max", lastname: "Klein", location_id: 3 },
    { id: "15", firstname: "Ida", lastname: "Schuster", location_id: 7 },
    { id: "16", firstname: "Paul", lastname: "Hoffmann", location_id: 1 },
    { id: "17", firstname: "Marlene", lastname: "Lang", location_id: 10 },
    { id: "18", firstname: "Noah", lastname: "Werner", location_id: 5 },
    { id: "19", firstname: "Helena", lastname: "Pohl", location_id: 13 },
    { id: "20", firstname: "Julian", lastname: "Franke", location_id: 2 },
    { id: "21", firstname: "Michał", lastname: "Nowak ", location_id: 6 },
    { id: "22", firstname: "Christian", lastname: "Hartung ", location_id: 8 },
];

const locations = [
    // Deutschland
    {
        id: "1",
        name: "item Solingen",
        address: {
            street: "Piepersberg",
            house_number: "35",
            postal_code: "42653",
            city: "Solingen",
            country: "Deutschland"
        }
    },
    {
        id: "2",
        name: "item Berlin",
        address: {
            street: "Rudower Chaussee",
            house_number: "48",
            postal_code: "12489",
            city: "Berlin",
            country: "Deutschland"
        }
    },
    {
        id: "3",
        name: "item Freiburg",
        address: {
            street: "Mitscherlichstraße",
            house_number: "5",
            postal_code: "79108",
            city: "Freiburg",
            country: "Deutschland"
        }
    },
    {
        id: "4",
        name: "item Hamburg",
        address: {
            street: "Doktor-Flögel-Straße",
            house_number: "2",
            postal_code: "22926",
            city: "Ahrensburg",
            country: "Deutschland"
        }
    },
    {
        id: "5",
        name: "item Hannover",
        address: {
            street: "Imkerstraße",
            house_number: "3",
            postal_code: "30916",
            city: "Isernhagen",
            country: "Deutschland"
        }
    },
    {
        id: "6",
        name: "item Ludwigsburg",
        address: {
            street: "Bietigheimer Straße",
            house_number: "62",
            postal_code: "71732",
            city: "Tamm",
            country: "Deutschland"
        }
    },
    {
        id: "7",
        name: "item Mannheim",
        address: {
            street: "Badener Straße",
            house_number: "10",
            postal_code: "69493",
            city: "Hirschberg",
            country: "Deutschland"
        }
    },
    {
        id: "8",
        name: "item Mühlhausen",
        address: {
            street: "Zu den Katzentreppen",
            house_number: "13",
            postal_code: "99974",
            city: "Mühlhausen",
            country: "Deutschland"
        }
    },
    {
        id: "9",
        name: "item Nossen",
        address: {
            street: "Gewerbestraße",
            house_number: "15",
            postal_code: "01683",
            city: "Nossen",
            country: "Deutschland"
        }
    },
    {
        id: "10",
        name: "item Ulm",
        address: {
            street: "August-Nagel-Straße",
            house_number: "22",
            postal_code: "89079",
            city: "Ulm-Einsingen",
            country: "Deutschland"
        }
    },
    // Polen
    {
        id: "11",
        location_name: "item Polska Sp. z o.o.",
        address: {
            street: "ul. Kowalska",
            house_number: "34",
            postal_code: "51-423",
            city: "Wroclaw",
            country: "Polen"
        }
    },
    {
        id: "12",
        location_name: "item Polska Sp. z o.o. Oddzial Slask",
        address: {
            street: "ul. Obrzena Zachodnia",
            house_number: "37",
            postal_code: "41-400",
            city: "Myslowice",
            country: "Polen"
        }
    },
    // Frankreich
    {
        id: "13",
        location_name: "item France SAS",
        address: {
            street: "rue Louis RAMEAU",
            house_number: "16-20",
            postal_code: "95870",
            city: "Bezons",
            country: "Frankreich"
        }
    }
];


users.sort((a, b) => a.firstname.localeCompare(b.firstname));
equipment.sort((a, b) => a.localeCompare(b));
locations.sort((a, b) => a.id.localeCompare(b.id));

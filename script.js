function fetchSheetData() {
    const sheetURL = document.getElementById('sheetURL').value;
    const sheetID = sheetURL.split("/")[5];
    const csvURL = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=csv`;

    fetch(csvURL)
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n");
            let tableContent = "";

            rows.forEach(row => {
                const cells = row.split(",");
                tableContent += "<tr>";
                cells.forEach(cell => {
                    tableContent += `<td>${cell}</td>`;
                });
                tableContent += "</tr>";
            });

            document.getElementById('sheetData').innerHTML = tableContent;
        })
        .catch(error => {
            console.error("There was an error fetching the sheet data:", error);
        });
}

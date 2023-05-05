function generateTable() {
  // Get the input number
  const number = document.getElementById("number").value;

  // Find the HTML element where the table will be displayed
  const tableContainer = document.getElementById("table-container");

  // Create a table element
  const table = document.createElement("table");

  // Create a row for the table header
  const headerRow = document.createElement("tr");

  // Add the header row to the table
  table.appendChild(headerRow);

  // Create the header cell for the first column
  const emptyHeaderCell = document.createElement("th");
  headerRow.appendChild(emptyHeaderCell);

  // Add the rest of the header cells for the table
  for (let i = 1; i <= number; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = i;
    headerRow.appendChild(headerCell);
  }

  // Create the rows for the table body
  for (let i = 1; i <= number; i++) {
    // Create a row for the current number
    const row = document.createElement("tr");

    // Create the header cell for the current number
    const headerCell = document.createElement("th");
    headerCell.textContent = i;
    row.appendChild(headerCell);

    // Add the multiplication results to the row
    for (let j = 1; j <= number; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }

    // Add the row to the table
    table.appendChild(row);
  }

  // Clear the previous table (if any)
  tableContainer.innerHTML = "";

  // Add the new table to the container
  tableContainer.appendChild(table);
}

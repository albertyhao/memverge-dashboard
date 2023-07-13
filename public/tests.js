const filterDropdown = document.getElementById('test-status-menu');
const table = document.getElementById('table');

filterDropdown.addEventListener('change', () => {
  const selectedValue = filterDropdown.value;

  // Iterate through each row in the table body
  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    const row = table.tBodies[0].rows[i];
    const categoryCell = row.cells[2]; // Assuming category is in the second cell
    if (selectedValue === 'all' || categoryCell.textContent === selectedValue) {
      // Show the row if the selected value is "all" or matches the category
      row.style.display = '';
    } else {
      // Hide the row if the selected value does not match the category
      row.style.display = 'none';
    }
  }
});

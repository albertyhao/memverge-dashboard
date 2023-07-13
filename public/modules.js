// OLD

document.addEventListener("DOMContentLoaded", createDashboard);

async function createDashboard() {
  
  // fetch from app.js data route
  const response = await fetch("/data");
  const records = await response.json();
  
  // Update the table HTML with records data
  document.getElementById("table").innerHTML = generateTableHTML(records);
}

function generateTableHTML(records) {
  let tableHTML = "";
  let headerHTML = "<tr class='tRow'><th class='tHeader'>Date</th>";
  const testModuleList = [];
  const testDateList = [];
  // console.log("records", records);
  records.forEach((r) => { 
    // add unique module names into list and generate html table header
    // store unique test dates for table
    
    const moduleName = r["module_name"];
    if (!testModuleList.includes(moduleName)) {
      testModuleList.push(moduleName);
      headerHTML += `<th class='tHeader'>${moduleName}</th>`;
    };
    
    const testDate = r["date"].substring(0, 10);
    if (!testDateList.includes(testDate)) {
      testDateList.push(testDate);
    };
  });
  headerHTML += "</tr>";
  tableHTML += headerHTML;
  // sort test dates most recent to least
  testDateList.sort((a, b) => {
    const dateA = new Date(a.replace(/_/g, '/'));
    const dateB = new Date(b.replace(/_/g, '/'));
  
    return dateB - dateA;
  });

  // create rows of data
  testDateList.forEach((date) => {
    let rowHTML = `<tr class='tRow'><td class='tData'>${date}</td>`;
    testModuleList.forEach((moduleName) => {
      // Find the corresponding record for the date and module
      const record = records.find((r) => r["date"].startsWith(date) && r["module_name"] === moduleName);
      if (record) {
        const testId = record["_id"];
        const linkURL = `tests/${testId}`;
        // Add the table cell with the desired property from the record
        rowHTML += `<td class='runSummary' class='tData'><a href='${linkURL}'>${resultSummary(record["results"].test_results)}</a></td>`;
      } else {
        // No record found for the date and module, add an empty cell
        rowHTML += "<td class='tData'></td>";
      }
    });
    rowHTML += "</tr>";
    tableHTML += rowHTML;
  });
  return tableHTML;
}

function resultSummary(results) {
  // helper function to generate summary string for results
  let failed = 0; let passed = 0; let skipped = 0;
  results.forEach((r) => {
    if (r == "PASSED") {
      passed += 1;
    }
    else if (r == "FAILED") {
      failed += 1;
    }
    else {
      skipped += 1;
    };
  });
  return ("Failed: " + failed + "| Skipped: " + skipped + "| Passed: " + passed + "| Total: " + results.length);
}
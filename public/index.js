document.addEventListener("DOMContentLoaded", createDashboard);

async function createDashboard() {
  
  // fetch from app.js data route
  const response = await fetch("/data");
  const records = await response.json();
  
  // Update the table HTML with records data
  document.getElementById("table").innerHTML = generateTableHTML(records);
}

function generateTableHTML(records) {
  let tableHTML = "<tr class='tRow'><th class='tHeader'>Date</th><th class='tHeader'>Build Job ID</th><th class='tHeader'>Build Version</th><th class='tHeader'>Build Result Summary</th></tr>";
  const buildList = [];
  console.log("records", records);
  records.forEach((r) => {
    // Generate buildlist with tuples of unique buildversions and earliest date associated with the build
    // buildlist is a 2d array with elements [date, buildversion]
    const date = r["date"];
    const buildURL = r["meta_data"]["buildurl"];
    const buildVer = r["meta_data"]["mvmcli_version"];
    const existingBuild = buildList.find((tuple) => tuple[1] === buildURL);
    if (existingBuild) {
      if (new Date(date) < new Date(existingBuild[0])) {
        existingBuild[0] = date;
      }
    } else {
      buildList.push([date, buildURL, buildVer]);
    }
  });

  // Sort buildversion dates most recent to least recent
  console.log("pre sorted buildList");
  console.log(buildList);
  buildList.sort((a, b) => {
    const [monthA, dayA, yearA, hoursA, minutesA, secondsA] = a[0].split("_");
    const formattedDateA = new Date(`${yearA}/${monthA}/${dayA} ${hoursA}:${minutesA}:${secondsA}`);
    
    const [monthB, dayB, yearB, hoursB, minutesB, secondsB] = b[0].split("_");
    const formattedDateB = new Date(`${yearB}/${monthB}/${dayB} ${hoursB}:${minutesB}:${secondsB}`);
    console.log(formattedDateB - formattedDateA);
    return formattedDateB - formattedDateA;
  });
  
  
  // buildList.sort((a, b) => new Date(b[0]) - new Date(a[0]));
  console.log("sorted buildList");
  console.log(buildList);
  // create rows of data
  buildList.forEach((tuple) => {
    // Construct rowHTML with date, buildversion, and summary
    const linkURL = `modules/${tuple[1].split("job/")[1]}`;
    let rowHTML = `<tr class='tRow' onclick="window.location.href = \`${linkURL}\`;"><td class='tData'>${tuple[0]}</td><td class='tData'>${tuple[1].split("job/")[1].split("/").join(" ")}</td><td class='tData'>${tuple[2]}</td><td class='tData'>${resultSummary(tuple[1], records)}</td></tr>`;
    tableHTML += rowHTML;
  });
  console.log(tableHTML);
  return tableHTML;
}

function resultSummary(url, records) {
  // helper function to generate summary string for results

  let failed = 0; let passed = 0; let skipped = 0;
  records.forEach((r) => {
    try { // trying to prevent comparing null to url string
      if (r["meta_data"]["buildurl"] == url) {
        r["results"]["test_results"].forEach((r) => {
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
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  })

  return ("<span class='failed-highlight'> Failed: " + failed + " </span> <span class='skipped-highlight'> Skipped: " + skipped + " </span> <span class='passed-highlight'> Passed: " + passed + " </span> <span class='total-highlight'> Total: " + (failed+skipped+passed) + " </span>");
}
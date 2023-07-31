#!/root/.nvm/versions/node/v14.18.0/bin/node
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

// const { JSDOM } = require('jsdom');

// connect to database
async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://10.0.0.33:27017/atf', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// function with access control (waiting for Boran)

async function connectToMongoDB() {
  try {
    const username = 'mvbot';
    const password = 'mvtest123!';
    const host = '10.0.0.33';
    const port = 27017;
    const database = 'atf';

    // Construct the connection string with authentication
    const connectionString = `mongodb://${username}:${password}@${host}:${port}/${database}`;

    // Connect to MongoDB
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();

// mongoose schema to capture mongoDB data
const ResultSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  date: String,
  module_name: String,
  results: {
    test_names: [String],
    test_desc: [String],
    test_results: [String],
    test_exceptions: [String],
    bt: [String]
  },
  meta_data: {
    sys_vendor: String,
    product_name: String,
    platform: String,
    distro: String,
    mvmcli_version: String,
    log_dir: String,
    buildid: String,
    buildurl: String
  }
});

const ResultModel = mongoose.model('testresult', ResultSchema); // first arg is name of collection, second arg is mongoose schema object
module.exports = ResultModel;

// Serve static files from the 'public' directory
try {
  app.use(express.static(path.join(__dirname, 'public')));
} catch {
  console.log('Express App not defined');
}
app.use('/img', express.static(path.join(__dirname, 'img')));

// Helper functions to inject dynamic results data into modules/:buildid and tests/:testid routes

function injectHTML(file, title, date, htmlContent, button) {
  const modifiedHTML = file
    .replace('{{TITLE}}', title)
    .replace('{{DATE}}', date)
    .replace('{{HTML}}', htmlContent)
    .replace('{{BUTTONURL}}', button)
  return modifiedHTML;
}

function generateModulesHTML(filteredRecords){  
  let modulesHTML = "<table id='table'><tr class='tRow'><th class='tHeader'>Test Module</th><th class='tHeader'>Distro</th><th class='tHeader failed-highlight'>Failed</th><th class='tHeader skipped-highlight'>Skipped</th><th class='tHeader passed-highlight'>Passed</th><th class='tHeader total-highlight'>Total</th></tr>";
  filteredRecords.forEach((r) => {
    let failed = 0; let passed = 0; let skipped = 0;
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
    const testId = r["_id"];
    const linkURL = `tests/${testId}`;
    let rowHTML = `<tr class='tRow' onclick="window.location.href = \`${linkURL}\`;"><td class='tData'>${r["module_name"]}</td><td class='tData'>${r["meta_data"]["distro"]}</td><td class='tData'>${failed}</td><td class='tData'>${skipped}</td><td class='tData'>${passed}</td><td class='tData'>${failed+skipped+passed}</td></tr>`;
    modulesHTML += rowHTML;
  })
  
  modulesHTML += "</table>";
  buildName = filteredRecords[0]["meta_data"]["buildurl"].split("job/")[1].split("/").join(" ");
  date = filteredRecords[0]["date"]; // change to most recent date associated with buildid after initial testing
  return [buildName, date, modulesHTML];
  
}

function generateTestsHTML(testData){
  const moduleName = testData['module_name'];
  const testDate = testData['date'];
  
  let testHTML = "<table id='table'><tr class='tRow testsRow'><th class='tHeader'>Test Name</th><th class='tHeader'>Test Description</th><th class='tHeader'>Test Result</th><th class='tHeader'>Test Exceptions</th><th class='tHeader'>Test Backtrace (bt)</th></tr>";
  
  for (let i = 0; i < testData['results']['test_names'].length; i++) {
    let rowHTML = "<tr class='tRow'>";
    Object.values(testData['results']).forEach((a) => {
      rowHTML += `<td class='tData'><div class="tests-row">${a[i]}</div></td>`;
    })
    rowHTML += "</tr>";
    testHTML += rowHTML;
  }
  testHTML += "</table>";
  return [moduleName, testDate, testHTML];
}


// GET route for the root URL
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/graph', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public/graph.html'));
});

app.get('/modules/:buildjob/:buildnum', async (req, res) => {
  const buildid = "" + req.params.buildjob + "/" + req.params.buildnum + "/";
  try {
    const records = await ResultModel.find({}).exec();
    const filteredRecords = records.filter((record) => {
      const buildurl = record.meta_data?.buildurl;
      const buildidFromURL = buildurl?.split("job/")[1];
      return buildidFromURL === buildid;
    });

    if (filteredRecords.length === 0) {
      console.log('No records found with the specified buildID ', buildid);
      return res.status(404).send('Records Not Found');
    }
  
    const generatedHTML = generateModulesHTML(filteredRecords);

    fs.readFile(path.join(__dirname, 'public/modules.html'), 'utf8', (err, fileContent) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      // Inject the generated HTML into the specified div
      const injectedHTML = injectHTML(fileContent, ...generatedHTML); // passes array output of generateTestsHTML() into the injectHTML function
      // Send the modified HTML response
      res.send(injectedHTML);
    }); 
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Exposes records data for frontend js
app.get('/data', async (req, res) => {
  try {
    const records = await ResultModel.find();
    console.log("Success: found records")
    res.json(records); // Send the records data as JSON
  } catch (error) {
    console.error('Error fetching table records:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/app.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/modules/:buildjob/:buildnum/tests/:testid', async (req, res) => {
  const { buildjob, buildnum, testid } = req.params;
  const testId = testid;
  try {
    const testData = await ResultModel.findOne({ _id: testId}).exec();
    if (!testData) {
      console.log('No test document found with the specified _id ', testId);
      return res.status(404).send('Test Not Found');
    }
  
    const generatedHTML = generateTestsHTML(testData);

    fs.readFile(path.join(__dirname, 'public/tests.html'), 'utf8', (err, fileContent) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      // Inject the generated HTML into the specified div
      const buttonURL = "/modules/" + buildjob + "/" + buildnum + "/";
      const button = `<a href="${buttonURL}" class="back-button">Back</a>`;
      generatedHTML.push(button);
      const injectedHTML = injectHTML(fileContent, ...generatedHTML); // passes array output of generateTestsHTML() into the injectHTML function
      
      // Send the modified HTML response
      res.send(injectedHTML);
    }); 
  } catch (error) {
    console.error('Error fetching test records:', error);
    res.status(500).send('Internal Server Error');
  }

});

// start dashboard app server
const PORT = 3000;
const IP_ADDRESS = 'eagle.eng.memverge.com';

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running at http://${IP_ADDRESS}:${PORT}/`);
});
